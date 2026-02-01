// page/[page].paths.js
import loader from '../posts.data.js'

export default {
  async paths() {
    // Load the posts data using the content loader
    const posts = await loader.load()
    
    const totalPosts = posts.length
    const postsPerPage = 6
    const totalPages = Math.ceil(totalPosts / postsPerPage)

    return Array.from({ length: totalPages }, (_, i) => ({
      params: { page: String(i + 1) }
    }))
  }
}