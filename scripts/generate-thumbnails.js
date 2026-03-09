#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const PHOTOS_DIR = path.join(__dirname, '../docs/.vuepress/public/photos');
const THUMBNAILS_DIR = path.join(PHOTOS_DIR, '.thumbnails');
const THUMBNAIL_WIDTH = 320;
const THUMBNAIL_HEIGHT = 240;

async function generateThumbnails() {
  if (!fs.existsSync(THUMBNAILS_DIR)) {
    fs.mkdirSync(THUMBNAILS_DIR, { recursive: true });
    console.log('Created thumbnails directory');
  }

  const photoFiles = fs.readdirSync(PHOTOS_DIR)
    .filter(file => file.toLowerCase().endsWith('.jpg'));

  console.log(`Processing ${photoFiles.length} photos...`);

  for (const photoFile of photoFiles) {
    const inputPath = path.join(PHOTOS_DIR, photoFile);
    const outputPath = path.join(THUMBNAILS_DIR, `${photoFile}.webp`);

    if (fs.existsSync(outputPath)) {
      console.log(`Skip ${photoFile} (exists)`);
      continue;
    }

    try {
      await sharp(inputPath)
        .resize(THUMBNAIL_WIDTH, THUMBNAIL_HEIGHT, { fit: 'cover', position: 'center' })
        .webp({ quality: 80 })
        .toFile(outputPath);
      console.log(`Generated: ${photoFile}`);
    } catch (error) {
      console.error(`Failed ${photoFile}:`, error.message);
    }
  }
}

generateThumbnails().catch(error => {
  console.error('Fatal error:', error);
  process.exit(1);
});
