<template><div><h1 id="nick-shek-的個人部落格-第-currentpage-頁" tabindex="-1"><a class="header-anchor" href="#nick-shek-的個人部落格-第-currentpage-頁"><span>Nick Shek 的個人部落格 - 第 {{ currentPage }} 頁</span></a></h1>
<p>歡迎來到我的技術部落格！這裡記錄了我在開發路上的經驗與心得。</p>
<div class="recent-posts-section">
  <h2>最新文章 <span class="post-count">({{ totalPosts }} 篇)</span></h2>
  <div class="recent-posts">
    <div v-for="post in paginatedPosts" :key="post.url" class="post-card">
      <div class="post-date">{{ new Date(post.date).toLocaleDateString('zh-TW') }}</div>
      <h3><a :href="post.url">{{ post.title }}</a></h3>
      <p v-if="post.excerpt" class="post-excerpt">{{ post.excerpt }}</p>
    </div>
  </div>
  <div v-if="totalPages > 1" class="pagination">
    <a v-if="currentPage > 1"
      :href="pageLink(currentPage - 1)"
      class="pagination-btn"
    >← 上一頁</a>
    <a v-for="p in totalPages" :key="p" :href="pageLink(p)" :class="['page-btn', { active: currentPage === p }]" >
      {{ p }}
    </a>
    <a v-if="currentPage < totalPages"
      :href="pageLink(currentPage + 1)"
      class="pagination-btn"
    >下一頁 →</a>
  </div>
</div>
</div></template>


<script setup>
import { data as posts } from '../posts.data.js'   // adjust path if needed
import { useRoute } from 'vitepress'
import { computed } from 'vue'

const route = useRoute()
const currentPage = computed(() => {
  const num = Number(route.params.page)
  return isNaN(num) || num < 1 ? 1 : num
})

const postsPerPage = 6
const totalPosts = posts.length
const totalPages = Math.ceil(totalPosts / postsPerPage)

const paginatedPosts = computed(() => {
  const start = (currentPage.value - 1) * postsPerPage
  return posts.slice(start, start + postsPerPage)
})

const pageLink = (p) => p === 1 ? '/' : `/page/${p}`
</script>
<style scoped>
.recent-posts-section {
  margin: 3rem 0;
  max-width: 1152px;
  margin-left: auto;
  margin-right: auto;
  padding: 0 1.5rem;
}

.recent-posts-section h2 {
  margin-bottom: 2rem;
  text-align: center;
  color: var(--vp-c-text-1);
}

.post-count {
  color: var(--vp-c-text-2);
  font-weight: normal;
  font-size: 0.9em;
}

.recent-posts {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
}

.post-card {
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider-light);
  border-radius: 8px;
  padding: 1.5rem;
  transition: all 0.3s ease;
}

.post-card:hover {
  border-color: var(--vp-c-brand);
  transform: translateY(-4px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
}

.post-date {
  color: var(--vp-c-text-2);
  font-size: 0.85rem;
  margin-bottom: 0.5rem;
}

.post-card h3 {
  margin: 0 0 0.75rem 0;
  font-size: 1.1rem;
  line-height: 1.4;
}

.post-card h3 a {
  color: var(--vp-c-text-1);
  text-decoration: none;
}

.post-card h3 a:hover {
  color: var(--vp-c-brand);
}

.post-excerpt {
  color: var(--vp-c-text-2);
  font-size: 0.9rem;
  line-height: 1.5;
  margin: 0;
}

.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin: 2rem 0;
}

.pagination-btn {
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  color: var(--vp-c-text-1);
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.pagination-btn:hover:not(:disabled) {
  background: var(--vp-c-brand);
  color: white;
  border-color: var(--vp-c-brand);
}

.pagination-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.page-numbers {
  display: flex;
  gap: 0.5rem;
}

.page-btn {
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  color: var(--vp-c-text-1);
  padding: 0.5rem 0.75rem;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s ease;
  min-width: 40px;
}

.page-btn:hover {
  background: var(--vp-c-brand-light);
  border-color: var(--vp-c-brand);
}

.page-btn.active {
  background: var(--vp-c-brand);
  color: white;
  border-color: var(--vp-c-brand);
}

.more-posts {
  text-align: center;
  margin: 3rem 0;
}

.view-all-link {
  color: var(--vp-c-brand);
  text-decoration: none;
  font-weight: 500;
  font-size: 1.1rem;
}

.view-all-link:hover {
  text-decoration: underline;
}

@media (max-width: 768px) {
  .recent-posts {
    grid-template-columns: 1fr;
  }
  
  .pagination {
    flex-direction: column;
    gap: 1rem;
  }
  
  .page-numbers {
    flex-wrap: wrap;
    justify-content: center;
  }
}
</style>