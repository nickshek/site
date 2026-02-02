import { defineClientConfig } from '@vuepress/client'
import DynamicBlogList from './components/DynamicBlogList.vue'

export default defineClientConfig({
  enhance({ app }) {
    app.component('DynamicBlogList', DynamicBlogList)
  },
})