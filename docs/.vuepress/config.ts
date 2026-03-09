import { defineUserConfig } from 'vuepress'
import { hopeTheme } from 'vuepress-theme-hope'
import { viteBundler } from '@vuepress/bundler-vite'
import { fileURLToPath } from 'node:url'
import path from 'node:path'
import fs from 'node:fs'
import * as exifParser from 'exif-parser'
import sharp from 'sharp'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const docsRoot = path.resolve(__dirname, '..')
const photosDir = path.resolve(docsRoot, ".vuepress", "public" , 'photos')
const thumbnailsDir = path.resolve(photosDir, 'thumbnails')
const galleryPagePath = path.resolve(docsRoot, 'photos.md')
const THUMBNAIL_WIDTH = 320
const THUMBNAIL_HEIGHT = 240

const IMAGE_EXTENSIONS = new Set([
  '.jpg',
  '.jpeg',
  '.png',
  '.webp',
  '.gif',
  '.bmp',
  '.svg',
  '.avif',
  '.heic',
  '.heif',
])

const EXIF_DATE_TIME_PATTERN = /\b(\d{4}):(\d{2}):(\d{2}) (\d{2}):(\d{2}):(\d{2})\b/

const formatDate = (date: Date): string => {
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')

  return `${year}-${month}-${day}`
}

const parseExifDateTimeString = (value: string): Date | null => {
  const match = value.match(EXIF_DATE_TIME_PATTERN)

  if (!match) {
    return null
  }

  const [, year, month, day, hour, minute, second] = match
  const parsed = new Date(
    Number(year),
    Number(month) - 1,
    Number(day),
    Number(hour),
    Number(minute),
    Number(second),
  )

  return Number.isNaN(parsed.getTime()) ? null : parsed
}

const getJpegHeaderTimestamp = (fullPath: string): Date | null => {
  try {
    const fileBuffer = fs.readFileSync(fullPath)
    const parser = exifParser.create(fileBuffer)
    const result = parser.parse()
    const exifTimestamp = result.tags.DateTimeOriginal ?? result.tags.CreateDate ?? result.tags.ModifyDate

    if (typeof exifTimestamp === 'number' && Number.isFinite(exifTimestamp)) {
      return new Date(exifTimestamp * 1000)
    }

    const headerText = fileBuffer.subarray(0, Math.min(fileBuffer.length, 262144)).toString('latin1')
    const dateMatch = headerText.match(EXIF_DATE_TIME_PATTERN)

    if (dateMatch) {
      return parseExifDateTimeString(dateMatch[0])
    }
  }
  catch (error) {
    console.error('[Photo Gallery] Failed to read JPEG header timestamp:', error)
  }

  return null
}

const getPhotoTimestamp = (fullPath: string, ext: string, stat: fs.Stats): Date => {
  if (ext === '.jpg' || ext === '.jpeg') {
    const headerTimestamp = getJpegHeaderTimestamp(fullPath)

    if (headerTimestamp) {
      return headerTimestamp
    }
  }

  return stat.birthtimeMs > 0 ? stat.birthtime : stat.mtime
}

const ensureThumbnail = async (sourcePath: string, sourceStat: fs.Stats, thumbnailPath: string): Promise<void> => {
  const thumbnailExists = fs.existsSync(thumbnailPath)

  if (thumbnailExists) {
    const thumbnailStat = fs.statSync(thumbnailPath)

    if (thumbnailStat.mtimeMs >= sourceStat.mtimeMs) {
      return
    }
  }

  await sharp(sourcePath)
    .rotate()
    .resize(THUMBNAIL_WIDTH, THUMBNAIL_HEIGHT, { fit: 'cover' })
    .webp({ quality: 78 })
    .toFile(thumbnailPath)
}

const generatePhotoGalleryPage = async (): Promise<void> => {
  if (!fs.existsSync(photosDir)) {
    fs.mkdirSync(photosDir, { recursive: true })
  }

  if (!fs.existsSync(thumbnailsDir)) {
    fs.mkdirSync(thumbnailsDir, { recursive: true })
  }

  const files = fs.readdirSync(photosDir)
    .filter((file) => IMAGE_EXTENSIONS.has(path.extname(file).toLowerCase()))
    .map((file) => {
      const fullPath = path.join(photosDir, file)
      const ext = path.extname(file).toLowerCase()
      const stat = fs.statSync(fullPath)
      const timestamp = getPhotoTimestamp(fullPath, ext, stat)

      return {
        file,
        fullPath,
        stat,
        timestamp,
      }
    })
    .sort((a, b) => b.timestamp.getTime() - a.timestamp.getTime())

  const photosWithThumbnails = await Promise.all(files.map(async (photo) => {
    const thumbnailFile = `${photo.file}.webp`
    const thumbnailPath = path.join(thumbnailsDir, thumbnailFile)

    try {
      await ensureThumbnail(photo.fullPath, photo.stat, thumbnailPath)
    }
    catch (error) {
      console.error('[Photo Gallery] Failed to generate thumbnail:', photo.file, error)
    }

    return {
      file: photo.file,
      timestamp: photo.timestamp,
      thumbnailFile,
    }
  }))

  const lines: string[] = [
    '---',
    'title: Photo Gallery',
    'icon: image',
    'article: false',
    'timeline: false',
    '---',
    '',
    '# Photo Gallery',
    '',
    'The following is a collection of photos I\'ve taken with my M43 camera. I\'ll try to keep this gallery updated with my latest shots. Click on any thumbnail to view the full-size image.',
    '',
  ]

  if (files.length === 0) {
    lines.push('No photos yet. Add image files to `/docs/.vuepress/public/photos/` and this page will update automatically.')
    lines.push('')
  }
  else {
    const grouped = new Map<string, Array<{ file: string, timestamp: Date, thumbnailFile: string }>>()

    for (const file of photosWithThumbnails) {
      const key = formatDate(file.timestamp)
      const list = grouped.get(key) ?? []
      list.push(file)
      grouped.set(key, list)
    }

    for (const [shootingDate, photoList] of grouped) {
      lines.push(`## ${shootingDate}`)
      lines.push('')

      const thumbnails = photoList.map((photo) => {
        const encodedFullName = encodeURIComponent(photo.file)
        const encodedThumbnailName = encodeURIComponent(photo.thumbnailFile)

        return `<a href="/photos/${encodedFullName}"><img src="/photos/thumbnails/${encodedThumbnailName}" loading="lazy" width="${THUMBNAIL_WIDTH}" height="${THUMBNAIL_HEIGHT}" /></a>`
      })

      lines.push(thumbnails.join(' '))
      lines.push('')
    }
  }

  const nextContent = `${lines.join('\n')}\n`
  const currentContent = fs.existsSync(galleryPagePath) ? fs.readFileSync(galleryPagePath, 'utf-8') : ''

  if (currentContent !== nextContent) {
    fs.writeFileSync(galleryPagePath, nextContent, 'utf-8')
  }
}

await generatePhotoGalleryPage()

export default defineUserConfig({
  lang: 'en-US',
  title: 'Nick Shek\'s Homepage',
  description: 'Nick Shek\'s Blog',

  base: '/',

  bundler: viteBundler(),

  // Google Analytics
  head: [
    [
      'script',
      {
        async: true,
        src: 'https://www.googletagmanager.com/gtag/js?id=G-XTBYQX6JWX',
      },
    ],
    [
      'script',
      {},
      `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-XTBYQX6JWX');
      `,
    ],
  ],

  theme: hopeTheme({
    hostname: 'https://nickshek.github.io',
    
    author: {
      name: 'Nick Shek',
      url: 'https://nickshek.github.io',
    },

    iconAssets: 'fontawesome-with-brands',

    logo: null,

    repo: 'nickshek/site',

    docsDir: 'docs',

    navbar: [
      { text: 'Articles', link: '/' },
      { text: 'Gallery', link: '/photos.html' },
    ],
    
    sidebar: false,
    
    aside: false,
    
    editLink: false,
    
    lastUpdated: true,
    
    contributors: false,

    blog: {
      description: 'Nick Shek\'s Blog',
      intro: '/',
      medias: {
        GitHub: 'https://github.com/nickshek',
      },
      excerptLength: 0,
    },

    plugins: {
      blog: {
        excerptLength: 999999,
      },
      
      comment: {
        provider: 'Giscus',
        repo: 'nickshek/nickshek.github.io',
        repoId: 'MDEwOlJlcG9zaXRvcnk1NTAyMjg5Nw==',
        category: 'Announcements',
        categoryId: 'DIC_kwDOA0eVMc4C17Nv',
        mapping: 'pathname',
        strict: false,
        reactionsEnabled: true,
        inputPosition: 'top',
        lightTheme: 'light',
        darkTheme: 'dark',
        lazyLoading: true,
      },

      copyCode: {},
      
      mdEnhance: {
        align: true,
        attrs: true,
        codetabs: true,
        demo: true,
        figure: true,
        imgLazyload: true,
        imgSize: true,
        include: true,
        mark: true,
        stylize: [
          {
            matcher: 'Recommended',
            replacer: ({ tag }) => {
              if (tag === 'em')
                return {
                  tag: 'Badge',
                  attrs: { type: 'tip' },
                  content: 'Recommended',
                }
            },
          },
        ],
        sub: true,
        sup: true,
        tabs: true,
        vPre: true,
      },
    },
  }),
})
