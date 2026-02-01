<template>
  <div class="blog-post">
    <header class="post-header">
      <h1>{{ title }}</h1>
      <div class="post-meta">
        <time :datetime="date">{{ formatDate(date) }}</time>
        <span v-if="tags && tags.length" class="tags">
          <span v-for="tag in tags" :key="tag" class="tag">#{{ tag }}</span>
        </span>
      </div>
    </header>
    <article class="post-content">
      <slot />
    </article>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  title: String,
  date: String,
  tags: Array
})

function formatDate(dateString) {
  if (!dateString) return ''
  const date = new Date(dateString)
  return date.toLocaleDateString('zh-TW', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}
</script>

<style scoped>
.blog-post {
  max-width: 1152px;
  margin: 0 auto;
}

.post-header {
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid var(--vp-c-divider);
}

.post-header h1 {
  margin-bottom: 1rem;
}

.post-meta {
  display: flex;
  align-items: center;
  gap: 1rem;
  color: var(--vp-c-text-2);
  font-size: 0.9rem;
}

.tags {
  display: flex;
  gap: 0.5rem;
}

.tag {
  background: var(--vp-c-default-soft);
  color: var(--vp-c-text-2);
  padding: 0.2rem 0.5rem;
  border-radius: 0.25rem;
  font-size: 0.8rem;
}

.post-content {
  line-height: 1.7;
}
</style>