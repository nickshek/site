import { defineClientConfig } from '@vuepress/client'

export default defineClientConfig({
  enhance({ app }) {
    // If you have global components, register them here
    // app.component('DynamicBlogList', DynamicBlogList)
  },
})