import { createContentLoader } from 'vitepress'

export default createContentLoader('posts/*.md', {
  includeSrc: false, 
  render: true,
  excerpt: true,
  transform(rawData) {
    return rawData
      .filter(({ url }) => !url.includes('/posts/index.html') && !url.includes('/posts/README.html'))
      .map(({ url, frontmatter, excerpt }) => {
        // Extract date and title from filename
        const fileName = url.split('/').pop()?.replace('.html', '') || ''
        const dateMatch = fileName.match(/^(\d{4}-\d{2}-\d{2})/)
        const date = dateMatch ? dateMatch[1] : frontmatter.date || '2014-01-01'
        
        // Extract title
        let title = frontmatter.title
        if (!title) {
          title = fileName
            .replace(/^\d{4}-\d{2}-\d{2}-/, '') // Remove date prefix
            .replace(/-/g, ' ') // Replace dashes with spaces
        }
        
        return {
          title,
          url,
          date,
          excerpt: frontmatter.description || excerpt || '',
          tags: frontmatter.tags || []
        }
      })
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  }
})