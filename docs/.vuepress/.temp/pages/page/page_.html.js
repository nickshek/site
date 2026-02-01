import comp from "/mnt/c/Code/site/docs/.vuepress/.temp/pages/page/page_.html.vue"
const data = JSON.parse("{\"path\":\"/page/page_.html\",\"title\":\"Nick Shek 的個人部落格 - 第 {{ currentPage }} 頁\",\"lang\":\"zh-HK\",\"frontmatter\":{\"title\":\"Nick Shek 的個人部落格 - 第 {{ currentPage }} 頁\"},\"git\":{\"updatedTime\":1769968243000,\"contributors\":[{\"name\":\"Nick Shek\",\"username\":\"\",\"email\":\"alfshek@hotmail.com\",\"commits\":1}],\"changelog\":[{\"hash\":\"cf12b38bae4fbb4bbcbec2f7d13ced96ad3d10cb\",\"time\":1769968243000,\"email\":\"alfshek@hotmail.com\",\"author\":\"Nick Shek\",\"message\":\"save current progress\"}]},\"filePathRelative\":\"page/[page].md\"}")
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
