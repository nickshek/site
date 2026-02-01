import comp from "/mnt/c/Code/site/docs/.vuepress/.temp/pages/posts/2015-01-16-將package.json入面所有的dependencies更新至最新版本.html.vue"
const data = JSON.parse("{\"path\":\"/posts/2015-01-16-%E5%B0%87package.json%E5%85%A5%E9%9D%A2%E6%89%80%E6%9C%89%E7%9A%84dependencies%E6%9B%B4%E6%96%B0%E8%87%B3%E6%9C%80%E6%96%B0%E7%89%88%E6%9C%AC.html\",\"title\":\"將package.json入面所有的dependencies更新至最新版本\",\"lang\":\"zh-HK\",\"frontmatter\":{\"title\":\"將package.json入面所有的dependencies更新至最新版本\",\"date\":\"2015-01-16T00:00:00.000Z\",\"tags\":[\"node.js\"]},\"git\":{\"updatedTime\":1769933603000,\"contributors\":[{\"name\":\"Nick Shek\",\"username\":\"\",\"email\":\"alfshek@hotmail.com\",\"commits\":2}],\"changelog\":[{\"hash\":\"5a23ae474b1739371cf66243a14cb44fdb4a2285\",\"time\":1769933603000,\"email\":\"nickshek@example.com\",\"author\":\"Nick Shek\",\"message\":\"feat: migrate from Sculpin to VuePress v1\"},{\"hash\":\"5dd67f57d2e6d5928cf7515a8c2e8a8486462a86\",\"time\":1459444541000,\"email\":\"alfshek@hotmail.com\",\"author\":\"Nick Shek\",\"message\":\"all the posts are inserted!\"}]},\"filePathRelative\":\"posts/2015-01-16-將package.json入面所有的dependencies更新至最新版本.md\"}")
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
