<template>
  <div class="blog-list">
    <div v-for="yearGroup in groupedPosts" :key="yearGroup.year" class="year-group">
      <h3>{{ yearGroup.year }}</h3>
      <ul class="post-list">
        <li v-for="post in yearGroup.posts" :key="post.path" class="post-item">
          <RouterLink :to="post.path" class="post-link">
            {{ post.title }}
          </RouterLink>
          <span class="post-date">{{ formatDate(post.date) }}</span>
          <div v-if="post.tags && post.tags.length > 0" class="post-tags">
            <RouterLink 
              v-for="tag in post.tags" 
              :key="tag" 
              :to="`/tag/${encodeURIComponent(tag)}/`"
              class="tag"
            >
              {{ tag }}
            </RouterLink>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

// Hardcoded post data for now - this could be made dynamic later
const postsData = [
  { filename: '2026-02-02-網站遷移完成.md', date: '2026-02-02', tags: ['blog', 'vuepress', 'ai', 'automation'] },
  { filename: '2018-10-15-在Centos7下安裝Chrome.md', date: '2018-10-15', tags: ['linux', 'centos'] },
  { filename: '2018-10-14-在Cento 7下使用Cisco AnyConnect Secure Mobility Client.md', date: '2018-10-14', tags: ['linux', 'centos', 'vpn'] },
  { filename: '2017-09-24-差不多半年沒有更新blog了.md', date: '2017-09-24', tags: [] },
  { filename: '2017-02-06-學習Latex.md', date: '2017-02-06', tags: ['latex'] },
  { filename: '2017-01-26-用ansible去傳送電子郵件.md', date: '2017-01-26', tags: ['ansible'] },
  { filename: '2017-01-12-移除及暫停所有Docker container 指令.md', date: '2017-01-12', tags: ['docker'] },
  { filename: '2016-10-01 思考在linux一次性重新命名多個file的問題.md', date: '2016-10-01', tags: ['linux'] },
  { filename: '2016-07-10-執行Laravel PHPUnit 時出現"Maximum function nesting level of \'100\' reached, aborting!".md', date: '2016-07-10', tags: ['laravel', 'php'] },
  { filename: '2016-07-09-docker build image 時出現 no space left on device.md', date: '2016-07-09', tags: ['docker'] },
  { filename: '2016-06-28-安裝Ubuntu Server至舊Notebook注意事項.md', date: '2016-06-28', tags: ['ubuntu', 'linux'] },
  { filename: '2016-06-24-使用sftp時出現"connection reset by peer connection closed".md', date: '2016-06-24', tags: ['sftp', 'ssh'] },
  { filename: '2016-04-16-使用Apache設定Alias時出現403 Foridden.md', date: '2016-04-16', tags: ['apache'] },
  { filename: '2015-11-15-Failed to listen on localhost:8000 (reason: Address already in use).md', date: '2015-11-15', tags: ['debug'] },
  { filename: '2015-04-15-Socket.io 1.3.5 cdn 同源問題.md', date: '2015-04-15', tags: ['socket.io', 'javascript'] },
  { filename: '2015-04-05-如何令git repo 連接己經存在的heroku app.md', date: '2015-04-05', tags: ['git', 'heroku'] },
  { filename: '2015-03-14-Missing `secret_key_base` for \'production\' environment.md', date: '2015-03-14', tags: ['rails', 'ruby'] },
  { filename: '2015-03-02-如何令你使用SSH時更安全.md', date: '2015-03-02', tags: ['ssh', 'security'] },
  { filename: '2015-02-24-更新git branch所有舊有的電子郵件地址.md', date: '2015-02-24', tags: ['git'] },
  { filename: '2015-01-26-react-rails.git (at master) is not yet checked out. Run `bundle install` first.md', date: '2015-01-26', tags: ['react', 'rails'] },
  { filename: '2015-01-22-debug.py => IndexError: list index out of range.md', date: '2015-01-22', tags: ['python', 'debug'] },
  { filename: '2015-01-20-從fontello下載font icon,及使用Nokogiri製作一張font icon class 的名單.md', date: '2015-01-20', tags: ['fonts', 'ruby'] },
  { filename: '2015-01-18-TypeError: deepestAncestor is undefined.md', date: '2015-01-18', tags: ['javascript', 'debug'] },
  { filename: '2015-01-17-redis在socket.io接收多次重覆信息問題.md', date: '2015-01-17', tags: ['redis', 'socket.io'] },
  { filename: '2015-01-16-將package.json入面所有的dependencies更新至最新版本.md', date: '2015-01-16', tags: ['npm', 'javascript'] },
  { filename: '2015-01-11-在Linux terminal列輸出己整理的JSON.md', date: '2015-01-11', tags: ['linux'] },
  { filename: '2014-12-30-利用regular expression判斷URL是否為YouTube URL，且return youtube video ID.md', date: '2014-12-30', tags: ['regex', 'javascript'] },
  { filename: '2014-12-20-Friendly ID中文問題.md', date: '2014-12-20', tags: ['rails', 'ruby'] },
  { filename: '2014-12-15-把現有的project folder變為git repository.md', date: '2014-12-15', tags: ['git'] },
  { filename: '2014-12-10-令你的youtube embed code變為responsive.md', date: '2014-12-10', tags: ['css', 'responsive'] },
  { filename: '2014-12-10-HKTV 選戰 插曲.md', date: '2014-12-10', tags: [] },
  { filename: '2014-12-07-在ubuntu移除圖片的metadata.md', date: '2014-12-07', tags: ['ubuntu', 'linux'] },
  { filename: '2014-11-26-在rails migration改變column type.md', date: '2014-11-26', tags: ['rails', 'ruby'] },
  { filename: '2014-11-13-使用ubuntu在localhost建立subdomain.md', date: '2014-11-13', tags: ['ubuntu', 'linux'] }
]

const posts = computed(() => {
  return postsData.map(item => {
    const dateObj = new Date(item.date)
    const title = item.filename
      .replace(/^\d{4}-\d{2}-\d{2}[-\s]*/, '')
      .replace(/\.md$/, '')
    
    return {
      path: `/posts/${encodeURIComponent(item.filename.replace(/\.md$/, '.html'))}`,
      title: title,
      date: dateObj,
      year: dateObj.getFullYear(),
      tags: item.tags,
      filename: item.filename
    }
  }).sort((a, b) => b.date - a.date)
})

// Group posts by year
const groupedPosts = computed(() => {
  const groups = {}
  
  posts.value.forEach(post => {
    const year = post.year
    if (!groups[year]) {
      groups[year] = []
    }
    groups[year].push(post)
  })
  
  // Convert to array and sort by year descending
  return Object.keys(groups)
    .sort((a, b) => b - a)
    .map(year => ({
      year: parseInt(year),
      posts: groups[year]
    }))
})

// Format date for display
const formatDate = (date) => {
  return date.toLocaleDateString('zh-TW', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}
</script>

<style scoped>
.blog-list {
  margin: 2rem 0;
}

.year-group {
  margin-bottom: 3rem;
}

.year-group h3 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #2c3e50;
  border-bottom: 2px solid #3eaf7c;
  padding-bottom: 0.5rem;
}

.post-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.post-item {
  margin-bottom: 1rem;
  padding: 1rem;
  border: 1px solid #eee;
  border-radius: 6px;
  transition: box-shadow 0.3s ease;
}

.post-item:hover {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.post-link {
  font-size: 1.1rem;
  font-weight: 600;
  text-decoration: none;
  color: #3eaf7c;
  display: block;
  margin-bottom: 0.5rem;
}

.post-link:hover {
  color: #2c8e68;
  text-decoration: underline;
}

.post-date {
  font-size: 0.9rem;
  color: #666;
  display: block;
  margin-bottom: 0.5rem;
}

.post-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tag {
  background-color: #f0f0f0;
  color: #666;
  padding: 0.2rem 0.5rem;
  border-radius: 3px;
  font-size: 0.8rem;
  text-decoration: none;
  transition: all 0.2s ease;
}

.tag:hover {
  background-color: #3eaf7c;
  color: white;
  transform: translateY(-1px);
}

@media (max-width: 768px) {
  .post-item {
    padding: 0.8rem;
  }
  
  .post-link {
    font-size: 1rem;
  }
}
</style>