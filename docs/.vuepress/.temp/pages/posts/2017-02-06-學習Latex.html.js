import comp from "/mnt/c/Code/site/docs/.vuepress/.temp/pages/posts/2017-02-06-學習Latex.html.vue"
const data = JSON.parse("{\"path\":\"/posts/2017-02-06-%E5%AD%B8%E7%BF%92Latex.html\",\"title\":\"學習Latex\",\"lang\":\"zh-HK\",\"frontmatter\":{\"title\":\"學習Latex\",\"date\":\"2017-02-06T00:00:00.000Z\",\"tags\":[\"Latex\"]},\"git\":{\"updatedTime\":1769933603000,\"contributors\":[{\"name\":\"Nick Shek\",\"username\":\"\",\"email\":\"alfshek@hotmail.com\",\"commits\":2}],\"changelog\":[{\"hash\":\"5a23ae474b1739371cf66243a14cb44fdb4a2285\",\"time\":1769933603000,\"email\":\"nickshek@example.com\",\"author\":\"Nick Shek\",\"message\":\"feat: migrate from Sculpin to VuePress v1\"},{\"hash\":\"d624104a8d97cd3adc915172148b82cb0b5a10a1\",\"time\":1486401339000,\"email\":\"alfshek@hotmail.com\",\"author\":\"Nick Shek\",\"message\":\"add new post for latex\"}]},\"filePathRelative\":\"posts/2017-02-06-學習Latex.md\"}")
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
