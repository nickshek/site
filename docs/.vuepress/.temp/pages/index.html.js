import comp from "/mnt/c/Code/site/docs/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"Nick Shek's Blog\",\"lang\":\"zh-HK\",\"frontmatter\":{\"home\":false,\"title\":\"Nick Shek's Blog\",\"description\":\"一個關於程式開發、Linux、Docker 及其他技術的個人博客\"},\"git\":{\"updatedTime\":1769968243000,\"contributors\":[{\"name\":\"Nick Shek\",\"username\":\"\",\"email\":\"nickshek@example.com\",\"commits\":3}],\"changelog\":[{\"hash\":\"cf12b38bae4fbb4bbcbec2f7d13ced96ad3d10cb\",\"time\":1769968243000,\"email\":\"alfshek@hotmail.com\",\"author\":\"Nick Shek\",\"message\":\"save current progress\"},{\"hash\":\"71193b13fd90333d8086034823ef87fb99c18714\",\"time\":1769965471000,\"email\":\"alfshek@hotmail.com\",\"author\":\"Nick Shek\",\"message\":\"feat: focusing on VitePress\"},{\"hash\":\"ecdc8f12452fa5b977cfc5620b5c39c5814bfec9\",\"time\":1769934175000,\"email\":\"nickshek@example.com\",\"author\":\"Nick Shek\",\"message\":\"refactor: migrate to VitePress from VuePress\"}]},\"filePathRelative\":\"index.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
