import { shallowRef, defineComponent, computed, h, toRef, ref, onMounted, defineAsyncComponent, watch, reactive, inject, onUnmounted, TransitionGroup, Transition, getCurrentInstance, camelize, capitalize, toValue, useId, provide, mergeProps, useSSRContext, unref, createSlots, withCtx, renderSlot, createVNode, openBlock, createBlock, toDisplayString, createCommentVNode, withDirectives, Fragment, renderList, vShow, resolveComponent, useTemplateRef, createTextVNode, nextTick, onBeforeUnmount, createSSRApp, customRef } from "vue";
import { isLinkWithProtocol, resolveLocalePath, isString, dedupeHead, splitPath, normalizeRoutePath, isLinkHttp, removeLeadingSlash, isLinkExternal, ensureEndingSlash, isPlainObject, removeEndingSlash } from "@vuepress/shared";
import { useRouter, useRoute, createRouter, START_LOCATION, createMemoryHistory } from "vue-router";
import { useElementSize, useWindowSize, useWindowScroll, useEventListener, useToggle, useStorage, usePreferredDark, watchImmediate, provideLocal, injectLocal, useMounted } from "@vueuse/core";
import { ssrRenderAttrs, ssrRenderSlot, ssrInterpolate, ssrRenderSlotInner, ssrRenderList, ssrRenderComponent, ssrRenderClass, ssrRenderAttr, ssrRenderStyle } from "vue/server-renderer";
const redirects$1 = JSON.parse(`{"/posts/2015-01-18-TypeError:%20deepestAncestor%20is%20undefined.html":"/posts/2015-01-18-TypeError_%20deepestAncestor%20is%20undefined.html","/posts/2015-01-20-%E5%BE%9Efontello%E4%B8%8B%E8%BC%89font%20icon,%E5%8F%8A%E4%BD%BF%E7%94%A8Nokogiri%E8%A3%BD%E4%BD%9C%E4%B8%80%E5%BC%B5font%20icon%20class%20%E7%9A%84%E5%90%8D%E5%96%AE.html":"/posts/2015-01-20-%E5%BE%9Efontello%E4%B8%8B%E8%BC%89font%20icon_%E5%8F%8A%E4%BD%BF%E7%94%A8Nokogiri%E8%A3%BD%E4%BD%9C%E4%B8%80%E5%BC%B5font%20icon%20class%20%E7%9A%84%E5%90%8D%E5%96%AE.html","/posts/2015-01-22-debug.py%20=%3E%20IndexError:%20list%20index%20out%20of%20range.html":"/posts/2015-01-22-debug.py%20__%20IndexError_%20list%20index%20out%20of%20range.html","/posts/2015-01-26-react-rails.git%20(at%20master)%20is%20not%20yet%20checked%20out.%20Run%20%60bundle%20install%60%20first.html":"/posts/2015-01-26-react-rails.git%20(at%20master)%20is%20not%20yet%20checked%20out.%20Run%20_bundle%20install_%20first.html","/posts/2015-03-14-Missing%20%60secret_key_base%60%20for%20'production'%20environment.html":"/posts/2015-03-14-Missing%20_secret_key_base_%20for%20'production'%20environment.html","/posts/2015-11-15-Failed%20to%20listen%20on%20localhost:8000%20(reason:%20Address%20already%20in%20use).html":"/posts/2015-11-15-Failed%20to%20listen%20on%20localhost_8000%20(reason_%20Address%20already%20in%20use).html","/posts/2016-06-24-%E4%BD%BF%E7%94%A8sftp%E6%99%82%E5%87%BA%E7%8F%BE%22connection%20reset%20by%20peer%20connection%20closed%22.html":"/posts/2016-06-24-%E4%BD%BF%E7%94%A8sftp%E6%99%82%E5%87%BA%E7%8F%BE_connection%20reset%20by%20peer%20connection%20closed_.html","/posts/2016-07-10-%E5%9F%B7%E8%A1%8CLaravel%20PHPUnit%20%E6%99%82%E5%87%BA%E7%8F%BE%22Maximum%20function%20nesting%20level%20of%20'100'%20reached,%20aborting!%22.html":"/posts/2016-07-10-%E5%9F%B7%E8%A1%8CLaravel%20PHPUnit%20%E6%99%82%E5%87%BA%E7%8F%BE_Maximum%20function%20nesting%20level%20of%20'100'%20reached_%20aborting!_.html"}`);
const routes$1 = Object.fromEntries([
  ["/", { loader: () => import(
    /* webpackChunkName: "index.html" */
    "./assets/index.html-CgfqskJZ.mjs"
  ), meta: { "title": "" } }],
  ["/about/", { loader: () => import(
    /* webpackChunkName: "about_index.html" */
    "./assets/index.html-NXdj5Q4k.mjs"
  ), meta: { "title": "關於我" } }],
  ["/posts/2014-11-13-%E4%BD%BF%E7%94%A8ubuntu%E5%9C%A8localhost%E5%BB%BA%E7%AB%8Bsubdomain.html", { loader: () => import(
    /* webpackChunkName: "posts_2014-11-13-使用ubuntu在localhost建立subdomain.html" */
    "./assets/2014-11-13-使用ubuntu在localhost建立subdomain.html-DBon85lO.mjs"
  ), meta: { "title": "使用ubuntu在localhost建立subdomain" } }],
  ["/posts/2014-11-26-%E5%9C%A8rails%20migration%E6%94%B9%E8%AE%8Acolumn%20type.html", { loader: () => import(
    /* webpackChunkName: "posts_2014-11-26-在rails migration改變column type.html" */
    "./assets/2014-11-26-在rails migration改變column type.html-BG_EjG9n.mjs"
  ), meta: { "title": "在rails migration改變column type" } }],
  ["/posts/2014-12-07-%E5%9C%A8ubuntu%E7%A7%BB%E9%99%A4%E5%9C%96%E7%89%87%E7%9A%84metadata.html", { loader: () => import(
    /* webpackChunkName: "posts_2014-12-07-在ubuntu移除圖片的metadata.html" */
    "./assets/2014-12-07-在ubuntu移除圖片的metadata.html-D4KAoKlw.mjs"
  ), meta: { "title": "在ubuntu移除圖片的metadata" } }],
  ["/posts/2014-12-10-HKTV%20%E9%81%B8%E6%88%B0%20%E6%8F%92%E6%9B%B2.html", { loader: () => import(
    /* webpackChunkName: "posts_2014-12-10-HKTV 選戰 插曲.html" */
    "./assets/2014-12-10-HKTV 選戰 插曲.html-BZlcBbrN.mjs"
  ), meta: { "title": "HKTV 選戰 插曲" } }],
  ["/posts/2014-12-10-%E4%BB%A4%E4%BD%A0%E7%9A%84youtube%20embed%20code%E8%AE%8A%E7%82%BAresponsive.html", { loader: () => import(
    /* webpackChunkName: "posts_2014-12-10-令你的youtube embed code變為responsive.html" */
    "./assets/2014-12-10-令你的youtube embed code變為responsive.html-DbcM2PFZ.mjs"
  ), meta: { "title": "令你的youtube embed code變為responsive" } }],
  ["/posts/2014-12-15-%E6%8A%8A%E7%8F%BE%E6%9C%89%E7%9A%84project%20folder%E8%AE%8A%E7%82%BAgit%20repository.html", { loader: () => import(
    /* webpackChunkName: "posts_2014-12-15-把現有的project folder變為git repository.html" */
    "./assets/2014-12-15-把現有的project folder變為git repository.html-GssGOGd4.mjs"
  ), meta: { "title": "把現有的project folder變為git repository" } }],
  ["/posts/2014-12-20-Friendly%20ID%E4%B8%AD%E6%96%87%E5%95%8F%E9%A1%8C.html", { loader: () => import(
    /* webpackChunkName: "posts_2014-12-20-Friendly ID中文問題.html" */
    "./assets/2014-12-20-Friendly ID中文問題.html-JcvYr44l.mjs"
  ), meta: { "title": "Friendly ID中文問題" } }],
  ["/posts/2014-12-30-%E5%88%A9%E7%94%A8regular%20expression%E5%88%A4%E6%96%B7URL%E6%98%AF%E5%90%A6%E7%82%BAYouTube%20URL%EF%BC%8C%E4%B8%94return%20youtube%20video%20ID.html", { loader: () => import(
    /* webpackChunkName: "posts_2014-12-30-利用regular expression判斷URL是否為YouTube URL，且return youtube video ID.html" */
    "./assets/2014-12-30-利用regular expression判斷URL是否為YouTube URL，且return youtube video ID.html-BYjZPPP7.mjs"
  ), meta: { "title": "利用regular expression判斷URL是否為YouTube URL，且return youtube video ID" } }],
  ["/posts/2015-01-11-%E5%9C%A8Linux%20terminal%E5%88%97%E8%BC%B8%E5%87%BA%E5%B7%B1%E6%95%B4%E7%90%86%E7%9A%84JSON.html", { loader: () => import(
    /* webpackChunkName: "posts_2015-01-11-在Linux terminal列輸出己整理的JSON.html" */
    "./assets/2015-01-11-在Linux terminal列輸出己整理的JSON.html-VxBOV9QJ.mjs"
  ), meta: { "title": "在Linux terminal列輸出己整理的JSON" } }],
  ["/posts/2015-01-16-%E5%B0%87package.json%E5%85%A5%E9%9D%A2%E6%89%80%E6%9C%89%E7%9A%84dependencies%E6%9B%B4%E6%96%B0%E8%87%B3%E6%9C%80%E6%96%B0%E7%89%88%E6%9C%AC.html", { loader: () => import(
    /* webpackChunkName: "posts_2015-01-16-將package.json入面所有的dependencies更新至最新版本.html" */
    "./assets/2015-01-16-將package.json入面所有的dependencies更新至最新版本.html-DKjcZ49A.mjs"
  ), meta: { "title": "將package.json入面所有的dependencies更新至最新版本" } }],
  ["/posts/2015-01-17-redis%E5%9C%A8socket.io%E6%8E%A5%E6%94%B6%E5%A4%9A%E6%AC%A1%E9%87%8D%E8%A6%86%E4%BF%A1%E6%81%AF%E5%95%8F%E9%A1%8C.html", { loader: () => import(
    /* webpackChunkName: "posts_2015-01-17-redis在socket.io接收多次重覆信息問題.html" */
    "./assets/2015-01-17-redis在socket.io接收多次重覆信息問題.html-DAvHIGo6.mjs"
  ), meta: { "title": "redis在socket.io接收多次重覆信息問題" } }],
  ["/posts/2015-01-18-TypeError_%20deepestAncestor%20is%20undefined.html", { loader: () => import(
    /* webpackChunkName: "posts_2015-01-18-TypeError_ deepestAncestor is undefined.html" */
    "./assets/2015-01-18-TypeError_ deepestAncestor is undefined.html-CPl_5-a6.mjs"
  ), meta: { "title": "TypeError: deepestAncestor is undefined" } }],
  ["/posts/2015-01-20-%E5%BE%9Efontello%E4%B8%8B%E8%BC%89font%20icon_%E5%8F%8A%E4%BD%BF%E7%94%A8Nokogiri%E8%A3%BD%E4%BD%9C%E4%B8%80%E5%BC%B5font%20icon%20class%20%E7%9A%84%E5%90%8D%E5%96%AE.html", { loader: () => import(
    /* webpackChunkName: "posts_2015-01-20-從fontello下載font icon_及使用Nokogiri製作一張font icon class 的名單.html" */
    "./assets/2015-01-20-從fontello下載font icon_及使用Nokogiri製作一張font icon class 的名單.html-_dp117Ia.mjs"
  ), meta: { "title": "從http://fontello.com/下載font icon,及使用Nokogiri製作一張font icon class 的名單" } }],
  ["/posts/2015-01-22-debug.py%20__%20IndexError_%20list%20index%20out%20of%20range.html", { loader: () => import(
    /* webpackChunkName: "posts_2015-01-22-debug.py __ IndexError_ list index out of range.html" */
    "./assets/2015-01-22-debug.py __ IndexError_ list index out of range.html-CsGrmt8Z.mjs"
  ), meta: { "title": "debug.py => IndexError: list index out of range" } }],
  ["/posts/2015-01-26-react-rails.git%20(at%20master)%20is%20not%20yet%20checked%20out.%20Run%20_bundle%20install_%20first.html", { loader: () => import(
    /* webpackChunkName: "posts_2015-01-26-react-rails.git (at master) is not yet checked out. Run _bundle install_ first.html" */
    "./assets/2015-01-26-react-rails.git (at master) is not yet checked out. Run _bundle install_ first.html-B9JLIMzS.mjs"
  ), meta: { "title": "git://github.com/reactjs/react-rails.git (at master) is not yet checked out. Run `bundle install` first." } }],
  ["/posts/2015-02-24-%E6%9B%B4%E6%96%B0git%20branch%E6%89%80%E6%9C%89%E8%88%8A%E6%9C%89%E7%9A%84%E9%9B%BB%E5%AD%90%E9%83%B5%E4%BB%B6%E5%9C%B0%E5%9D%80.html", { loader: () => import(
    /* webpackChunkName: "posts_2015-02-24-更新git branch所有舊有的電子郵件地址.html" */
    "./assets/2015-02-24-更新git branch所有舊有的電子郵件地址.html-DnMgYIna.mjs"
  ), meta: { "title": "更新git branch所有舊有的電子郵件地址" } }],
  ["/posts/2015-03-02-%E5%A6%82%E4%BD%95%E4%BB%A4%E4%BD%A0%E4%BD%BF%E7%94%A8SSH%E6%99%82%E6%9B%B4%E5%AE%89%E5%85%A8.html", { loader: () => import(
    /* webpackChunkName: "posts_2015-03-02-如何令你使用SSH時更安全.html" */
    "./assets/2015-03-02-如何令你使用SSH時更安全.html-C_XiL7lU.mjs"
  ), meta: { "title": "如何令你使用SSH時更安全?" } }],
  ["/posts/2015-03-14-Missing%20_secret_key_base_%20for%20'production'%20environment.html", { loader: () => import(
    /* webpackChunkName: "posts_2015-03-14-Missing _secret_key_base_ for 'production' environment.html" */
    "./assets/2015-03-14-Missing _secret_key_base_ for 'production' environment.html-CodVsm52.mjs"
  ), meta: { "title": "Missing `secret_key_base` for 'production' environment, set this value in `config/secrets.yml`" } }],
  ["/posts/2015-04-05-%E5%A6%82%E4%BD%95%E4%BB%A4git%20repo%20%E9%80%A3%E6%8E%A5%E5%B7%B1%E7%B6%93%E5%AD%98%E5%9C%A8%E7%9A%84heroku%20app.html", { loader: () => import(
    /* webpackChunkName: "posts_2015-04-05-如何令git repo 連接己經存在的heroku app.html" */
    "./assets/2015-04-05-如何令git repo 連接己經存在的heroku app.html-qtAgB4jG.mjs"
  ), meta: { "title": "如何令git repo 連接己經存在的heroku app?" } }],
  ["/posts/2015-04-15-Socket.io%201.3.5%20cdn%20%E5%90%8C%E6%BA%90%E5%95%8F%E9%A1%8C.html", { loader: () => import(
    /* webpackChunkName: "posts_2015-04-15-Socket.io 1.3.5 cdn 同源問題.html" */
    "./assets/2015-04-15-Socket.io 1.3.5 cdn 同源問題.html-CCXP2otH.mjs"
  ), meta: { "title": "Socket.io 1.3.5 cdn 同源問題" } }],
  ["/posts/2015-11-15-Failed%20to%20listen%20on%20localhost_8000%20(reason_%20Address%20already%20in%20use).html", { loader: () => import(
    /* webpackChunkName: "posts_2015-11-15-Failed to listen on localhost_8000 (reason_ Address already in use).html" */
    "./assets/2015-11-15-Failed to listen on localhost_8000 (reason_ Address already in use).html-B61trHyw.mjs"
  ), meta: { "title": "Failed to listen on localhost:8000 (reason: Address already in use)" } }],
  ["/posts/2016-04-16-%E4%BD%BF%E7%94%A8Apache%E8%A8%AD%E5%AE%9AAlias%E6%99%82%E5%87%BA%E7%8F%BE403%20Foridden.html", { loader: () => import(
    /* webpackChunkName: "posts_2016-04-16-使用Apache設定Alias時出現403 Foridden.html" */
    "./assets/2016-04-16-使用Apache設定Alias時出現403 Foridden.html-CP9IBL7A.mjs"
  ), meta: { "title": "使用Apache設定Alias時出現403 Foridden" } }],
  ["/posts/2016-06-24-%E4%BD%BF%E7%94%A8sftp%E6%99%82%E5%87%BA%E7%8F%BE_connection%20reset%20by%20peer%20connection%20closed_.html", { loader: () => import(
    /* webpackChunkName: "posts_2016-06-24-使用sftp時出現_connection reset by peer connection closed_.html" */
    "./assets/2016-06-24-使用sftp時出現_connection reset by peer connection closed_.html-DKXUSF5o.mjs"
  ), meta: { "title": '使用sftp時出現"connection reset by peer connection closed"' } }],
  ["/posts/2016-06-28-%E5%AE%89%E8%A3%9DUbuntu%20Server%E8%87%B3%E8%88%8ANotebook%E6%B3%A8%E6%84%8F%E4%BA%8B%E9%A0%85.html", { loader: () => import(
    /* webpackChunkName: "posts_2016-06-28-安裝Ubuntu Server至舊Notebook注意事項.html" */
    "./assets/2016-06-28-安裝Ubuntu Server至舊Notebook注意事項.html-BOzDUjlv.mjs"
  ), meta: { "title": "安裝Ubuntu Server至舊Notebook注意事項" } }],
  ["/posts/2016-07-09-docker%20build%20image%20%E6%99%82%E5%87%BA%E7%8F%BE%20no%20space%20left%20on%20device.html", { loader: () => import(
    /* webpackChunkName: "posts_2016-07-09-docker build image 時出現 no space left on device.html" */
    "./assets/2016-07-09-docker build image 時出現 no space left on device.html-Cte3KRv6.mjs"
  ), meta: { "title": "docker build image 時出現 no space left on device" } }],
  ["/posts/2016-07-10-%E5%9F%B7%E8%A1%8CLaravel%20PHPUnit%20%E6%99%82%E5%87%BA%E7%8F%BE_Maximum%20function%20nesting%20level%20of%20'100'%20reached_%20aborting!_.html", { loader: () => import(
    /* webpackChunkName: "posts_2016-07-10-執行Laravel PHPUnit 時出現_Maximum function nesting level of '100' reached_ aborting!_.html" */
    "./assets/2016-07-10-執行Laravel PHPUnit 時出現_Maximum function nesting level of '100' reached_ aborting!_.html-C7BH-yFI.mjs"
  ), meta: { "title": `執行Laravel PHPUnit 時出現"Maximum function nesting level of '100' reached, aborting!"` } }],
  ["/posts/2016-10-01%20%E6%80%9D%E8%80%83%E5%9C%A8linux%E4%B8%80%E6%AC%A1%E6%80%A7%E9%87%8D%E6%96%B0%E5%91%BD%E5%90%8D%E5%A4%9A%E5%80%8Bfile%E7%9A%84%E5%95%8F%E9%A1%8C.html", { loader: () => import(
    /* webpackChunkName: "posts_2016-10-01 思考在linux一次性重新命名多個file的問題.html" */
    "./assets/2016-10-01 思考在linux一次性重新命名多個file的問題.html-s36LmHfp.mjs"
  ), meta: { "title": "思考在linux一次性重新命名多個file的問題" } }],
  ["/posts/2017-01-12-%E7%A7%BB%E9%99%A4%E5%8F%8A%E6%9A%AB%E5%81%9C%E6%89%80%E6%9C%89Docker%20container%20%E6%8C%87%E4%BB%A4.html", { loader: () => import(
    /* webpackChunkName: "posts_2017-01-12-移除及暫停所有Docker container 指令.html" */
    "./assets/2017-01-12-移除及暫停所有Docker container 指令.html-C9VCLQXF.mjs"
  ), meta: { "title": "移除及暫停所有Docker container 指令" } }],
  ["/posts/2017-01-26-%E7%94%A8ansible%E5%8E%BB%E5%82%B3%E9%80%81%E9%9B%BB%E5%AD%90%E9%83%B5%E4%BB%B6.html", { loader: () => import(
    /* webpackChunkName: "posts_2017-01-26-用ansible去傳送電子郵件.html" */
    "./assets/2017-01-26-用ansible去傳送電子郵件.html-DUaZHez5.mjs"
  ), meta: { "title": "用ansible去傳送電子郵件" } }],
  ["/posts/2017-02-06-%E5%AD%B8%E7%BF%92Latex.html", { loader: () => import(
    /* webpackChunkName: "posts_2017-02-06-學習Latex.html" */
    "./assets/2017-02-06-學習Latex.html-DWgOfKR0.mjs"
  ), meta: { "title": "學習Latex" } }],
  ["/posts/2017-09-24-%E5%B7%AE%E4%B8%8D%E5%A4%9A%E5%8D%8A%E5%B9%B4%E6%B2%92%E6%9C%89%E6%9B%B4%E6%96%B0blog%E4%BA%86.html", { loader: () => import(
    /* webpackChunkName: "posts_2017-09-24-差不多半年沒有更新blog了.html" */
    "./assets/2017-09-24-差不多半年沒有更新blog了.html-vjW20Xz1.mjs"
  ), meta: { "title": "差不多半年沒有更新blog了" } }],
  ["/posts/2018-10-14-%E5%9C%A8Cento%207%E4%B8%8B%E4%BD%BF%E7%94%A8Cisco%20AnyConnect%20Secure%20Mobility%20Client.html", { loader: () => import(
    /* webpackChunkName: "posts_2018-10-14-在Cento 7下使用Cisco AnyConnect Secure Mobility Client.html" */
    "./assets/2018-10-14-在Cento 7下使用Cisco AnyConnect Secure Mobility Client.html-CTGWfWoh.mjs"
  ), meta: { "title": "在Cento 7下使用Cisco AnyConnect Secure Mobility Client" } }],
  ["/posts/2018-10-15-%E5%9C%A8Centos7%E4%B8%8B%E5%AE%89%E8%A3%9DChrome.html", { loader: () => import(
    /* webpackChunkName: "posts_2018-10-15-在Centos7下安裝Chrome.html" */
    "./assets/2018-10-15-在Centos7下安裝Chrome.html-Ddk0-Mcj.mjs"
  ), meta: { "title": "在Centos7下安裝Chrome" } }],
  ["/posts/", { loader: () => import(
    /* webpackChunkName: "posts_index.html" */
    "./assets/index.html-DNOAHtBF.mjs"
  ), meta: { "title": "文章列表" } }],
  ["/404.html", { loader: () => import(
    /* webpackChunkName: "404.html" */
    "./assets/404.html-DqIW4Kre.mjs"
  ), meta: { "title": "" } }]
]);
var clientDataSymbol = Symbol(
  ""
);
var useClientData = () => {
  const clientData = inject(clientDataSymbol);
  if (!clientData) {
    throw new Error("useClientData() is called without provider.");
  }
  return clientData;
};
var usePageComponent = () => useClientData().pageComponent;
var usePageFrontmatter = () => useClientData().pageFrontmatter;
var usePageHead = () => useClientData().pageHead;
var usePageLang = () => useClientData().pageLang;
var usePageLayout = () => useClientData().pageLayout;
var useRouteLocale = () => useClientData().routeLocale;
var useRoutePath = () => useClientData().routePath;
var useRoutes = () => useClientData().routes;
var useSiteData = () => useClientData().siteData;
var useData$1 = useClientData;
var useFrontmatter = usePageFrontmatter;
var contentUpdatedCallbacks = /* @__PURE__ */ new Set();
var onContentUpdated = (fn) => {
  contentUpdatedCallbacks.add(fn);
  onUnmounted(() => {
    contentUpdatedCallbacks.delete(fn);
  });
};
var redirects = shallowRef(redirects$1);
var routes = shallowRef(routes$1);
var resolveRoutePath = (pathname, currentPath) => {
  const normalizedRoutePath = normalizeRoutePath(pathname, currentPath);
  if (routes.value[normalizedRoutePath]) return normalizedRoutePath;
  const encodedRoutePath = encodeURI(normalizedRoutePath);
  if (routes.value[encodedRoutePath]) {
    return encodedRoutePath;
  }
  const redirectedRoutePath = redirects.value[normalizedRoutePath] || redirects.value[encodedRoutePath];
  if (redirectedRoutePath) {
    return redirectedRoutePath;
  }
  return normalizedRoutePath;
};
var resolveRoute = (path, currentPath) => {
  const { pathname, hashAndQueries } = splitPath(path);
  const routePath = resolveRoutePath(pathname, currentPath);
  const routeFullPath = routePath + hashAndQueries;
  if (!routes.value[routePath]) {
    return {
      ...routes.value["/404.html"],
      path: routeFullPath,
      notFound: true
    };
  }
  return {
    ...routes.value[routePath],
    path: routeFullPath,
    notFound: false
  };
};
var resolveRouteFullPath = (path, currentPath) => {
  const { pathname, hashAndQueries } = splitPath(path);
  return resolveRoutePath(pathname, currentPath) + hashAndQueries;
};
var guardEvent = (event) => {
  if (event.metaKey || event.altKey || event.ctrlKey || event.shiftKey) return;
  if (event.defaultPrevented) return;
  if (event.button !== void 0 && event.button !== 0) return;
  if (event.currentTarget) {
    const target = event.currentTarget.getAttribute("target");
    if (target?.match(/\b_blank\b/i)) return;
  }
  event.preventDefault();
  return true;
};
var RouteLink = defineComponent({
  name: "RouteLink",
  props: {
    /**
     * The route path to link to
     */
    to: {
      type: String,
      required: true
    },
    /**
     * Whether the link is active to have an active class
     *
     * Notice that the active status is not automatically determined according to the current route.
     */
    active: Boolean,
    /**
     * The class to add when the link is active
     */
    activeClass: {
      type: String,
      default: "route-link-active"
    }
  },
  slots: Object,
  setup(props, { slots }) {
    const router = useRouter();
    const route = useRoute();
    const path = computed(
      () => props.to.startsWith("#") || props.to.startsWith("?") ? props.to : `${"/"}${resolveRouteFullPath(props.to, route.path).substring(1)}`
    );
    return () => h(
      "a",
      {
        class: ["route-link", { [props.activeClass]: props.active }],
        href: path.value,
        onClick: (event = {}) => {
          if (guardEvent(event)) {
            void router.push(props.to).catch();
          }
        }
      },
      slots.default()
    );
  }
});
var AutoLink = defineComponent({
  name: "AutoLink",
  props: {
    config: {
      type: Object,
      required: true
    }
  },
  slots: Object,
  setup(props, { slots }) {
    const config2 = toRef(props, "config");
    const route = useRoute();
    const siteData2 = useSiteData();
    const withProtocol = computed(() => isLinkWithProtocol(config2.value.link));
    const linkTarget = computed(
      () => config2.value.target || (withProtocol.value ? "_blank" : void 0)
    );
    const isBlankTarget = computed(() => linkTarget.value === "_blank");
    const isInternal = computed(
      () => !withProtocol.value && !isBlankTarget.value
    );
    const linkRel = computed(
      () => config2.value.rel || (isBlankTarget.value ? "noopener noreferrer" : null)
    );
    const linkAriaLabel = computed(
      () => config2.value.ariaLabel ?? config2.value.text
    );
    const shouldBeActiveInSubpath = computed(() => {
      if (config2.value.exact) return false;
      const localePaths = Object.keys(siteData2.value.locales);
      return localePaths.length ? (
        // Check all the locales
        localePaths.every((key) => key !== config2.value.link)
      ) : (
        // Check root
        config2.value.link !== "/"
      );
    });
    const isActive = computed(() => {
      if (!isInternal.value) return false;
      if (config2.value.activeMatch) {
        return (config2.value.activeMatch instanceof RegExp ? config2.value.activeMatch : new RegExp(config2.value.activeMatch, "u")).test(route.path);
      }
      if (shouldBeActiveInSubpath.value) {
        return route.path.startsWith(config2.value.link);
      }
      return route.path === config2.value.link;
    });
    return () => {
      const { before, after, default: defaultSlot } = slots;
      const content = defaultSlot?.(config2.value) ?? [
        before?.(config2.value),
        config2.value.text,
        after?.(config2.value)
      ];
      return isInternal.value ? h(
        RouteLink,
        {
          "class": "auto-link",
          "to": config2.value.link,
          "active": isActive.value,
          "aria-label": linkAriaLabel.value
        },
        () => content
      ) : h(
        "a",
        {
          "class": "auto-link external-link",
          "href": config2.value.link,
          "aria-label": linkAriaLabel.value,
          "rel": linkRel.value,
          "target": linkTarget.value
        },
        content
      );
    };
  }
});
var ClientOnly = defineComponent({
  name: "ClientOnly",
  setup(_2, ctx) {
    const isMounted = ref(false);
    onMounted(() => {
      isMounted.value = true;
    });
    return () => isMounted.value ? ctx.slots.default?.() : null;
  }
});
var runContentUpdatedCallbacks = (reason) => {
  contentUpdatedCallbacks.forEach((fn) => fn(reason));
};
var Content = defineComponent({
  name: "Content",
  props: {
    path: {
      type: String,
      required: false,
      default: ""
    }
  },
  setup(props) {
    const pageComponent = usePageComponent();
    const ContentComponent = computed(() => {
      if (!props.path) return pageComponent.value;
      const route = resolveRoute(props.path);
      return defineAsyncComponent(
        async () => route.loader().then(({ comp }) => comp)
      );
    });
    const frontmatter = usePageFrontmatter();
    watch(
      frontmatter,
      () => {
        runContentUpdatedCallbacks("updated");
      },
      { deep: true, flush: "post" }
    );
    return () => h(ContentComponent.value, {
      onVnodeMounted: () => {
        runContentUpdatedCallbacks("mounted");
      },
      onVnodeUpdated: () => {
        runContentUpdatedCallbacks("updated");
      },
      onVnodeBeforeUnmount: () => {
        runContentUpdatedCallbacks("beforeUnmount");
      }
    });
  }
});
var LAYOUT_NAME_DEFAULT = "Layout";
var LANG_DEFAULT = "en-US";
var resolvers = reactive({
  /**
   * Resolve layouts component map
   */
  resolveLayouts: (clientConfigs2) => clientConfigs2.reduce(
    (prev, item) => ({
      ...prev,
      ...item.layouts
    }),
    {}
  ),
  /**
   * Merge the head config in frontmatter and site locale
   *
   * Frontmatter should take priority over site locale
   */
  resolvePageHead: (pageHeadTitle, pageFrontmatter, siteLocaleDate) => {
    const description = isString(pageFrontmatter.description) ? pageFrontmatter.description : siteLocaleDate.description;
    const head = [
      ...Array.isArray(pageFrontmatter.head) ? pageFrontmatter.head : [],
      ...siteLocaleDate.head,
      ["title", {}, pageHeadTitle],
      ["meta", { name: "description", content: description }]
    ];
    return dedupeHead(head);
  },
  /**
   * Resolve the content of page head title
   *
   * It would be used as the content of the `<title>` tag
   */
  resolvePageHeadTitle: (pageData, siteLocaleDate) => [pageData.title, siteLocaleDate.title].filter((item) => !!item).join(" | "),
  /**
   * Resolve page language from page data
   *
   * It would be used as the `lang` attribute of `<html>` tag
   */
  resolvePageLang: (pageData, siteLocaleData) => pageData.lang || siteLocaleData.lang || LANG_DEFAULT,
  /**
   * Resolve layout component of current page
   */
  resolvePageLayout: (pageData, layouts) => {
    const layoutName = isString(pageData.frontmatter.layout) ? pageData.frontmatter.layout : LAYOUT_NAME_DEFAULT;
    if (!layouts[layoutName]) {
      throw new Error(`[vuepress] Cannot resolve layout: ${layoutName}`);
    }
    return layouts[layoutName];
  },
  /**
   * Resolve locale path according to route path and locales config
   */
  resolveRouteLocale: (locales2, routePath) => resolveLocalePath(locales2, decodeURI(routePath)),
  /**
   * Resolve site data for specific locale
   *
   * It would merge the locales fields to the root fields
   */
  resolveSiteLocaleData: ({ base, locales: locales2, ...siteData2 }, routeLocale) => ({
    ...siteData2,
    ...locales2[routeLocale],
    head: [
      // when merging head, the locales head should be placed before root head
      // to get higher priority
      // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition -- unsafe indexed access
      ...locales2[routeLocale]?.head ?? [],
      ...siteData2.head
    ]
  })
});
var defineClientConfig = (clientConfig = {}) => clientConfig;
var withBase = (url) => {
  if (isLinkHttp(url)) return url;
  return `${"/"}${removeLeadingSlash(url)}`;
};
var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var constants_exports = {};
__export(constants_exports, {
  COMPONENT_STATE_TYPE: () => COMPONENT_STATE_TYPE,
  INSPECTOR_ID: () => INSPECTOR_ID,
  INSPECTOR_LABEL: () => INSPECTOR_LABEL,
  INSPECTOR_NODES: () => INSPECTOR_NODES,
  INSPECTOR_STATE_SECTION_NAME: () => INSPECTOR_STATE_SECTION_NAME,
  PLUGIN_ID: () => PLUGIN_ID,
  PLUGIN_LABEL: () => PLUGIN_LABEL
});
var PLUGIN_ID = "org.vuejs.vuepress";
var PLUGIN_LABEL = "VuePress";
var COMPONENT_STATE_TYPE = PLUGIN_LABEL;
var INSPECTOR_ID = PLUGIN_ID;
var INSPECTOR_LABEL = PLUGIN_LABEL;
var INSPECTOR_NODE_INTERNAL = {
  id: "INTERNAL",
  label: "Internal",
  keys: ["layouts", "routes", "redirects"]
};
var INSPECTOR_NODE_SITE = {
  id: "SITE",
  label: "Site",
  keys: ["siteData", "siteLocaleData"]
};
var INSPECTOR_NODE_ROUTE = {
  id: "ROUTE",
  label: "Route",
  keys: ["routePath", "routeLocale"]
};
var INSPECTOR_NODE_PAGE = {
  id: "PAGE",
  label: "Page",
  keys: [
    "pageData",
    "pageFrontmatter",
    "pageLang",
    "pageHead",
    "pageHeadTitle",
    "pageLayout",
    "pageComponent"
  ]
};
var INSPECTOR_NODES = {
  [INSPECTOR_NODE_INTERNAL.id]: INSPECTOR_NODE_INTERNAL,
  [INSPECTOR_NODE_SITE.id]: INSPECTOR_NODE_SITE,
  [INSPECTOR_NODE_ROUTE.id]: INSPECTOR_NODE_ROUTE,
  [INSPECTOR_NODE_PAGE.id]: INSPECTOR_NODE_PAGE
};
var INSPECTOR_STATE_SECTION_NAME = "State";
const config$9 = defineClientConfig({
  setup() {
  }
});
const clientConfig0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: config$9
}, Symbol.toStringTag, { value: "Module" }));
const FadeInExpandTransition = defineComponent({
  name: "FadeInExpandTransition",
  props: {
    /* Whether to group transitions */
    group: Boolean,
    appear: Boolean,
    /* Whether to switch to the transition of `width` */
    width: Boolean,
    mode: String,
    onLeave: Function,
    onAfterLeave: Function,
    onAfterEnter: Function
  },
  setup(props, { slots }) {
    const handleBeforeLeave = (el) => {
      el.style[props.width ? "maxWidth" : "maxHeight"] = `${el.offsetHeight}px`;
      void el.offsetWidth;
    };
    const handleLeave = (el) => {
      el.style[props.width ? "maxWidth" : "maxHeight"] = "0";
      void el.offsetWidth;
      props.onLeave?.();
    };
    const handleAfterLeave = (el) => {
      el.style[props.width ? "maxWidth" : "maxHeight"] = "";
      props.onAfterLeave?.();
    };
    const handleEnter = (el) => {
      el.style.transition = "none";
      if (props.width) {
        const memorizedWidth = el.offsetWidth;
        el.style.maxWidth = "0";
        void el.offsetWidth;
        el.style.transition = "";
        el.style.maxWidth = `${memorizedWidth}px`;
      } else {
        const memorizedHeight = el.offsetHeight;
        el.style.maxHeight = "0";
        void el.offsetWidth;
        el.style.transition = "";
        el.style.maxHeight = `${memorizedHeight}px`;
      }
      void el.offsetWidth;
    };
    const handleAfterEnter = (el) => {
      el.style[props.width ? "maxWidth" : "maxHeight"] = "";
      props.onAfterEnter?.();
    };
    return () => h(props.group ? TransitionGroup : Transition, {
      name: props.width ? "fade-in-width-expand" : "fade-in-height-expand",
      appear: props.appear,
      onEnter: handleEnter,
      onAfterEnter: handleAfterEnter,
      onBeforeLeave: handleBeforeLeave,
      onLeave: handleLeave,
      onAfterLeave: handleAfterLeave,
      ...props.group ? void 0 : { mode: props.mode }
    }, slots);
  }
});
const isDef = (val) => typeof val !== "undefined";
const startsWith = (str, prefix) => isString(str) && str.startsWith(prefix);
const { keys } = Object;
const isLinkAbsolute = (test) => startsWith(test, "/") && test[1] !== "/";
const isLinkRelative = (link) => !isLinkExternal(link) && !isLinkWithProtocol(link);
const getDarkMode = () => document.documentElement.getAttribute("data-theme") === "dark";
const DEFAULT_HEADER_SELECTOR = [...new Array(6)].map((_2, i) => `[vp-content] h${i + 1}`).join(",");
const resolveHeaders = (headers, levels = 2) => {
  if (levels === false) {
    return [];
  }
  const [high, low] = typeof levels === "number" ? [levels, levels] : levels === "deep" ? [2, 6] : levels;
  const allowedHeaders = headers.filter((header) => header.level >= high && header.level <= low);
  const result = [];
  outer: for (let i = 0; i < allowedHeaders.length; i++) {
    const current = allowedHeaders[i];
    if (i === 0) {
      result.push(current);
    } else {
      for (let j = i - 1; j >= 0; j--) {
        const prev = allowedHeaders[j];
        if (prev.level < current.level) {
          prev.children.push(current);
          continue outer;
        }
      }
      result.push(current);
    }
  }
  return result;
};
const serializeHeader = (h2, ignore = []) => {
  let text;
  if (ignore.length) {
    const clone = h2.cloneNode(true);
    clone.querySelectorAll(ignore.join(",")).forEach((el) => {
      el.remove();
    });
    text = clone.textContent || "";
  } else {
    text = h2.textContent || "";
  }
  return text.trim();
};
const getHeadersFromDom = (selector = DEFAULT_HEADER_SELECTOR, ignore = []) => Array.from(document.querySelectorAll(selector)).filter((el) => el.id && el.hasChildNodes()).map((el) => ({
  element: el,
  title: serializeHeader(el, ignore),
  link: `#${el.id}`,
  slug: el.id,
  level: Number(el.tagName[1]),
  children: []
}));
const getHeaders = ({ selector = DEFAULT_HEADER_SELECTOR, levels = 2, ignore = [] } = {}) => resolveHeaders(getHeadersFromDom(selector, ignore), levels);
const hasGlobalComponent = (name, app) => {
  const globalComponents = getCurrentInstance()?.appContext.components;
  if (!globalComponents)
    return false;
  return name in globalComponents || camelize(name) in globalComponents || capitalize(camelize(name)) in globalComponents;
};
const darkModeSymbol = Symbol("");
const darkmode = ref(false);
if (typeof document !== "undefined") {
  darkmode.value = getDarkMode();
  const mutationObserver = new MutationObserver(() => {
    darkmode.value = getDarkMode();
  });
  mutationObserver.observe(document.documentElement, {
    attributeFilter: ["data-theme"],
    attributes: true
  });
}
const useLocaleConfig = (localesConfig) => {
  const routeLocale = useRouteLocale();
  return computed(() => {
    const config2 = toValue(localesConfig);
    return (
      // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
      config2[routeLocale.value] ?? // fallback to root locale config
      config2["/"] ?? // falling back to first locale config that exists
      Object.values(config2)[0]
    );
  });
};
const useLocale = useLocaleConfig;
const useRoutePaths = () => {
  const routes2 = useRoutes();
  return computed(() => Object.keys(routes2.value));
};
var define_BACK_TO_TOP_LOCALES_default = { "/": { backToTop: "返回顶部" } };
const BackToTop = defineComponent({
  name: "BackToTop",
  setup() {
    const frontmatter = useFrontmatter();
    const locale = useLocale(define_BACK_TO_TOP_LOCALES_default);
    const body = shallowRef();
    const { height: bodyHeight } = useElementSize(body);
    const { height: windowHeight } = useWindowSize();
    const { y } = useWindowScroll();
    const show = computed(() => (frontmatter.value.backToTop ?? true) && y.value > 100);
    const progress = computed(() => y.value / (bodyHeight.value - windowHeight.value) * 100);
    onMounted(() => {
      body.value = document.body;
    });
    return () => h(Transition, { name: "fade-in" }, () => show.value ? h("button", {
      "type": "button",
      "class": "vp-back-to-top-button",
      "aria-label": locale.value.backToTop,
      "onClick": () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }, [
      h("span", {
        "class": "vp-scroll-progress",
        "role": "progressbar",
        "aria-labelledby": "loadinglabel",
        "aria-valuenow": progress.value
      }, h("svg", h("circle", {
        "cx": "26",
        "cy": "26",
        "r": "24",
        "fill": "none",
        "stroke": "currentColor",
        "stroke-width": "4",
        "stroke-dasharray": `${Math.PI * progress.value * 0.48} ${Math.PI * (100 - progress.value) * 0.48}`
      }))),
      h("div", { class: "back-to-top-icon" })
    ]) : null);
  }
});
const config$8 = defineClientConfig({
  rootComponents: [BackToTop]
});
const clientConfig1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: config$8
}, Symbol.toStringTag, { value: "Module" }));
const config$7 = defineClientConfig({
  setup: () => {
  }
});
const clientConfig2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: config$7
}, Symbol.toStringTag, { value: "Module" }));
const config$6 = defineClientConfig({
  setup() {
    useEventListener("beforeprint", () => {
      document.querySelectorAll("details").forEach((detail) => {
        detail.open = true;
      });
    }, { passive: true });
  }
});
const clientConfig3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: config$6
}, Symbol.toStringTag, { value: "Module" }));
var define_GIT_OPTIONS_default = { provider: "github", pattern: { commit: ":repo/commit/:hash", issue: ":repo/issues/:issue", tag: ":repo/releases/tag/:tag" }, repo: "nickshek/site" };
const gitOptions = typeof define_GIT_OPTIONS_default === "undefined" ? {} : define_GIT_OPTIONS_default;
const resolveRepoLink = (link, provider) => {
  if (!link || isLinkHttp(link))
    return link;
  if (provider === "github")
    return `https://github.com/${link}`;
  if (provider === "gitee")
    return `https://gitee.com/${link}`;
  return link;
};
const RE_ISSUE = /#(\d+)/g;
const useChangelog = (enabled = true) => {
  const { frontmatter, lang, page } = useData$1();
  const { pattern = {}, provider } = gitOptions;
  const repo = resolveRepoLink(gitOptions.repo, provider);
  return computed(() => {
    if (frontmatter.value.changelog === false || !toValue(enabled))
      return [];
    const formatter = new Intl.DateTimeFormat(lang.value, {
      dateStyle: "short"
    });
    return (page.value.git?.changelog ?? []).map((item) => {
      const res = {
        date: formatter.format(item.time),
        ...item
      };
      if (pattern.issue && repo) {
        res.message = res.message.replace(RE_ISSUE, (matched, issue) => {
          const url = pattern.issue.replace(":issue", issue).replace(":repo", repo);
          return `<a href="${url}" target="_blank" rel="noopener noreferrer">${matched}</a>`;
        });
      }
      if (pattern.commit && repo) {
        res.commitUrl = pattern.commit.replace(":hash", res.hash).replace(":repo", repo);
      }
      if (pattern.tag && repo && res.tag)
        res.tagUrl = pattern.tag.replace(":tag", res.tag).replace(":repo", repo);
      return res;
    });
  });
};
const useContributors = (enabled = true) => {
  const { frontmatter, page } = useData$1();
  return computed(() => {
    if (frontmatter.value.contributors === false || !toValue(enabled))
      return [];
    return page.value.git.contributors ?? [];
  });
};
var define_GIT_LOCALES_default = { "/": { contributors: "贡献者", changelog: "更新日志", timeOn: "于", viewChangelog: "查看所有更新日志", latestUpdateAt: "最近更新" } };
const locales = typeof define_GIT_LOCALES_default === "undefined" ? {} : define_GIT_LOCALES_default;
const useGitLocale = () => useLocale(locales);
const useLastUpdated = (enabled = true) => {
  const { lang, page } = useData$1();
  const locale = useGitLocale();
  return computed(() => {
    if (!toValue(enabled))
      return null;
    const timeStamp = page.value.git?.updatedTime ?? page.value.git?.changelog?.[0].time;
    if (!timeStamp)
      return null;
    const date = new Date(timeStamp);
    const text = new Intl.DateTimeFormat(lang.value, {
      dateStyle: "short",
      timeStyle: "short"
    }).format(timeStamp);
    return {
      date,
      text,
      iso: date.toISOString(),
      locale: locale.value.latestUpdateAt
    };
  });
};
const VPHeader = ({ level = 2, text, anchor }) => h(`h${level || 2}`, { id: anchor, tabindex: "-1" }, h("a", { href: `#${anchor}`, class: "header-anchor" }, h("span", text)));
const GitContributor = ({ name, url, avatar }) => h(url ? "a" : "span", {
  href: url,
  target: "_blank",
  rel: "noreferrer",
  class: "vp-contributor"
}, [
  avatar ? h("img", { src: avatar, alt: "", class: "vp-contributor-avatar" }) : null,
  h("span", { class: "vp-contributor-name" }, name)
]);
const GitContributors = defineComponent({
  name: "GitContributors",
  props: {
    /** Contributor title */
    title: String,
    /** header level of contributor title */
    headerLevel: {
      type: Number,
      default: 2
    }
  },
  setup(props) {
    const contributors = useContributors();
    const locale = useGitLocale();
    return () => contributors.value.length ? [
      h(VPHeader, {
        level: props.headerLevel,
        anchor: "doc-contributors",
        text: props.title || locale.value.contributors
      }),
      h("div", { class: "vp-contributors" }, contributors.value.map((item) => h(GitContributor, item)))
    ] : null;
  }
});
const GitChangelog = defineComponent({
  name: "GitChangelog",
  props: {
    /** Title of changelog */
    title: String,
    /** header level of changelog */
    headerLevel: {
      type: Number,
      default: 2
    }
  },
  setup(props) {
    const changelog = useChangelog();
    const locale = useGitLocale();
    const lastUpdated = useLastUpdated();
    const [active, toggleActive] = useToggle();
    const ChangelogHeader = () => h("div", { class: "vp-changelog-header", onClick: () => toggleActive() }, [
      h("div", { class: "vp-latest-updated" }, [
        h("span", { class: "vp-changelog-icon" }),
        h("span", { "data-allow-mismatch": "" }, lastUpdated.value.text)
      ]),
      h("div", [
        h("span", { class: "vp-changelog-menu-icon" }),
        h("span", locale.value.viewChangelog)
      ])
    ]);
    const ReleaseTag = ({ item }) => h("li", { class: "vp-changelog-item-tag" }, h("div", [
      h("a", { class: "vp-changelog-tag" }, h("code", item.tag)),
      h("span", { "class": "vp-changelog-date", "data-allow-mismatch": "" }, [
        locale.value.timeOn,
        " ",
        h("time", { datetime: new Date(item.time).toISOString() }, item.date)
      ])
    ]));
    const Commit = ({ item }) => h("li", { class: "vp-changelog-item-commit" }, [
      h(item.commitUrl ? "a" : "span", {
        class: "vp-changelog-hash",
        href: item.commitUrl,
        target: "_blank",
        rel: "noreferrer"
      }, [h("code", item.hash.slice(0, 5))]),
      h("span", { class: "vp-changelog-divider" }, "-"),
      h("span", { class: "vp-changelog-message", innerHTML: item.message }),
      h("span", { "class": "vp-changelog-date", "data-allow-mismatch": "" }, [
        locale.value.timeOn || "on",
        " ",
        h("time", { datetime: new Date(item.time).toISOString() }, item.date)
      ])
    ]);
    return () => changelog.value.length ? [
      h(VPHeader, {
        level: props.headerLevel,
        anchor: "doc-changelog",
        text: props.title || locale.value.changelog
      }),
      h("div", { class: ["vp-changelog-wrapper", { active: active.value }] }, [
        h(ChangelogHeader),
        h("ul", { class: "vp-changelog-list" }, [
          changelog.value.map((item) => item.tag ? h(ReleaseTag, { item, key: item.tag }) : h(Commit, { item, key: item.hash }))
        ])
      ])
    ] : null;
  }
});
const config$5 = {
  enhance: ({ app }) => {
    app.component("GitContributors", GitContributors);
    app.component("GitChangelog", GitChangelog);
  }
};
const clientConfig4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: config$5
}, Symbol.toStringTag, { value: "Module" }));
const useMediumZoom = () => {
  return null;
};
const config$4 = defineClientConfig({
  enhance({ app }) {
    return;
  },
  setup() {
    const zoom = useMediumZoom();
    onContentUpdated((reason) => {
      if (reason !== "beforeUnmount")
        zoom.refresh();
    });
  }
});
const clientConfig5 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: config$4
}, Symbol.toStringTag, { value: "Module" }));
/**
 * NProgress, (c) 2013, 2014 Rico Sta. Cruz - http://ricostacruz.com/nprogress
 * @license MIT
 */
const addClass = (element, name) => {
  element.classList.add(name);
};
const removeClass = (element, name) => {
  element.classList.remove(name);
};
const removeElement = (element) => {
  element?.parentNode?.removeChild(element);
};
const clamp = (n, min, max) => {
  if (n < min)
    return min;
  if (n > max)
    return max;
  return n;
};
const toBarPercent = (n) => (-1 + n) * 100;
const queue = /* @__PURE__ */ (() => {
  const pending = [];
  const nextStep = () => {
    const fn = pending.shift();
    if (fn) {
      fn(nextStep);
    }
  };
  return (fn) => {
    pending.push(fn);
    if (pending.length === 1)
      nextStep();
  };
})();
const camelCase = (content) => content.replace(/^-ms-/, "ms-").replace(/-([\da-z])/gi, (_2, letter) => letter.toUpperCase());
const addStyle = /* @__PURE__ */ (() => {
  const cssPrefixes = ["Webkit", "O", "Moz", "ms"];
  const cssProps = {};
  const getVendorProp = (name) => {
    const { style } = document.body;
    if (name in style)
      return name;
    const capName = name.charAt(0).toUpperCase() + name.slice(1);
    let index = cssPrefixes.length;
    while (index--) {
      const vendorName = `${cssPrefixes[index]}${capName}`;
      if (vendorName in style)
        return vendorName;
    }
    return name;
  };
  const getStyleProp = (name) => {
    const finalizedName = camelCase(name);
    return cssProps[finalizedName] ??= getVendorProp(finalizedName);
  };
  const applyCss = (element, prop, value) => {
    element.style[getStyleProp(prop)] = value;
  };
  return (element, properties) => {
    for (const prop in properties) {
      const value = properties[prop];
      if (Object.hasOwn(properties, prop) && isDef(value))
        applyCss(element, prop, value);
    }
  };
})();
const SETTINGS = {
  minimum: 0.08,
  easing: "ease",
  speed: 200,
  trickleRate: 0.02,
  trickleSpeed: 800,
  barSelector: '[role="bar"]',
  parent: "body",
  template: '<div class="bar" role="bar"></div>'
};
const nprogress = {
  percent: null,
  isRendered: () => Boolean(document.getElementById("nprogress")),
  set: (progress) => {
    const { speed, easing } = SETTINGS;
    const inProgress = nprogress.isStarted();
    const newPercent = clamp(progress, SETTINGS.minimum, 1);
    nprogress.percent = newPercent === 1 ? null : newPercent;
    const nprogressElement = nprogress.render(!inProgress);
    const barElement = nprogressElement.querySelector(SETTINGS.barSelector);
    nprogressElement.offsetWidth;
    queue((next) => {
      addStyle(barElement, {
        transform: `translate3d(${toBarPercent(newPercent)}%,0,0)`,
        transition: `all ${speed}ms ${easing}`
      });
      if (newPercent === 1) {
        addStyle(nprogressElement, {
          transition: "none",
          opacity: "1"
        });
        nprogressElement.offsetWidth;
        setTimeout(() => {
          addStyle(nprogressElement, {
            transition: `all ${speed}ms linear`,
            opacity: "0"
          });
          setTimeout(() => {
            nprogress.remove();
            next();
          }, speed);
        }, speed);
      } else {
        setTimeout(() => {
          next();
        }, speed);
      }
    });
    return nprogress;
  },
  isStarted: () => typeof nprogress.percent === "number",
  start: () => {
    if (!nprogress.percent)
      nprogress.set(0);
    const work = () => {
      setTimeout(() => {
        if (!nprogress.percent)
          return;
        nprogress.trickle();
        work();
      }, SETTINGS.trickleSpeed);
    };
    work();
    return nprogress;
  },
  done: (force) => {
    if (!force && !nprogress.percent)
      return nprogress;
    return nprogress.increase(0.3 + 0.5 * Math.random()).set(1);
  },
  increase: (amount) => {
    let { percent } = nprogress;
    if (!percent) {
      return nprogress.start();
    }
    percent = clamp(percent + (typeof amount === "number" ? amount : (1 - percent) * clamp(Math.random() * percent, 0.1, 0.95)), 0, 0.994);
    return nprogress.set(percent);
  },
  trickle: () => nprogress.increase(Math.random() * SETTINGS.trickleRate),
  render: (fromStart) => {
    if (nprogress.isRendered()) {
      return document.getElementById("nprogress");
    }
    addClass(document.documentElement, "nprogress-busy");
    const nprogressElement = document.createElement("div");
    nprogressElement.id = "nprogress";
    nprogressElement.innerHTML = SETTINGS.template;
    const barElement = nprogressElement.querySelector(SETTINGS.barSelector);
    const parentElement = document.querySelector(SETTINGS.parent);
    const percent = fromStart ? "-100" : toBarPercent(nprogress.percent ?? 0);
    addStyle(barElement, {
      transition: "all 0 linear",
      transform: `translate3d(${percent}%,0,0)`
    });
    if (parentElement) {
      if (parentElement !== document.body) {
        addClass(parentElement, "nprogress-custom-parent");
      }
      parentElement.appendChild(nprogressElement);
    }
    return nprogressElement;
  },
  remove: () => {
    removeClass(document.documentElement, "nprogress-busy");
    removeClass(document.querySelector(SETTINGS.parent), "nprogress-custom-parent");
    removeElement(document.getElementById("nprogress"));
  }
};
const useNprogress = () => {
  onMounted(() => {
    const router = useRouter();
    const loadedPages = /* @__PURE__ */ new Set();
    loadedPages.add(router.currentRoute.value.path);
    router.beforeEach((to) => {
      if (!loadedPages.has(to.path)) {
        nprogress.start();
      }
    });
    router.afterEach((to) => {
      loadedPages.add(to.path);
      nprogress.done();
    });
  });
};
const config$3 = defineClientConfig({
  setup() {
    useNprogress();
  }
});
const clientConfig6 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: config$3
}, Symbol.toStringTag, { value: "Module" }));
const clientConfig7 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null
}, Symbol.toStringTag, { value: "Module" }));
const A = "VUEPRESS_CODE_TAB_STORE", r = useStorage(A, {}), S$1 = defineComponent({ name: "CodeTabs", props: { active: { type: Number, default: 0 }, data: { type: Array, required: true }, tabId: String }, slots: Object, setup(e, { slots: o }) {
  let n = e.data.map(() => useId());
  const l = ref(e.active), u = shallowRef([]), b = () => {
    e.tabId && (r.value[e.tabId] = e.data[l.value].id);
  }, p = (a = l.value) => {
    l.value = a < u.value.length - 1 ? a + 1 : 0, u.value[l.value].focus();
  }, f = (a = l.value) => {
    l.value = a > 0 ? a - 1 : u.value.length - 1, u.value[l.value].focus();
  }, I = (a, t) => {
    a.key === " " || a.key === "Enter" ? (a.preventDefault(), l.value = t) : a.key === "ArrowRight" ? (a.preventDefault(), p()) : a.key === "ArrowLeft" && (a.preventDefault(), f()), e.tabId && (r.value[e.tabId] = e.data[l.value].id);
  }, m = () => {
    if (e.tabId) {
      const a = e.data.findIndex(({ id: t }) => r.value[e.tabId] === t);
      if (a !== -1) return a;
    }
    return e.active;
  };
  return onMounted(() => {
    l.value = m(), watch(() => e.tabId && r.value[e.tabId], (a, t) => {
      if (e.tabId && a !== t) {
        const d = e.data.findIndex(({ id: v }) => v === a);
        d !== -1 && (l.value = d);
      }
    });
  }), () => e.data.length ? h("div", { class: "vp-code-tabs" }, [h("div", { class: "vp-code-tabs-nav", role: "tablist" }, e.data.map(({ id: a }, t) => {
    const d = t === l.value;
    return h("button", { type: "button", ref: (v) => {
      v && (u.value[t] = v);
    }, class: ["vp-code-tab-nav", { active: d }], role: "tab", "aria-controls": n[t], "aria-selected": d, onClick: () => {
      l.value = t, b();
    }, onKeydown: (v) => {
      I(v, t);
    } }, o[`title${t}`]({ value: a, isActive: d }));
  })), e.data.map(({ id: a }, t) => {
    const d = t === l.value;
    return h("div", { class: ["vp-code-tab", { active: d }], id: n[t], role: "tabpanel", "aria-expanded": d }, [h("div", { class: "vp-code-tab-title" }, o[`title${t}`]({ value: a, isActive: d })), o[`tab${t}`]({ value: a, isActive: d })]);
  })]) : null;
} });
const S = "VUEPRESS_TAB_STORE", s = useStorage(S, {}), _ = defineComponent({ name: "Tabs", props: { active: { type: Number, default: 0 }, data: { type: Array, required: true }, tabId: String }, slots: Object, setup(e, { slots: d }) {
  let n = e.data.map(() => useId());
  const l = ref(e.active), i = shallowRef([]), o = () => {
    e.tabId && (s.value[e.tabId] = e.data[l.value].id);
  }, b = (a = l.value) => {
    l.value = a < i.value.length - 1 ? a + 1 : 0, i.value[l.value].focus();
  }, f = (a = l.value) => {
    l.value = a > 0 ? a - 1 : i.value.length - 1, i.value[l.value].focus();
  }, m = (a, t) => {
    a.key === " " || a.key === "Enter" ? (a.preventDefault(), l.value = t) : a.key === "ArrowRight" ? (a.preventDefault(), b()) : a.key === "ArrowLeft" && (a.preventDefault(), f()), o();
  }, I = () => {
    if (e.tabId) {
      const a = e.data.findIndex(({ id: t }) => s.value[e.tabId] === t);
      if (a !== -1) return a;
    }
    return e.active;
  };
  return onMounted(() => {
    l.value = I(), watch(() => e.tabId && s.value[e.tabId], (a, t) => {
      if (e.tabId && a !== t) {
        const v = e.data.findIndex(({ id: u }) => u === a);
        v !== -1 && (l.value = v);
      }
    });
  }), () => e.data.length ? h("div", { class: "vp-tabs" }, [h("div", { class: "vp-tabs-nav", role: "tablist" }, e.data.map(({ id: a }, t) => {
    const v = t === l.value;
    return h("button", { type: "button", ref: (u) => {
      u && (i.value[t] = u);
    }, class: ["vp-tab-nav", { active: v }], role: "tab", "aria-controls": n[t], "aria-selected": v, onClick: () => {
      l.value = t, o();
    }, onKeydown: (u) => {
      m(u, t);
    } }, d[`title${t}`]({ value: a, isActive: v }));
  })), e.data.map(({ id: a }, t) => {
    const v = t === l.value;
    return h("div", { class: ["vp-tab", { active: v }], id: n[t], role: "tabpanel", "aria-expanded": v }, [h("div", { class: "vp-tab-title" }, d[`title${t}`]({ value: a, isActive: v })), d[`tab${t}`]({ value: a, isActive: v })]);
  })]) : null;
} });
const config$2 = {
  enhance: ({ app }) => {
    app.component("CodeTabs", S$1);
    app.component("Tabs", _);
  }
};
const clientConfig8 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: config$2
}, Symbol.toStringTag, { value: "Module" }));
const themeData$1 = JSON.parse(`{"logo":"/favicon.ico","navbar":[{"text":"首頁","link":"/"},{"text":"文章","link":"/posts/"},{"text":"關於","link":"/about/"}],"sidebar":"auto","repo":"nickshek/site","repoLabel":"GitHub","editLink":false,"lastUpdated":true,"lastUpdatedText":"最後更新","contributors":true,"contributorsText":"作者","locales":{"/":{"selectLanguageName":"English"}},"colorMode":"auto","colorModeSwitch":true,"selectLanguageText":"Languages","selectLanguageAriaLabel":"Select language","sidebarDepth":2,"editLinkText":"Edit this page","notFound":["There's nothing here.","How did we get here?","That's a Four-Oh-Four.","Looks like we've got some broken links."],"backToHome":"Take me home","openInNewWindow":"open in new window","toggleColorMode":"toggle color mode","toggleSidebar":"toggle sidebar"}`);
const themeData = ref(themeData$1);
const useThemeData = () => themeData;
const themeLocaleDataSymbol = Symbol("");
const useThemeLocaleData = () => {
  const themeLocaleData = inject(themeLocaleDataSymbol);
  if (!themeLocaleData) {
    throw new Error("useThemeLocaleData() is called without provider.");
  }
  return themeLocaleData;
};
const resolveThemeLocaleData = (theme, routeLocale) => {
  const { locales: locales2, ...baseOptions } = theme;
  return {
    ...baseOptions,
    ...locales2?.[routeLocale]
  };
};
const config$1 = defineClientConfig({
  enhance({ app }) {
    const themeData2 = useThemeData();
    const clientData = app._context.provides[clientDataSymbol];
    const themeLocaleData = computed(() => resolveThemeLocaleData(themeData2.value, clientData.routeLocale.value));
    app.provide(themeLocaleDataSymbol, themeLocaleData);
    Object.defineProperties(app.config.globalProperties, {
      $theme: {
        get() {
          return themeData2.value;
        }
      },
      $themeLocale: {
        get() {
          return themeLocaleData.value;
        }
      }
    });
  }
});
const clientConfig9 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: config$1
}, Symbol.toStringTag, { value: "Module" }));
const useData = () => ({
  ...useData$1(),
  theme: useThemeData(),
  themeLocale: useThemeLocaleData()
});
const applyDarkModeToHTML = (isDarkMode) => {
  const update = (value = isDarkMode.value) => {
    const el = window.document.documentElement;
    el.dataset.theme = value ? "dark" : "light";
  };
  onMounted(() => {
    watchImmediate(isDarkMode, update);
  });
  onUnmounted(() => {
    update();
  });
};
const useDarkMode = () => {
  const isDarkMode = inject(darkModeSymbol);
  if (!isDarkMode) {
    throw new Error("useDarkMode() is called without provider.");
  }
  return isDarkMode;
};
const setupDarkMode = () => {
  const { themeLocale } = useData();
  const isDarkPreferred = usePreferredDark();
  const darkStorage = useStorage("vuepress-color-scheme", themeLocale.value.colorMode);
  const isDarkMode = computed({
    get() {
      if (!themeLocale.value.colorModeSwitch) {
        return themeLocale.value.colorMode === "dark";
      }
      if (darkStorage.value === "auto") {
        return isDarkPreferred.value;
      }
      return darkStorage.value === "dark";
    },
    set(val) {
      if (val === isDarkPreferred.value) {
        darkStorage.value = "auto";
      } else {
        darkStorage.value = val ? "dark" : "light";
      }
    }
  });
  provide(darkModeSymbol, isDarkMode);
  applyDarkModeToHTML(isDarkMode);
};
const headersSymbol = Symbol("headers");
const useHeaders = () => {
  const headers = injectLocal(headersSymbol);
  if (!headers) {
    throw new Error("useHeaders() is called without provider.");
  }
  return headers;
};
const setupHeaders = () => {
  const { frontmatter, themeLocale } = useData();
  const headersRef = ref([]);
  const levels = computed(() => frontmatter.value.sidebarDepth ?? themeLocale.value.sidebarDepth ?? 2);
  const updateHeaders = () => {
    if (levels.value <= 0) {
      headersRef.value = [];
      return;
    }
    headersRef.value = getHeaders({
      levels: [2, levels.value + 1],
      ignore: [".vp-badge"]
    });
  };
  provideLocal(headersSymbol, headersRef);
  onContentUpdated((reason) => {
    if (reason === "beforeUnmount")
      headersRef.value = [];
    else
      updateHeaders();
  });
};
let promise = null;
let promiseResolve = null;
const scrollPromise = {
  wait: () => promise,
  pending: () => {
    promise = new Promise((resolve) => {
      promiseResolve = resolve;
    });
  },
  resolve: () => {
    promiseResolve?.();
    promise = null;
    promiseResolve = null;
  }
};
const useScrollPromise = () => scrollPromise;
const resolveAutoLink = (config2, currentPath) => {
  const { notFound, meta, path } = resolveRoute(config2, currentPath);
  return notFound ? { text: path, link: path } : {
    text: meta.title || path,
    link: path
  };
};
const resolvePrefix = (prefix = "", path = "") => isLinkAbsolute(path) || isLinkWithProtocol(path) ? path : `${ensureEndingSlash(prefix)}${path}`;
const resolveSidebarPageHeader = (header) => ({
  text: header.title,
  link: header.link,
  // eslint-disable-next-line @typescript-eslint/no-use-before-define
  children: resolveSidebarPageHeaders(header.children)
});
const resolveSidebarPageHeaders = (headers) => headers ? headers.map((header) => resolveSidebarPageHeader(header)) : [];
const resolveSidebarHeadingItem = (page, headers) => [
  {
    text: page.title,
    children: resolveSidebarPageHeaders(headers)
  }
];
const resolveArraySidebarItems = (sidebarConfig, headers, path, prefix = "") => {
  const handleChildItem = (item, pathPrefix) => {
    const childItem = isString(item) ? resolveAutoLink(resolvePrefix(pathPrefix, item)) : isString(item.link) ? {
      ...item,
      link: isLinkRelative(item.link) ? resolveAutoLink(resolvePrefix(pathPrefix, item.link)).link : item.link
    } : item;
    if ("children" in childItem) {
      return {
        ...childItem,
        children: childItem.children.map((child) => handleChildItem(child, resolvePrefix(pathPrefix, childItem.prefix)))
      };
    }
    if (childItem.link === path) {
      const currentHeaders = headers[0]?.level === 1 ? headers[0].children : headers;
      return {
        ...childItem,
        children: resolveSidebarPageHeaders(currentHeaders)
      };
    }
    return childItem;
  };
  return sidebarConfig.map((item) => handleChildItem(item, prefix));
};
const resolveMultiSidebarItems = (sidebarConfig, page, headers, path) => {
  const sidebarRoutes = keys(sidebarConfig).sort((x, y) => y.length - x.length);
  for (const base of sidebarRoutes)
    if (startsWith(decodeURI(path), base)) {
      const matched = sidebarConfig[base];
      return matched ? matched === "heading" ? resolveSidebarHeadingItem(page, headers) : resolveArraySidebarItems(matched, headers, path, base) : [];
    }
  console.warn(`${decodeURI(path)} is missing sidebar config.`);
  return [];
};
const sidebarItemsSymbol = Symbol("sidebarItems");
const useSidebarItems = () => {
  const sidebarItems = inject(sidebarItemsSymbol);
  if (!sidebarItems) {
    throw new Error("useSidebarItems() is called without provider.");
  }
  return sidebarItems;
};
const resolveSidebarItems = (sidebarConfig, page, path, routeLocale, headers) => {
  if (sidebarConfig === false) {
    return [];
  }
  if (sidebarConfig === "heading") {
    return resolveSidebarHeadingItem(page, headers);
  }
  if (Array.isArray(sidebarConfig)) {
    return resolveArraySidebarItems(sidebarConfig, headers, path, routeLocale);
  }
  if (isPlainObject(sidebarConfig)) {
    return resolveMultiSidebarItems(sidebarConfig, page, headers, path);
  }
  return [];
};
const setupSidebarItems = () => {
  const { frontmatter, page, routeLocale, themeLocale } = useData();
  const headers = useHeaders();
  const routePath = useRoutePath();
  const sidebarConfig = computed(() => !frontmatter.value.home && (frontmatter.value.sidebar ?? themeLocale.value.sidebar ?? "heading"));
  const sidebarItems = computed(() => resolveSidebarItems(sidebarConfig.value, page.value, routePath.value, routeLocale.value, headers.value));
  provide(sidebarItemsSymbol, sidebarItems);
};
const _sfc_main$o = /* @__PURE__ */ defineComponent({
  __name: "Badge",
  __ssrInlineRender: true,
  props: {
    type: { default: "tip" },
    text: { default: "" },
    vertical: { default: "" }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<span${ssrRenderAttrs(mergeProps({
        class: ["vp-badge", __props.type],
        style: __props.vertical ? { verticalAlign: __props.vertical } : ""
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, () => {
        _push(`${ssrInterpolate(__props.text)}`);
      }, _push, _parent);
      _push(`</span>`);
    };
  }
});
const _sfc_setup$o = _sfc_main$o.setup;
_sfc_main$o.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@vuepress/theme-default/lib/client/components/global/Badge.vue");
  return _sfc_setup$o ? _sfc_setup$o(props, ctx) : void 0;
};
const _sfc_main$n = /* @__PURE__ */ defineComponent({
  __name: "VPFadeSlideYTransition",
  __ssrInlineRender: true,
  emits: ["beforeEnter", "beforeLeave"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      ssrRenderSlotInner(_ctx.$slots, "default", {}, null, _push, _parent, null, true);
    };
  }
});
const _sfc_setup$n = _sfc_main$n.setup;
_sfc_main$n.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@vuepress/theme-default/lib/client/components/VPFadeSlideYTransition.vue");
  return _sfc_setup$n ? _sfc_setup$n(props, ctx) : void 0;
};
const _sfc_main$m = /* @__PURE__ */ defineComponent({
  __name: "VPHomeFeatures",
  __ssrInlineRender: true,
  setup(__props) {
    const { frontmatter } = useData();
    const features = computed(() => frontmatter.value.features ?? []);
    return (_ctx, _push, _parent, _attrs) => {
      if (features.value.length) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "vp-features" }, _attrs))}><!--[-->`);
        ssrRenderList(features.value, (feature) => {
          _push(`<div class="vp-feature"><h2>${ssrInterpolate(feature.title)}</h2><p>${ssrInterpolate(feature.details)}</p></div>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$m = _sfc_main$m.setup;
_sfc_main$m.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@vuepress/theme-default/lib/client/components/VPHomeFeatures.vue");
  return _sfc_setup$m ? _sfc_setup$m(props, ctx) : void 0;
};
const _sfc_main$l = /* @__PURE__ */ defineComponent({
  __name: "VPHomeFooter",
  __ssrInlineRender: true,
  setup(__props) {
    const frontmatter = useFrontmatter();
    const footer = computed(() => frontmatter.value.footer);
    const footerHtml = computed(() => frontmatter.value.footerHtml);
    return (_ctx, _push, _parent, _attrs) => {
      if (footer.value) {
        _push(`<!--[-->`);
        if (footerHtml.value) {
          _push(`<div class="vp-footer" vp-footer>${footer.value ?? ""}</div>`);
        } else {
          _push(`<div class="vp-footer" vp-footer>${ssrInterpolate(footer.value)}</div>`);
        }
        _push(`<!--]-->`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$l = _sfc_main$l.setup;
_sfc_main$l.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@vuepress/theme-default/lib/client/components/VPHomeFooter.vue");
  return _sfc_setup$l ? _sfc_setup$l(props, ctx) : void 0;
};
const _sfc_main$k = /* @__PURE__ */ defineComponent({
  __name: "VPAutoLink",
  __ssrInlineRender: true,
  props: {
    config: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(AutoLink), mergeProps({ config: __props.config }, _attrs), createSlots({
        before: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "before", __props.config, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "before", __props.config)
            ];
          }
        }),
        after: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "after", __props.config, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "after", __props.config)
            ];
          }
        }),
        _: 2
      }, [
        _ctx.$slots.default ? {
          name: "default",
          fn: withCtx((_2, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "default", __props.config, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "default", __props.config)
              ];
            }
          }),
          key: "0"
        } : void 0
      ]), _parent));
    };
  }
});
const _sfc_setup$k = _sfc_main$k.setup;
_sfc_main$k.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@vuepress/theme-default/lib/client/components/VPAutoLink.vue");
  return _sfc_setup$k ? _sfc_setup$k(props, ctx) : void 0;
};
const _sfc_main$j = /* @__PURE__ */ defineComponent({
  __name: "VPHomeHero",
  __ssrInlineRender: true,
  setup(__props) {
    const { frontmatter, siteLocale } = useData();
    const isDarkMode = useDarkMode();
    const heroText = computed(() => {
      if (frontmatter.value.heroText === null) {
        return null;
      }
      return frontmatter.value.heroText || siteLocale.value.title || "Hello";
    });
    const tagline = computed(() => {
      if (frontmatter.value.tagline === null) {
        return null;
      }
      return frontmatter.value.tagline || siteLocale.value.description || "Welcome to your VuePress site";
    });
    const heroImage = computed(() => {
      if (isDarkMode.value && frontmatter.value.heroImageDark !== void 0) {
        return frontmatter.value.heroImageDark;
      }
      return frontmatter.value.heroImage;
    });
    const heroAlt = computed(
      () => frontmatter.value.heroAlt || heroText.value || "hero"
    );
    const heroHeight = computed(() => frontmatter.value.heroHeight ?? 280);
    const actions = computed(() => {
      if (!Array.isArray(frontmatter.value.actions)) {
        return [];
      }
      return frontmatter.value.actions.map(({ type = "primary", ...rest }) => ({
        type,
        ...rest
      }));
    });
    const HomeHeroImage = () => {
      if (!heroImage.value) return null;
      const img = h("img", {
        class: "vp-hero-image",
        src: withBase(heroImage.value),
        alt: heroAlt.value,
        height: heroHeight.value
      });
      if (frontmatter.value.heroImageDark === void 0) {
        return img;
      }
      return h(ClientOnly, () => img);
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<header${ssrRenderAttrs(mergeProps({ class: "vp-hero" }, _attrs))}>`);
      _push(ssrRenderComponent(HomeHeroImage, null, null, _parent));
      if (heroText.value) {
        _push(`<h1 id="main-title">${ssrInterpolate(heroText.value)}</h1>`);
      } else {
        _push(`<!---->`);
      }
      if (tagline.value) {
        _push(`<p class="vp-hero-description">${ssrInterpolate(tagline.value)}</p>`);
      } else {
        _push(`<!---->`);
      }
      if (actions.value.length) {
        _push(`<p class="vp-hero-actions"><!--[-->`);
        ssrRenderList(actions.value, (action) => {
          _push(ssrRenderComponent(_sfc_main$k, {
            key: action.text,
            class: ["vp-hero-action-button", [action.type]],
            config: action
          }, null, _parent));
        });
        _push(`<!--]--></p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</header>`);
    };
  }
});
const _sfc_setup$j = _sfc_main$j.setup;
_sfc_main$j.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@vuepress/theme-default/lib/client/components/VPHomeHero.vue");
  return _sfc_setup$j ? _sfc_setup$j(props, ctx) : void 0;
};
const _sfc_main$i = /* @__PURE__ */ defineComponent({
  __name: "VPHome",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "vp-home" }, _attrs))}>`);
      _push(ssrRenderComponent(_sfc_main$j, null, null, _parent));
      _push(ssrRenderComponent(_sfc_main$m, null, null, _parent));
      _push(`<div vp-content>`);
      _push(ssrRenderComponent(unref(Content), null, null, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_sfc_main$l, null, null, _parent));
      _push(`</main>`);
    };
  }
});
const _sfc_setup$i = _sfc_main$i.setup;
_sfc_main$i.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@vuepress/theme-default/lib/client/components/VPHome.vue");
  return _sfc_setup$i ? _sfc_setup$i(props, ctx) : void 0;
};
const _sfc_main$h = /* @__PURE__ */ defineComponent({
  __name: "VPNavbarBrand",
  __ssrInlineRender: true,
  setup(__props) {
    const { routeLocale, siteLocale, themeLocale } = useData();
    const isDarkMode = useDarkMode();
    const navbarBrandLink = computed(
      () => themeLocale.value.home || routeLocale.value
    );
    const navbarBrandTitle = computed(() => siteLocale.value.title);
    const navbarBrandLogo = computed(() => {
      if (isDarkMode.value && themeLocale.value.logoDark !== void 0) {
        return themeLocale.value.logoDark;
      }
      return themeLocale.value.logo;
    });
    const navbarBrandLogoAlt = computed(
      () => themeLocale.value.logoAlt ?? navbarBrandTitle.value
    );
    const navBarLogoAltMatchesTitle = computed(
      () => navbarBrandTitle.value.toLocaleUpperCase().trim() === navbarBrandLogoAlt.value.toLocaleUpperCase().trim()
    );
    const NavbarBrandLogo = () => {
      if (!navbarBrandLogo.value) return null;
      const img = h("img", {
        class: "vp-site-logo",
        src: withBase(navbarBrandLogo.value),
        alt: navbarBrandLogoAlt.value
      });
      if (themeLocale.value.logoDark === void 0) {
        return img;
      }
      return h(ClientOnly, () => img);
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(RouteLink), mergeProps({ to: navbarBrandLink.value }, _attrs), {
        default: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(NavbarBrandLogo, null, null, _parent2, _scopeId));
            if (navbarBrandTitle.value) {
              _push2(`<span class="${ssrRenderClass([{ "vp-hide-mobile": navbarBrandLogo.value }, "vp-site-name"])}"${ssrRenderAttr("aria-hidden", navBarLogoAltMatchesTitle.value)}${_scopeId}>${ssrInterpolate(navbarBrandTitle.value)}</span>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              createVNode(NavbarBrandLogo),
              navbarBrandTitle.value ? (openBlock(), createBlock("span", {
                key: 0,
                class: ["vp-site-name", { "vp-hide-mobile": navbarBrandLogo.value }],
                "aria-hidden": navBarLogoAltMatchesTitle.value
              }, toDisplayString(navbarBrandTitle.value), 11, ["aria-hidden"])) : createCommentVNode("", true)
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$h = _sfc_main$h.setup;
_sfc_main$h.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@vuepress/theme-default/lib/client/components/VPNavbarBrand.vue");
  return _sfc_setup$h ? _sfc_setup$h(props, ctx) : void 0;
};
const _sfc_main$g = /* @__PURE__ */ defineComponent({
  __name: "VPNavbarDropdown",
  __ssrInlineRender: true,
  props: {
    config: {}
  },
  setup(__props) {
    const [open, toggleOpen] = useToggle();
    const dropdownAriaLabel = computed(() => __props.config.ariaLabel || __props.config.text);
    const isLastItemOfArray = (arrayItem, array) => array[array.length - 1] === arrayItem;
    onContentUpdated(() => {
      toggleOpen(false);
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["vp-navbar-dropdown-wrapper", { open: unref(open) }]
      }, _attrs))}><button class="vp-navbar-dropdown-title" type="button"${ssrRenderAttr("aria-label", dropdownAriaLabel.value)}><span class="title">${ssrInterpolate(__props.config.text)}</span><span class="arrow down"></span></button><button class="vp-navbar-dropdown-title-mobile" type="button"${ssrRenderAttr("aria-label", dropdownAriaLabel.value)}><span class="title">${ssrInterpolate(__props.config.text)}</span><span class="${ssrRenderClass([unref(open) ? "down" : "right", "arrow"])}"></span></button>`);
      _push(ssrRenderComponent(unref(FadeInExpandTransition), null, {
        default: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<ul class="vp-navbar-dropdown" style="${ssrRenderStyle(unref(open) ? null : { display: "none" })}"${_scopeId}><!--[-->`);
            ssrRenderList(__props.config.children, (child) => {
              _push2(`<li class="vp-navbar-dropdown-item"${_scopeId}>`);
              if ("children" in child) {
                _push2(`<!--[--><h4 class="vp-navbar-dropdown-subtitle"${_scopeId}>`);
                if (child.link) {
                  _push2(ssrRenderComponent(_sfc_main$k, {
                    config: child,
                    onFocusout: () => {
                      if (isLastItemOfArray(child, __props.config.children) && child.children.length === 0) {
                        open.value = false;
                      }
                    }
                  }, null, _parent2, _scopeId));
                } else {
                  _push2(`<span${_scopeId}>${ssrInterpolate(child.text)}</span>`);
                }
                _push2(`</h4><ul class="vp-navbar-dropdown-subitem-wrapper"${_scopeId}><!--[-->`);
                ssrRenderList(child.children, (grandchild) => {
                  _push2(`<li class="vp-navbar-dropdown-subitem"${_scopeId}>`);
                  _push2(ssrRenderComponent(_sfc_main$k, {
                    config: grandchild,
                    onFocusout: () => {
                      if (isLastItemOfArray(grandchild, child.children) && isLastItemOfArray(child, __props.config.children)) {
                        unref(toggleOpen)(false);
                      }
                    }
                  }, null, _parent2, _scopeId));
                  _push2(`</li>`);
                });
                _push2(`<!--]--></ul><!--]-->`);
              } else {
                _push2(ssrRenderComponent(_sfc_main$k, {
                  config: child,
                  onFocusout: () => {
                    if (isLastItemOfArray(child, __props.config.children)) {
                      unref(toggleOpen)(false);
                    }
                  }
                }, null, _parent2, _scopeId));
              }
              _push2(`</li>`);
            });
            _push2(`<!--]--></ul>`);
          } else {
            return [
              withDirectives(createVNode("ul", { class: "vp-navbar-dropdown" }, [
                (openBlock(true), createBlock(Fragment, null, renderList(__props.config.children, (child) => {
                  return openBlock(), createBlock("li", {
                    key: child.text,
                    class: "vp-navbar-dropdown-item"
                  }, [
                    "children" in child ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                      createVNode("h4", { class: "vp-navbar-dropdown-subtitle" }, [
                        child.link ? (openBlock(), createBlock(_sfc_main$k, {
                          key: 0,
                          config: child,
                          onFocusout: () => {
                            if (isLastItemOfArray(child, __props.config.children) && child.children.length === 0) {
                              open.value = false;
                            }
                          }
                        }, null, 8, ["config", "onFocusout"])) : (openBlock(), createBlock("span", { key: 1 }, toDisplayString(child.text), 1))
                      ]),
                      createVNode("ul", { class: "vp-navbar-dropdown-subitem-wrapper" }, [
                        (openBlock(true), createBlock(Fragment, null, renderList(child.children, (grandchild) => {
                          return openBlock(), createBlock("li", {
                            key: grandchild.link,
                            class: "vp-navbar-dropdown-subitem"
                          }, [
                            createVNode(_sfc_main$k, {
                              config: grandchild,
                              onFocusout: () => {
                                if (isLastItemOfArray(grandchild, child.children) && isLastItemOfArray(child, __props.config.children)) {
                                  unref(toggleOpen)(false);
                                }
                              }
                            }, null, 8, ["config", "onFocusout"])
                          ]);
                        }), 128))
                      ])
                    ], 64)) : (openBlock(), createBlock(_sfc_main$k, {
                      key: 1,
                      config: child,
                      onFocusout: () => {
                        if (isLastItemOfArray(child, __props.config.children)) {
                          unref(toggleOpen)(false);
                        }
                      }
                    }, null, 8, ["config", "onFocusout"]))
                  ]);
                }), 128))
              ], 512), [
                [vShow, unref(open)]
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$g = _sfc_main$g.setup;
_sfc_main$g.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@vuepress/theme-default/lib/client/components/VPNavbarDropdown.vue");
  return _sfc_setup$g ? _sfc_setup$g(props, ctx) : void 0;
};
const resolveNavbarItem = (item, prefix = "") => {
  if (isString(item)) {
    return resolveAutoLink(resolvePrefix(prefix, item));
  }
  if ("children" in item) {
    return {
      ...item,
      children: item.children.map((child) => resolveNavbarItem(child, resolvePrefix(prefix, item.prefix)))
    };
  }
  return {
    ...item,
    link: isLinkRelative(item.link) ? resolveAutoLink(resolvePrefix(prefix, item.link)).link : item.link
  };
};
const useNavbarConfig = () => {
  const { themeLocale } = useData();
  return computed(() => (
    // eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing
    (themeLocale.value.navbar || []).map((item) => resolveNavbarItem(item))
  ));
};
const resolveRepoType = (repo) => {
  if (!isLinkHttp(repo) || repo.includes("github.com"))
    return "GitHub";
  if (repo.includes("bitbucket.org"))
    return "Bitbucket";
  if (repo.includes("gitlab.com"))
    return "GitLab";
  if (repo.includes("gitee.com"))
    return "Gitee";
  return null;
};
const useNavbarRepo = () => {
  const { themeLocale } = useData();
  const repo = computed(() => themeLocale.value.repo);
  const repoType = computed(() => repo.value ? resolveRepoType(repo.value) : null);
  const repoLink = computed(() => {
    if (repo.value && !isLinkHttp(repo.value)) {
      return `https://github.com/${repo.value}`;
    }
    return repo.value;
  });
  const repoLabel = computed(() => {
    if (!repoLink.value)
      return null;
    if (themeLocale.value.repoLabel)
      return themeLocale.value.repoLabel;
    if (repoType.value === null)
      return "Source";
    return repoType.value;
  });
  return computed(() => {
    if (!repoLink.value || !repoLabel.value) {
      return [];
    }
    return [
      {
        text: repoLabel.value,
        link: repoLink.value
      }
    ];
  });
};
const useNavbarSelectLanguage = () => {
  const route = useRoute();
  const routePaths = useRoutePaths();
  const { routeLocale, site, siteLocale, theme, themeLocale } = useData();
  const isMounted = useMounted();
  return computed(() => {
    const localePaths = Object.keys(site.value.locales);
    if (localePaths.length < 2) {
      return [];
    }
    const currentPath = route.path;
    const currentFullPath = route.fullPath;
    const languageDropdown = {
      text: `${themeLocale.value.selectLanguageText}`,
      ariaLabel: `${themeLocale.value.selectLanguageAriaLabel ?? themeLocale.value.selectLanguageText}`,
      children: localePaths.map((targetLocalePath) => {
        const targetSiteLocale = site.value.locales?.[targetLocalePath] ?? {};
        const targetThemeLocale = theme.value.locales?.[targetLocalePath] ?? {};
        const targetLang = `${targetSiteLocale.lang}`;
        const text = targetThemeLocale.selectLanguageName ?? targetLang;
        if (targetLang === siteLocale.value.lang) {
          return {
            text,
            activeMatch: ".",
            link: isMounted.value ? currentFullPath : currentPath
          };
        }
        const targetLocalePage = currentPath.replace(routeLocale.value, targetLocalePath);
        return {
          text,
          // try to keep current hash and params across languages
          link: routePaths.value.some((item) => item === targetLocalePage) ? isMounted.value ? currentFullPath.replace(currentPath, targetLocalePage) : targetLocalePage : targetThemeLocale.home ?? targetLocalePath
        };
      })
    };
    return [languageDropdown];
  });
};
const mobile = "719px";
const cssVariables = {
  mobile
};
var DeviceType;
(function(DeviceType2) {
  DeviceType2["Mobile"] = "mobile";
})(DeviceType || (DeviceType = {}));
const DeviceTypeMap = {
  [DeviceType.Mobile]: Number.parseInt(cssVariables.mobile.replace("px", ""), 10)
};
const useUpdateDeviceStatus = (deviceType, callback) => {
  const width = DeviceTypeMap[deviceType];
  if (!Number.isInteger(width)) {
    return;
  }
  useEventListener("orientationchange", () => {
    callback(width);
  });
  useEventListener("resize", () => {
    callback(width);
  });
  onMounted(() => {
    callback(width);
  });
};
const _sfc_main$f = /* @__PURE__ */ defineComponent({
  __name: "VPNavbarItems",
  __ssrInlineRender: true,
  setup(__props) {
    const { themeLocale } = useData();
    const navbarConfig = useNavbarConfig();
    const navbarSelectLanguage = useNavbarSelectLanguage();
    const navbarRepo = useNavbarRepo();
    const isMobile = ref(false);
    const navbarLabel = computed(() => {
      return themeLocale.value.navbarLabel ?? "site navigation";
    });
    const navbarLinks = computed(() => [
      ...navbarConfig.value,
      ...navbarSelectLanguage.value,
      ...navbarRepo.value
    ]);
    useUpdateDeviceStatus(
      DeviceType.Mobile,
      (mobileDesktopBreakpoint) => {
        isMobile.value = window.innerWidth < mobileDesktopBreakpoint;
      }
    );
    return (_ctx, _push, _parent, _attrs) => {
      if (navbarLinks.value.length) {
        _push(`<nav${ssrRenderAttrs(mergeProps({
          class: "vp-navbar-items",
          "aria-label": navbarLabel.value
        }, _attrs))}><!--[-->`);
        ssrRenderList(navbarLinks.value, (item) => {
          _push(`<div class="vp-navbar-item">`);
          if ("children" in item) {
            _push(ssrRenderComponent(_sfc_main$g, {
              class: { mobile: isMobile.value },
              config: item
            }, null, _parent));
          } else {
            _push(ssrRenderComponent(_sfc_main$k, { config: item }, null, _parent));
          }
          _push(`</div>`);
        });
        _push(`<!--]--></nav>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$f = _sfc_main$f.setup;
_sfc_main$f.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@vuepress/theme-default/lib/client/components/VPNavbarItems.vue");
  return _sfc_setup$f ? _sfc_setup$f(props, ctx) : void 0;
};
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$e = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    class: "dark-icon",
    viewBox: "0 0 32 32"
  }, _attrs))}><path d="M13.502 5.414a15.075 15.075 0 0 0 11.594 18.194a11.113 11.113 0 0 1-7.975 3.39c-.138 0-.278.005-.418 0a11.094 11.094 0 0 1-3.2-21.584M14.98 3a1.002 1.002 0 0 0-.175.016a13.096 13.096 0 0 0 1.825 25.981c.164.006.328 0 .49 0a13.072 13.072 0 0 0 10.703-5.555a1.01 1.01 0 0 0-.783-1.565A13.08 13.08 0 0 1 15.89 4.38A1.015 1.015 0 0 0 14.98 3z" fill="currentColor"></path></svg>`);
}
const _sfc_setup$e = _sfc_main$e.setup;
_sfc_main$e.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@vuepress/theme-default/lib/client/components/VPDarkIcon.vue");
  return _sfc_setup$e ? _sfc_setup$e(props, ctx) : void 0;
};
const VPDarkIcon = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$d = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    class: "light-icon",
    viewBox: "0 0 32 32"
  }, _attrs))}><path d="M16 12.005a4 4 0 1 1-4 4a4.005 4.005 0 0 1 4-4m0-2a6 6 0 1 0 6 6a6 6 0 0 0-6-6z" fill="currentColor"></path><path d="M5.394 6.813l1.414-1.415l3.506 3.506L8.9 10.318z" fill="currentColor"></path><path d="M2 15.005h5v2H2z" fill="currentColor"></path><path d="M5.394 25.197L8.9 21.691l1.414 1.415l-3.506 3.505z" fill="currentColor"></path><path d="M15 25.005h2v5h-2z" fill="currentColor"></path><path d="M21.687 23.106l1.414-1.415l3.506 3.506l-1.414 1.414z" fill="currentColor"></path><path d="M25 15.005h5v2h-5z" fill="currentColor"></path><path d="M21.687 8.904l3.506-3.506l1.414 1.415l-3.506 3.505z" fill="currentColor"></path><path d="M15 2.005h2v5h-2z" fill="currentColor"></path></svg>`);
}
const _sfc_setup$d = _sfc_main$d.setup;
_sfc_main$d.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@vuepress/theme-default/lib/client/components/VPLightIcon.vue");
  return _sfc_setup$d ? _sfc_setup$d(props, ctx) : void 0;
};
const VPLightIcon = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$c = /* @__PURE__ */ defineComponent({
  __name: "VPToggleColorModeButton",
  __ssrInlineRender: true,
  setup(__props) {
    const { themeLocale } = useData();
    const isDarkMode = useDarkMode();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<button${ssrRenderAttrs(mergeProps({
        type: "button",
        class: "vp-toggle-color-mode-button",
        title: unref(themeLocale).toggleColorMode
      }, _attrs))}>`);
      _push(ssrRenderComponent(VPLightIcon, {
        style: !unref(isDarkMode) ? null : { display: "none" }
      }, null, _parent));
      _push(ssrRenderComponent(VPDarkIcon, {
        style: unref(isDarkMode) ? null : { display: "none" }
      }, null, _parent));
      _push(`</button>`);
    };
  }
});
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@vuepress/theme-default/lib/client/components/VPToggleColorModeButton.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const _sfc_main$b = /* @__PURE__ */ defineComponent({
  __name: "VPToggleSidebarButton",
  __ssrInlineRender: true,
  emits: ["toggle"],
  setup(__props) {
    const { themeLocale } = useData();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "vp-toggle-sidebar-button",
        title: unref(themeLocale).toggleSidebar,
        "aria-expanded": "false",
        role: "button",
        tabindex: "0"
      }, _attrs))}><div class="icon" aria-hidden="true"><span></span><span></span><span></span></div></div>`);
    };
  }
});
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@vuepress/theme-default/lib/client/components/VPToggleSidebarButton.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const _sfc_main$a = /* @__PURE__ */ defineComponent({
  __name: "VPNavbar",
  __ssrInlineRender: true,
  emits: ["toggleSidebar"],
  setup(__props) {
    const SearchBox = hasGlobalComponent("SearchBox") ? resolveComponent("SearchBox") : () => null;
    const { themeLocale } = useData();
    const navbar = useTemplateRef("navbar");
    const navbarBrand = useTemplateRef("navbar-brand");
    const linksWrapperMaxWidth = ref(0);
    const linksWrapperStyle = computed(() => {
      if (!linksWrapperMaxWidth.value) {
        return {};
      }
      return {
        maxWidth: `${linksWrapperMaxWidth.value}px`
      };
    });
    const getCssValue = (el, property) => {
      const val = el?.ownerDocument.defaultView?.getComputedStyle(el, null)[property];
      const num = Number.parseInt(val, 10);
      return Number.isNaN(num) ? 0 : num;
    };
    useUpdateDeviceStatus(
      DeviceType.Mobile,
      (mobileDesktopBreakpoint) => {
        const navbarHorizontalPadding = getCssValue(navbar.value, "paddingLeft") + getCssValue(navbar.value, "paddingRight");
        if (window.innerWidth < mobileDesktopBreakpoint) {
          linksWrapperMaxWidth.value = 0;
        } else {
          linksWrapperMaxWidth.value = navbar.value.offsetWidth - navbarHorizontalPadding - (navbarBrand.value?.offsetWidth ?? 0);
        }
      }
    );
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<header${ssrRenderAttrs(mergeProps({
        ref_key: "navbar",
        ref: navbar,
        class: "vp-navbar",
        "vp-navbar": ""
      }, _attrs))}>`);
      _push(ssrRenderComponent(_sfc_main$b, {
        onToggle: ($event) => _ctx.$emit("toggleSidebar")
      }, null, _parent));
      _push(`<span>`);
      _push(ssrRenderComponent(_sfc_main$h, null, null, _parent));
      _push(`</span><div class="vp-navbar-items-wrapper" style="${ssrRenderStyle(linksWrapperStyle.value)}">`);
      ssrRenderSlot(_ctx.$slots, "before", {}, null, _push, _parent);
      _push(ssrRenderComponent(_sfc_main$f, { class: "vp-hide-mobile" }, null, _parent));
      ssrRenderSlot(_ctx.$slots, "after", {}, null, _push, _parent);
      if (unref(themeLocale).colorModeSwitch) {
        _push(ssrRenderComponent(_sfc_main$c, null, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(unref(SearchBox), null, null, _parent));
      _push(`</div></header>`);
    };
  }
});
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@vuepress/theme-default/lib/client/components/VPNavbar.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const _sfc_main$9 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    class: "edit-icon",
    viewBox: "0 0 1024 1024"
  }, _attrs))}><g fill="currentColor"><path d="M430.818 653.65a60.46 60.46 0 0 1-50.96-93.281l71.69-114.012 7.773-10.365L816.038 80.138A60.46 60.46 0 0 1 859.225 62a60.46 60.46 0 0 1 43.186 18.138l43.186 43.186a60.46 60.46 0 0 1 0 86.373L588.879 565.55l-8.637 8.637-117.466 68.234a60.46 60.46 0 0 1-31.958 11.229z"></path><path d="M728.802 962H252.891A190.883 190.883 0 0 1 62.008 771.98V296.934a190.883 190.883 0 0 1 190.883-192.61h267.754a60.46 60.46 0 0 1 0 120.92H252.891a69.962 69.962 0 0 0-69.098 69.099V771.98a69.962 69.962 0 0 0 69.098 69.098h475.911A69.962 69.962 0 0 0 797.9 771.98V503.363a60.46 60.46 0 1 1 120.922 0V771.98A190.883 190.883 0 0 1 728.802 962z"></path></g></svg>`);
}
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@vuepress/theme-default/lib/client/components/VPEditIcon.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const VPEditIcon = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["ssrRender", _sfc_ssrRender]]);
const EDIT_LINK_PATTERNS = {
  GitHub: ":repo/edit/:branch/:path",
  GitLab: ":repo/-/edit/:branch/:path",
  Gitee: ":repo/edit/:branch/:path",
  Bitbucket: ":repo/src/:branch/:path?mode=edit&spa=0&at=:branch&fileviewer=file-view-default"
};
const resolveEditLinkPatterns = ({ docsRepo, editLinkPattern }) => {
  if (editLinkPattern) {
    return editLinkPattern;
  }
  const repoType = resolveRepoType(docsRepo);
  if (repoType !== null) {
    return EDIT_LINK_PATTERNS[repoType];
  }
  return null;
};
const resolveEditLink = ({ docsRepo, docsBranch, docsDir, filePathRelative, editLinkPattern }) => {
  if (!filePathRelative)
    return null;
  const pattern = resolveEditLinkPatterns({ docsRepo, editLinkPattern });
  if (!pattern)
    return null;
  return pattern.replace(/:repo/, isLinkHttp(docsRepo) ? docsRepo : `https://github.com/${docsRepo}`).replace(/:branch/, docsBranch).replace(/:path/, removeLeadingSlash(`${removeEndingSlash(docsDir)}/${filePathRelative}`));
};
const useEditLink = () => {
  const { frontmatter, page, themeLocale } = useData();
  return computed(() => {
    const showEditLink = frontmatter.value.editLink ?? themeLocale.value.editLink ?? true;
    if (!showEditLink) {
      return null;
    }
    const { repo, docsRepo = repo, docsBranch = "main", docsDir = "", editLinkText } = themeLocale.value;
    if (!docsRepo)
      return null;
    const editLink = resolveEditLink({
      docsRepo,
      docsBranch,
      docsDir,
      filePathRelative: page.value.filePathRelative,
      editLinkPattern: frontmatter.value.editLinkPattern ?? themeLocale.value.editLinkPattern
    });
    if (!editLink)
      return null;
    return {
      text: editLinkText ?? "Edit this page",
      link: editLink
    };
  });
};
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "VPPageMeta",
  __ssrInlineRender: true,
  setup(__props) {
    const { frontmatter, themeLocale } = useData();
    const contributors = useContributors(
      () => frontmatter.value.contributors ?? themeLocale.value.contributors ?? true
    );
    const editLink = useEditLink();
    const lastUpdated = useLastUpdated(
      () => frontmatter.value.lastUpdated ?? themeLocale.value.lastUpdated ?? true
    );
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<footer${ssrRenderAttrs(mergeProps({ class: "vp-page-meta" }, _attrs))}>`);
      if (unref(editLink)) {
        _push(`<div class="vp-meta-item edit-link">`);
        _push(ssrRenderComponent(_sfc_main$k, {
          class: "label",
          config: unref(editLink)
        }, {
          before: withCtx((_2, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(VPEditIcon, null, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(VPEditIcon)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="vp-meta-item git-info">`);
      if (unref(lastUpdated)) {
        _push(`<div class="vp-meta-item last-updated"><span class="meta-item-label">${ssrInterpolate(unref(themeLocale).lastUpdatedText ?? unref(lastUpdated).locale)}: </span><time class="meta-item-info"${ssrRenderAttr("datetime", unref(lastUpdated).iso)} data-allow-mismatch>${ssrInterpolate(unref(lastUpdated).text)}</time></div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(contributors).length) {
        _push(`<div class="vp-meta-item contributors"><span class="meta-item-label">${ssrInterpolate(unref(themeLocale).contributorsText)}: </span><span class="meta-item-info"><!--[-->`);
        ssrRenderList(unref(contributors), (contributor, index) => {
          _push(`<!--[--><span class="contributor"${ssrRenderAttr("title", `email: ${contributor.email}`)}>${ssrInterpolate(contributor.name)}</span>`);
          if (index !== unref(contributors).length - 1) {
            _push(`<!--[-->, <!--]-->`);
          } else {
            _push(`<!---->`);
          }
          _push(`<!--]-->`);
        });
        _push(`<!--]--></span></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></footer>`);
    };
  }
});
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@vuepress/theme-default/lib/client/components/VPPageMeta.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const useNavigate = () => {
  const router = useRouter();
  const route = useRoute();
  return (url) => {
    if (url)
      if (isLinkAbsolute(url)) {
        if (route.fullPath !== url)
          router.push(url);
      } else if (isLinkWithProtocol(url)) {
        window.open(url);
      } else {
        router.push(encodeURI(url));
      }
  };
};
const resolveFromFrontmatterConfig = (config2, currentPath) => {
  if (config2 === false) {
    return false;
  }
  if (isString(config2)) {
    return resolveAutoLink(config2, currentPath);
  }
  if (isPlainObject(config2)) {
    return {
      ...config2,
      link: resolveAutoLink(config2.link, currentPath).link
    };
  }
  return null;
};
const resolveFromSidebarItems = (sidebarItems, currentPath, offset) => {
  const linkIndex = sidebarItems.findIndex((item) => item.link === currentPath);
  if (linkIndex !== -1) {
    const targetItem = sidebarItems[linkIndex + offset];
    if (!targetItem)
      return null;
    if (targetItem.link)
      return targetItem;
    if ("prefix" in targetItem && !resolveRoute(targetItem.prefix).notFound)
      return {
        ...targetItem,
        link: targetItem.prefix
      };
    return null;
  }
  for (const item of sidebarItems) {
    if ("children" in item) {
      const childResult = resolveFromSidebarItems(item.children, currentPath, offset);
      if (childResult) {
        return childResult;
      }
    }
  }
  const prefixIndex = sidebarItems.findIndex((item) => "prefix" in item && item.prefix === currentPath);
  if (prefixIndex !== -1) {
    const targetItem = sidebarItems[prefixIndex + offset];
    if (!targetItem)
      return null;
    if (targetItem.link)
      return targetItem;
    if ("prefix" in targetItem && !resolveRoute(targetItem.prefix).notFound)
      return {
        ...targetItem,
        link: targetItem.prefix
      };
    return null;
  }
  return null;
};
const useRelatedLinks = () => {
  const { frontmatter, themeLocale } = useData();
  const sidebarItems = useSidebarItems();
  const routePath = useRoutePath();
  const prevLink = computed(() => {
    const prevConfig = resolveFromFrontmatterConfig(frontmatter.value.prev, routePath.value);
    return prevConfig === false ? null : prevConfig ?? (themeLocale.value.prev === false ? null : resolveFromSidebarItems(sidebarItems.value, routePath.value, -1));
  });
  const nextLink = computed(() => {
    const nextConfig = resolveFromFrontmatterConfig(frontmatter.value.next, routePath.value);
    return nextConfig === false ? null : nextConfig ?? (themeLocale.value.next === false ? null : resolveFromSidebarItems(sidebarItems.value, routePath.value, 1));
  });
  return {
    prevLink,
    nextLink
  };
};
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "VPPageNav",
  __ssrInlineRender: true,
  setup(__props) {
    const { themeLocale } = useData();
    const navigate = useNavigate();
    const { prevLink, nextLink } = useRelatedLinks();
    const navbarLabel = computed(
      () => themeLocale.value.pageNavbarLabel ?? "page navigation"
    );
    useEventListener("keydown", (event) => {
      if (event.altKey) {
        if (event.key === "ArrowRight") {
          if (nextLink.value) {
            navigate(nextLink.value.link);
            event.preventDefault();
          }
        } else if (event.key === "ArrowLeft") {
          if (prevLink.value) {
            navigate(prevLink.value.link);
            event.preventDefault();
          }
        }
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      if (unref(prevLink) || unref(nextLink)) {
        _push(`<nav${ssrRenderAttrs(mergeProps({
          class: "vp-page-nav",
          "aria-label": navbarLabel.value
        }, _attrs))}>`);
        if (unref(prevLink)) {
          _push(ssrRenderComponent(_sfc_main$k, {
            class: "prev",
            config: unref(prevLink)
          }, {
            default: withCtx((_2, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<div class="hint"${_scopeId}><span class="arrow left"${_scopeId}></span> ${ssrInterpolate(unref(themeLocale).prev ?? "Prev")}</div><div class="link"${_scopeId}><span class="external-link"${_scopeId}>${ssrInterpolate(unref(prevLink).text)}</span></div>`);
              } else {
                return [
                  createVNode("div", { class: "hint" }, [
                    createVNode("span", { class: "arrow left" }),
                    createTextVNode(" " + toDisplayString(unref(themeLocale).prev ?? "Prev"), 1)
                  ]),
                  createVNode("div", { class: "link" }, [
                    createVNode("span", { class: "external-link" }, toDisplayString(unref(prevLink).text), 1)
                  ])
                ];
              }
            }),
            _: 1
          }, _parent));
        } else {
          _push(`<!---->`);
        }
        if (unref(nextLink)) {
          _push(ssrRenderComponent(_sfc_main$k, {
            class: "next",
            config: unref(nextLink)
          }, {
            default: withCtx((_2, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<div class="hint"${_scopeId}>${ssrInterpolate(unref(themeLocale).next ?? "Next")} <span class="arrow right"${_scopeId}></span></div><div class="link"${_scopeId}><span class="external-link"${_scopeId}>${ssrInterpolate(unref(nextLink).text)}</span></div>`);
              } else {
                return [
                  createVNode("div", { class: "hint" }, [
                    createTextVNode(toDisplayString(unref(themeLocale).next ?? "Next") + " ", 1),
                    createVNode("span", { class: "arrow right" })
                  ]),
                  createVNode("div", { class: "link" }, [
                    createVNode("span", { class: "external-link" }, toDisplayString(unref(nextLink).text), 1)
                  ])
                ];
              }
            }),
            _: 1
          }, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</nav>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@vuepress/theme-default/lib/client/components/VPPageNav.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "VPPage",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "vp-page" }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "top", {}, null, _push, _parent);
      _push(`<div vp-content>`);
      ssrRenderSlot(_ctx.$slots, "content-top", {}, null, _push, _parent);
      _push(ssrRenderComponent(unref(Content), { id: "content" }, null, _parent));
      ssrRenderSlot(_ctx.$slots, "content-bottom", {}, null, _push, _parent);
      _push(`</div>`);
      _push(ssrRenderComponent(_sfc_main$8, null, null, _parent));
      _push(ssrRenderComponent(_sfc_main$7, null, null, _parent));
      ssrRenderSlot(_ctx.$slots, "bottom", {}, null, _push, _parent);
      _push(`</main>`);
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@vuepress/theme-default/lib/client/components/VPPage.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "VPDropdownTransition",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      ssrRenderSlotInner(_ctx.$slots, "default", {}, null, _push, _parent, null, true);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@vuepress/theme-default/lib/client/components/VPDropdownTransition.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const normalizePath = (path) => decodeURI(path).replace(/#.*$/, "").replace(/(index)?\.(md|html)$/, "");
const isActiveLink = (link, route) => {
  if (route.hash === link) {
    return true;
  }
  const currentPath = normalizePath(route.path);
  const targetPath = normalizePath(link);
  return currentPath === targetPath;
};
const isActiveSidebarItem = (item, route) => {
  if (item.link && isActiveLink(item.link, route)) {
    return true;
  }
  if ("children" in item) {
    return item.children.some((child) => isActiveSidebarItem(child, route));
  }
  return false;
};
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "VPSidebarItem",
  __ssrInlineRender: true,
  props: {
    item: {},
    depth: { default: 0 }
  },
  setup(__props) {
    const route = useRoute();
    const router = useRouter();
    const collapsible = computed(() => __props.item.collapsible);
    const isActive = computed(() => isActiveSidebarItem(__props.item, route));
    const itemClass = computed(() => ({
      "vp-sidebar-item": true,
      "vp-sidebar-heading": __props.depth === 0,
      "active": isActive.value,
      "collapsible": collapsible.value
    }));
    const isOpenDefault = computed(
      () => collapsible.value ? isActive.value : true
    );
    const [isOpen, toggleIsOpen] = useToggle(isOpenDefault.value);
    const unregisterRouterHook = router.afterEach(() => {
      void nextTick(() => {
        isOpen.value = isOpenDefault.value;
      });
    });
    onBeforeUnmount(() => {
      unregisterRouterHook();
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_VPSidebarItem = resolveComponent("VPSidebarItem", true);
      _push(`<li${ssrRenderAttrs(_attrs)}>`);
      if (__props.item.link) {
        _push(ssrRenderComponent(_sfc_main$k, {
          class: itemClass.value,
          config: __props.item
        }, {
          after: withCtx((_2, _push2, _parent2, _scopeId) => {
            if (_push2) {
              if (collapsible.value) {
                _push2(`<span class="${ssrRenderClass([unref(isOpen) ? "down" : "right", "arrow"])}"${_scopeId}></span>`);
              } else {
                _push2(`<!---->`);
              }
            } else {
              return [
                collapsible.value ? (openBlock(), createBlock("span", {
                  key: 0,
                  class: ["arrow", unref(isOpen) ? "down" : "right"]
                }, null, 2)) : createCommentVNode("", true)
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<p tabindex="0" class="${ssrRenderClass(itemClass.value)}">${ssrInterpolate(__props.item.text)} `);
        if (collapsible.value) {
          _push(`<span class="${ssrRenderClass([unref(isOpen) ? "down" : "right", "arrow"])}"></span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</p>`);
      }
      if ("children" in __props.item && __props.item.children.length) {
        _push(ssrRenderComponent(_sfc_main$5, null, {
          default: withCtx((_2, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<ul class="vp-sidebar-children" style="${ssrRenderStyle(unref(isOpen) ? null : { display: "none" })}"${_scopeId}><!--[-->`);
              ssrRenderList(__props.item.children, (child) => {
                _push2(ssrRenderComponent(_component_VPSidebarItem, {
                  key: `${__props.depth}${child.text}${child.link}`,
                  item: child,
                  depth: __props.depth + 1
                }, null, _parent2, _scopeId));
              });
              _push2(`<!--]--></ul>`);
            } else {
              return [
                withDirectives(createVNode("ul", { class: "vp-sidebar-children" }, [
                  (openBlock(true), createBlock(Fragment, null, renderList(__props.item.children, (child) => {
                    return openBlock(), createBlock(_component_VPSidebarItem, {
                      key: `${__props.depth}${child.text}${child.link}`,
                      item: child,
                      depth: __props.depth + 1
                    }, null, 8, ["item", "depth"]);
                  }), 128))
                ], 512), [
                  [vShow, unref(isOpen)]
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</li>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@vuepress/theme-default/lib/client/components/VPSidebarItem.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "VPSidebarItems",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const sidebarItems = useSidebarItems();
    onMounted(() => {
      watch(
        () => route.hash,
        (hash) => {
          const sidebar = document.querySelector(".vp-sidebar");
          if (!sidebar) return;
          const activeSidebarItem = document.querySelector(
            `.vp-sidebar .vp-sidebar-item.auto-link[href="${route.path}${hash}"]`
          );
          if (!activeSidebarItem) return;
          const { top: sidebarTop, height: sidebarHeight } = sidebar.getBoundingClientRect();
          const { top: activeSidebarItemTop, height: activeSidebarItemHeight } = activeSidebarItem.getBoundingClientRect();
          if (activeSidebarItemTop < sidebarTop) {
            activeSidebarItem.scrollIntoView(true);
          } else if (activeSidebarItemTop + activeSidebarItemHeight > sidebarTop + sidebarHeight) {
            activeSidebarItem.scrollIntoView(false);
          }
        }
      );
    });
    return (_ctx, _push, _parent, _attrs) => {
      if (unref(sidebarItems).length) {
        _push(`<ul${ssrRenderAttrs(mergeProps({ class: "vp-sidebar-items" }, _attrs))}><!--[-->`);
        ssrRenderList(unref(sidebarItems), (item) => {
          _push(ssrRenderComponent(_sfc_main$4, {
            key: `${item.text}${item.link}`,
            item
          }, null, _parent));
        });
        _push(`<!--]--></ul>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@vuepress/theme-default/lib/client/components/VPSidebarItems.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "VPSidebar",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<aside${ssrRenderAttrs(mergeProps({
        class: "vp-sidebar",
        "vp-sidebar": ""
      }, _attrs))}>`);
      _push(ssrRenderComponent(_sfc_main$f, null, null, _parent));
      ssrRenderSlot(_ctx.$slots, "top", {}, null, _push, _parent);
      _push(ssrRenderComponent(_sfc_main$3, null, null, _parent));
      ssrRenderSlot(_ctx.$slots, "bottom", {}, null, _push, _parent);
      _push(`</aside>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@vuepress/theme-default/lib/client/components/VPSidebar.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Layout",
  __ssrInlineRender: true,
  setup(__props) {
    const { frontmatter, page, themeLocale } = useData();
    const shouldShowNavbar = computed(
      () => frontmatter.value.navbar ?? themeLocale.value.navbar ?? true
    );
    const sidebarItems = useSidebarItems();
    const isSidebarOpen = ref(false);
    const toggleSidebar = (to) => {
      isSidebarOpen.value = typeof to === "boolean" ? to : !isSidebarOpen.value;
    };
    const enableExternalLinkIcon = computed(
      () => frontmatter.value.externalLinkIcon ?? themeLocale.value.externalLinkIcon ?? true
    );
    const containerClass = computed(() => [
      {
        "no-navbar": !shouldShowNavbar.value,
        "no-sidebar": !sidebarItems.value.length,
        "sidebar-open": isSidebarOpen.value,
        "external-link-icon": enableExternalLinkIcon.value
      },
      frontmatter.value.pageClass
    ]);
    onContentUpdated(() => {
      toggleSidebar(false);
    });
    const scrollPromise2 = useScrollPromise();
    const onBeforeEnter = scrollPromise2.resolve;
    const onBeforeLeave = scrollPromise2.pending;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["vp-theme-container", containerClass.value],
        "vp-container": ""
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "navbar", {}, () => {
        if (shouldShowNavbar.value) {
          _push(ssrRenderComponent(_sfc_main$a, { onToggleSidebar: toggleSidebar }, {
            before: withCtx((_2, _push2, _parent2, _scopeId) => {
              if (_push2) {
                ssrRenderSlot(_ctx.$slots, "navbar-before", {}, null, _push2, _parent2, _scopeId);
              } else {
                return [
                  renderSlot(_ctx.$slots, "navbar-before")
                ];
              }
            }),
            after: withCtx((_2, _push2, _parent2, _scopeId) => {
              if (_push2) {
                ssrRenderSlot(_ctx.$slots, "navbar-after", {}, null, _push2, _parent2, _scopeId);
              } else {
                return [
                  renderSlot(_ctx.$slots, "navbar-after")
                ];
              }
            }),
            _: 3
          }, _parent));
        } else {
          _push(`<!---->`);
        }
      }, _push, _parent);
      _push(`<div class="vp-sidebar-mask"></div>`);
      ssrRenderSlot(_ctx.$slots, "sidebar", {}, () => {
        _push(ssrRenderComponent(_sfc_main$2, null, {
          top: withCtx((_2, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "sidebar-top", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "sidebar-top")
              ];
            }
          }),
          bottom: withCtx((_2, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "sidebar-bottom", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "sidebar-bottom")
              ];
            }
          }),
          _: 3
        }, _parent));
      }, _push, _parent);
      ssrRenderSlot(_ctx.$slots, "page", {}, () => {
        _push(ssrRenderComponent(_sfc_main$n, {
          onBeforeEnter: unref(onBeforeEnter),
          onBeforeLeave: unref(onBeforeLeave)
        }, {
          default: withCtx((_2, _push2, _parent2, _scopeId) => {
            if (_push2) {
              if (unref(frontmatter).home) {
                _push2(ssrRenderComponent(_sfc_main$i, null, null, _parent2, _scopeId));
              } else {
                _push2(ssrRenderComponent(_sfc_main$6, {
                  key: unref(page).path
                }, {
                  top: withCtx((_22, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      ssrRenderSlot(_ctx.$slots, "page-top", {}, null, _push3, _parent3, _scopeId2);
                    } else {
                      return [
                        renderSlot(_ctx.$slots, "page-top")
                      ];
                    }
                  }),
                  "content-top": withCtx((_22, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      ssrRenderSlot(_ctx.$slots, "page-content-top", {}, null, _push3, _parent3, _scopeId2);
                    } else {
                      return [
                        renderSlot(_ctx.$slots, "page-content-top")
                      ];
                    }
                  }),
                  "content-bottom": withCtx((_22, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      ssrRenderSlot(_ctx.$slots, "page-content-bottom", {}, null, _push3, _parent3, _scopeId2);
                    } else {
                      return [
                        renderSlot(_ctx.$slots, "page-content-bottom")
                      ];
                    }
                  }),
                  bottom: withCtx((_22, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      ssrRenderSlot(_ctx.$slots, "page-bottom", {}, null, _push3, _parent3, _scopeId2);
                    } else {
                      return [
                        renderSlot(_ctx.$slots, "page-bottom")
                      ];
                    }
                  }),
                  _: 3
                }, _parent2, _scopeId));
              }
            } else {
              return [
                unref(frontmatter).home ? (openBlock(), createBlock(_sfc_main$i, { key: 0 })) : (openBlock(), createBlock(_sfc_main$6, {
                  key: unref(page).path
                }, {
                  top: withCtx(() => [
                    renderSlot(_ctx.$slots, "page-top")
                  ]),
                  "content-top": withCtx(() => [
                    renderSlot(_ctx.$slots, "page-content-top")
                  ]),
                  "content-bottom": withCtx(() => [
                    renderSlot(_ctx.$slots, "page-content-bottom")
                  ]),
                  bottom: withCtx(() => [
                    renderSlot(_ctx.$slots, "page-bottom")
                  ]),
                  _: 3
                }))
              ];
            }
          }),
          _: 3
        }, _parent));
      }, _push, _parent);
      _push(`</div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@vuepress/theme-default/lib/client/layouts/Layout.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "NotFound",
  __ssrInlineRender: true,
  setup(__props) {
    const { routeLocale, theme, themeLocale } = useData();
    const isMounted = useMounted();
    const expectedRouteLocale = computed(
      () => isMounted.value ? routeLocale.value : "/"
    );
    const expectedThemeLocale = computed(() => {
      if (isMounted.value) return themeLocale.value;
      const { locales: locales2, ...baseOptions } = theme.value;
      return {
        ...baseOptions,
        ...locales2?.["/"]
      };
    });
    const homeLink = computed(
      () => expectedThemeLocale.value.home ?? expectedRouteLocale.value
    );
    const homeText = computed(
      () => expectedThemeLocale.value.backToHome ?? "Back to home"
    );
    const messages = computed(
      () => expectedThemeLocale.value.notFound ?? ["Not Found"]
    );
    const notFoundMsg = computed(() => {
      if (isMounted.value) {
        return messages.value[Math.floor(Math.random() * messages.value.length)];
      }
      return messages.value[0];
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "vp-theme-container",
        "vp-container": ""
      }, _attrs))} data-v-33d3430e><main class="page" data-v-33d3430e><div vp-content data-v-33d3430e><h1 data-v-33d3430e>404</h1><blockquote data-v-33d3430e>${ssrInterpolate(notFoundMsg.value)}</blockquote>`);
      _push(ssrRenderComponent(unref(RouteLink), { to: homeLink.value }, {
        default: withCtx((_2, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(homeText.value)}`);
          } else {
            return [
              createTextVNode(toDisplayString(homeText.value), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></main></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@vuepress/theme-default/lib/client/layouts/NotFound.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const NotFound = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-33d3430e"]]);
const config = defineClientConfig({
  enhance({ app, router }) {
    if (!hasGlobalComponent("Badge"))
      app.component("Badge", _sfc_main$o);
    const scrollBehavior = router.options.scrollBehavior;
    router.options.scrollBehavior = async (...args) => {
      await useScrollPromise().wait();
      return scrollBehavior(...args);
    };
  },
  setup() {
    setupDarkMode();
    setupHeaders();
    setupSidebarItems();
  },
  layouts: {
    Layout: _sfc_main$1,
    NotFound
  }
});
const clientConfig10 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: config
}, Symbol.toStringTag, { value: "Module" }));
const clientConfigs = [
  clientConfig0,
  clientConfig1,
  clientConfig2,
  clientConfig3,
  clientConfig4,
  clientConfig5,
  clientConfig6,
  clientConfig7,
  clientConfig8,
  clientConfig9,
  clientConfig10
].map((m) => m.default).filter(Boolean);
const siteData$1 = JSON.parse('{"base":"/","lang":"zh-HK","title":"Nick Shek","description":"Nick Shek 的個人部落格","head":[],"locales":{}}');
var siteData = shallowRef(siteData$1);
var historyCreator = createMemoryHistory;
var createVueRouter = () => {
  const router = createRouter({
    // it might be an issue of vue-router that have to remove the ending slash
    history: historyCreator(removeEndingSlash("/")),
    routes: [
      {
        name: "vuepress-route",
        path: "/:catchAll(.*)",
        components: {}
      }
    ],
    scrollBehavior: (to, _from, savedPosition) => {
      if (savedPosition) return savedPosition;
      if (to.hash) return { el: to.hash };
      return { top: 0 };
    }
  });
  router.beforeResolve(async (to, from) => {
    if (to.path !== from.path || from === START_LOCATION) {
      const route = resolveRoute(to.fullPath);
      if (route.path !== to.fullPath) {
        return route.path;
      }
      const pageChunk = await route.loader();
      to.meta = {
        // attach route meta
        ...route.meta,
        // attach page chunk route meta
        _pageChunk: pageChunk
      };
    } else if (to.path === from.path) {
      to.meta = from.meta;
    }
  });
  return router;
};
var setupGlobalComponents = (app) => {
  app.component("ClientOnly", ClientOnly);
  app.component("Content", Content);
  app.component("RouteLink", RouteLink);
};
var setupGlobalComputed = (app, router, clientConfigs2) => {
  const routePath = computed(() => router.currentRoute.value.path);
  const pageChunk = customRef((track, trigger) => ({
    get() {
      track();
      return router.currentRoute.value.meta._pageChunk;
    },
    set(value) {
      router.currentRoute.value.meta._pageChunk = value;
      trigger();
    }
  }));
  const layouts = computed(() => resolvers.resolveLayouts(clientConfigs2));
  const routeLocale = computed(
    () => resolvers.resolveRouteLocale(siteData.value.locales, routePath.value)
  );
  const siteLocaleData = computed(
    () => resolvers.resolveSiteLocaleData(siteData.value, routeLocale.value)
  );
  const pageComponent = computed(() => pageChunk.value.comp);
  const pageData = computed(() => pageChunk.value.data);
  const pageFrontmatter = computed(() => pageData.value.frontmatter);
  const pageHeadTitle = computed(
    () => resolvers.resolvePageHeadTitle(pageData.value, siteLocaleData.value)
  );
  const pageHead = computed(
    () => resolvers.resolvePageHead(
      pageHeadTitle.value,
      pageFrontmatter.value,
      siteLocaleData.value
    )
  );
  const pageLang = computed(
    () => resolvers.resolvePageLang(pageData.value, siteLocaleData.value)
  );
  const pageLayout = computed(
    () => resolvers.resolvePageLayout(pageData.value, layouts.value)
  );
  const clientData = {
    layouts,
    pageData,
    pageComponent,
    pageFrontmatter,
    pageHead,
    pageHeadTitle,
    pageLang,
    pageLayout,
    redirects,
    routeLocale,
    routePath,
    routes,
    siteData,
    siteLocaleData,
    /* Aliases */
    frontmatter: pageFrontmatter,
    head: pageHead,
    headTitle: pageHeadTitle,
    lang: pageLang,
    page: pageData,
    site: siteData,
    siteLocale: siteLocaleData
  };
  app.provide(clientDataSymbol, clientData);
  Object.defineProperties(app.config.globalProperties, {
    $pageFrontmatter: { get: () => pageFrontmatter.value },
    $pageHead: { get: () => pageHead.value },
    $pageHeadTitle: { get: () => pageHeadTitle.value },
    $pageLang: { get: () => pageLang.value },
    $pageData: { get: () => pageData.value },
    $routeLocale: { get: () => routeLocale.value },
    $withBase: { get: () => withBase },
    /* Aliases */
    $frontmatter: { get: () => pageFrontmatter.value },
    $head: { get: () => pageHead.value },
    $headTitle: { get: () => pageHeadTitle.value },
    $lang: { get: () => pageLang.value },
    $page: { get: () => pageData.value },
    $site: { get: () => siteData.value },
    $siteLocale: { get: () => siteLocaleData.value }
  });
  return clientData;
};
var setupUpdateHead = () => {
  const head = usePageHead();
  const lang = usePageLang();
  {
    const ssrContext = useSSRContext();
    if (ssrContext) {
      ssrContext.head = head.value;
      ssrContext.lang = lang.value;
    }
    return;
  }
};
var appCreator = createSSRApp;
var createVueApp = async () => {
  const app = appCreator({
    name: "Vuepress",
    setup() {
      setupUpdateHead();
      for (const clientConfig of clientConfigs) {
        clientConfig.setup?.();
      }
      const clientRootComponents = clientConfigs.flatMap(
        ({ rootComponents = [] }) => rootComponents.map((component) => h(component))
      );
      const pageLayout = usePageLayout();
      return () => [h(pageLayout.value), clientRootComponents];
    }
  });
  const router = createVueRouter();
  setupGlobalComponents(app);
  setupGlobalComputed(app, router, clientConfigs);
  for (const clientConfig of clientConfigs) {
    await clientConfig.enhance?.({ app, router, siteData });
  }
  app.use(router);
  return {
    app,
    router
  };
};
export {
  _export_sfc as _,
  createVueApp
};
