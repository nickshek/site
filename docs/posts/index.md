# 文章列表

歡迎來到我的部落格！這裡記錄了我在技術學習路上的經驗與心得。

## 最新文章

<script setup>
import { data as posts } from './posts.data.js'

const groupedPosts = posts.reduce((acc, post) => {
  const year = new Date(post.date).getFullYear()
  if (!acc[year]) {
    acc[year] = []
  }
  acc[year].push(post)
  return acc
}, {})

const sortedYears = Object.keys(groupedPosts).sort((a, b) => b - a)
</script>

<div v-for="year in sortedYears" :key="year" class="year-group">
  <h2>{{ year }}</h2>
  <div class="posts-list">
    <div v-for="post in groupedPosts[year]" :key="post.url" class="post-item">
      <div class="post-date">{{ new Date(post.date).toLocaleDateString('zh-TW') }}</div>
      <div class="post-title">
        <a :href="post.url">{{ post.title }}</a>
      </div>
      <div v-if="post.excerpt" class="post-excerpt">{{ post.excerpt }}</div>
    </div>
  </div>
</div>

<style scoped>
.year-group {
  margin-bottom: 2rem;
}

.year-group h2 {
  border-bottom: 1px solid var(--vp-c-divider);
  padding-bottom: 0.5rem;
}

.posts-list {
  margin-top: 1rem;
}

.post-item {
  display: grid;
  grid-template-columns: 120px 1fr;
  gap: 1rem;
  padding: 1rem 0;
  border-bottom: 1px solid var(--vp-c-divider-light);
}

.post-item:last-child {
  border-bottom: none;
}

.post-date {
  color: var(--vp-c-text-2);
  font-size: 0.9rem;
}

.post-title a {
  color: var(--vp-c-text-1);
  text-decoration: none;
  font-weight: 500;
}

.post-title a:hover {
  color: var(--vp-c-brand);
  text-decoration: underline;
}

.post-excerpt {
  color: var(--vp-c-text-2);
  font-size: 0.9rem;
  margin-top: 0.5rem;
  grid-column: 2;
}

@media (max-width: 768px) {
  .post-item {
    grid-template-columns: 1fr;
    gap: 0.5rem;
  }
  
  .post-excerpt {
    grid-column: 1;
  }
}
</style>