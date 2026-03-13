/**
 * Blog Store - LocalStorage-based persistence for blog posts
 * 
 * This abstraction can be replaced with:
 * - A real API backend
 * - GitHub-backed Markdown repository
 * - GitHub Actions building static pages
 * - Any CMS integration
 */

const STORAGE_KEY = 'rahul_goel_blog_posts'

/**
 * Blog Post Interface:
 * {
 *   id: string,
 *   title: string,
 *   slug: string,
 *   content: string (Markdown),
 *   category: string,
 *   tags: string[],
 *   status: 'draft' | 'published',
 *   createdAt: string (ISO date),
 *   updatedAt: string (ISO date)
 * }
 */

export const blogStore = {
  /**
   * Get all posts, optionally filtered
   * @param {Object} filters - Optional filters { status, category }
   * @returns {Array} Array of posts
   */
  getPosts(filters = {}) {
    try {
      const posts = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')
      
      let filtered = posts
      
      if (filters.status) {
        filtered = filtered.filter(p => p.status === filters.status)
      }
      
      if (filters.category) {
        filtered = filtered.filter(p => p.category === filters.category)
      }
      
      return filtered
    } catch (error) {
      console.error('Error reading posts from localStorage:', error)
      return []
    }
  },

  /**
   * Get a single post by slug
   * @param {string} slug - The post slug
   * @returns {Object|null} The post or null if not found
   */
  getPost(slug) {
    try {
      const posts = this.getPosts()
      return posts.find(p => p.slug === slug) || null
    } catch (error) {
      console.error('Error getting post:', error)
      return null
    }
  },

  /**
   * Save a post (create or update)
   * @param {Object} post - The post to save
   * @returns {Object} The saved post
   */
  savePost(post) {
    try {
      const posts = this.getPosts()
      const existingIndex = posts.findIndex(p => p.id === post.id || p.slug === post.slug)
      
      const postToSave = {
        ...post,
        id: post.id || Date.now().toString(),
        updatedAt: new Date().toISOString(),
        createdAt: post.createdAt || new Date().toISOString(),
      }
      
      if (existingIndex >= 0) {
        // Update existing post
        posts[existingIndex] = postToSave
      } else {
        // Create new post
        posts.push(postToSave)
      }
      
      localStorage.setItem(STORAGE_KEY, JSON.stringify(posts))
      return postToSave
    } catch (error) {
      console.error('Error saving post:', error)
      throw error
    }
  },

  /**
   * Delete a post by slug
   * @param {string} slug - The post slug to delete
   * @returns {boolean} True if deleted, false if not found
   */
  deletePost(slug) {
    try {
      const posts = this.getPosts()
      const filteredPosts = posts.filter(p => p.slug !== slug)
      
      if (filteredPosts.length === posts.length) {
        return false // Post not found
      }
      
      localStorage.setItem(STORAGE_KEY, JSON.stringify(filteredPosts))
      return true
    } catch (error) {
      console.error('Error deleting post:', error)
      return false
    }
  },

  /**
   * Clear all posts (use with caution!)
   */
  clearAll() {
    localStorage.removeItem(STORAGE_KEY)
  },

  /**
   * Export all posts as JSON
   * @returns {string} JSON string of all posts
   */
  exportPosts() {
    return JSON.stringify(this.getPosts(), null, 2)
  },

  /**
   * Import posts from JSON
   * @param {string} jsonString - JSON string of posts to import
   * @param {boolean} merge - If true, merge with existing; if false, replace all
   */
  importPosts(jsonString, merge = true) {
    try {
      const importedPosts = JSON.parse(jsonString)
      
      if (merge) {
        const existingPosts = this.getPosts()
        const mergedPosts = [...existingPosts]
        
        importedPosts.forEach(imported => {
          const existingIndex = mergedPosts.findIndex(p => p.slug === imported.slug)
          if (existingIndex >= 0) {
            mergedPosts[existingIndex] = imported
          } else {
            mergedPosts.push(imported)
          }
        })
        
        localStorage.setItem(STORAGE_KEY, JSON.stringify(mergedPosts))
      } else {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(importedPosts))
      }
      
      return true
    } catch (error) {
      console.error('Error importing posts:', error)
      return false
    }
  }
}

// Export for potential future API replacement
export default blogStore