import DefaultTheme from 'vitepress/theme'
import BlogPost from './components/BlogPost.vue'
import './custom.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('BlogPost', BlogPost)
  }
}