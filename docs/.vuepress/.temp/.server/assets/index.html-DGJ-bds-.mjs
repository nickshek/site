import { resolveComponent, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "../app.DmpE4U7o.mjs";
import "@vuepress/shared";
import "vue-router";
import "@vueuse/core";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_RouteLink = resolveComponent("RouteLink");
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="文章列表" tabindex="-1"><a class="header-anchor" href="#文章列表"><span>文章列表</span></a></h1><h2 id="所有文章" tabindex="-1"><a class="header-anchor" href="#所有文章"><span>所有文章</span></a></h2><h3 id="_2018" tabindex="-1"><a class="header-anchor" href="#_2018"><span>2018</span></a></h3><ul><li>`);
  _push(ssrRenderComponent(_component_RouteLink, { to: "/posts/2018-10-15-%E5%9C%A8Centos7%E4%B8%8B%E5%AE%89%E8%A3%9DChrome.html" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`在Centos7下安裝Chrome`);
      } else {
        return [
          createTextVNode("在Centos7下安裝Chrome")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(` - 2018-10-15</li><li>[在Cento 7下使用Cisco AnyConnect Secure Mobility Client](./2018-10-14-在Cento 7下使用Cisco AnyConnect Secure Mobility Client.md) - 2018-10-14</li></ul><h3 id="_2017" tabindex="-1"><a class="header-anchor" href="#_2017"><span>2017</span></a></h3><ul><li>`);
  _push(ssrRenderComponent(_component_RouteLink, { to: "/posts/2017-09-24-%E5%B7%AE%E4%B8%8D%E5%A4%9A%E5%8D%8A%E5%B9%B4%E6%B2%92%E6%9C%89%E6%9B%B4%E6%96%B0blog%E4%BA%86.html" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`差不多半年沒有更新blog了`);
      } else {
        return [
          createTextVNode("差不多半年沒有更新blog了")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(` - 2017-09-24</li><li>`);
  _push(ssrRenderComponent(_component_RouteLink, { to: "/posts/2017-02-06-%E5%AD%B8%E7%BF%92Latex.html" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`學習Latex`);
      } else {
        return [
          createTextVNode("學習Latex")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(` - 2017-02-06 <code>Latex</code></li><li>`);
  _push(ssrRenderComponent(_component_RouteLink, { to: "/posts/2017-01-26-%E7%94%A8ansible%E5%8E%BB%E5%82%B3%E9%80%81%E9%9B%BB%E5%AD%90%E9%83%B5%E4%BB%B6.html" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`用ansible去傳送電子郵件`);
      } else {
        return [
          createTextVNode("用ansible去傳送電子郵件")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(` - 2017-01-26 <code>Ansible</code></li><li>[移除及暫停所有Docker container 指令](./2017-01-12-移除及暫停所有Docker container 指令.md) - 2017-01-12 <code>Docker</code></li></ul><h3 id="_2016" tabindex="-1"><a class="header-anchor" href="#_2016"><span>2016</span></a></h3><ul><li>[執行Laravel PHPUnit 時出現&quot;Maximum function nesting level of &#39;100&#39; reached, aborting!&quot;](./2016-07-10-執行Laravel PHPUnit 時出現&quot;Maximum function nesting level of &#39;100&#39; reached, aborting!&quot;.md) - 2016-07-10 <code>Laravel 5</code></li><li>[docker build image 時出現 no space left on device](./2016-07-09-docker build image 時出現 no space left on device.md) - 2016-07-09 <code>docker</code></li><li>[安裝Ubuntu Server至舊Notebook注意事項](./2016-06-28-安裝Ubuntu Server至舊Notebook注意事項.md) - 2016-06-28 <code>Ubuntu</code></li><li>[使用sftp時出現&quot;connection reset by peer connection closed&quot;](./2016-06-24-使用sftp時出現&quot;connection reset by peer connection closed&quot;.md) - 2016-06-24 <code>linux</code></li><li>[使用Apache設定Alias時出現403 Foridden](./2016-04-16-使用Apache設定Alias時出現403 Foridden.md) - 2016-04-16 <code>apache</code></li></ul><h3 id="_2015" tabindex="-1"><a class="header-anchor" href="#_2015"><span>2015</span></a></h3><ul><li>[Failed to listen on localhost:8000 (reason: Address already in use)](./2015-11-15-Failed to listen on localhost:8000 (reason: Address already in use).md) - 2015-11-15 <code>php</code></li><li>[Socket.io 1.3.5 cdn 同源問題](./2015-04-15-Socket.io 1.3.5 cdn 同源問題.md) - 2015-04-15 <code>socket.io</code></li><li>[如何令git repo 連接己經存在的heroku app?](./2015-04-05-如何令git repo 連接己經存在的heroku app.md) - 2015-04-05 <code>heroku</code></li><li>[Missing <code>secret_key_base</code> for &#39;production&#39; environment, set this value in <code>config/secrets.yml</code>](./2015-03-14-Missing <code>secret_key_base</code> for &#39;production&#39; environment.md) - 2015-03-14 <code>rails</code></li><li>`);
  _push(ssrRenderComponent(_component_RouteLink, { to: "/posts/2015-03-02-%E5%A6%82%E4%BD%95%E4%BB%A4%E4%BD%A0%E4%BD%BF%E7%94%A8SSH%E6%99%82%E6%9B%B4%E5%AE%89%E5%85%A8.html" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`如何令你使用SSH時更安全?`);
      } else {
        return [
          createTextVNode("如何令你使用SSH時更安全?")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(` - 2015-03-02 <code>linux</code></li><li>[更新git branch所有舊有的電子郵件地址](./2015-02-24-更新git branch所有舊有的電子郵件地址.md) - 2015-02-24 <code>git</code></li><li>[git://github.com/reactjs/react-rails.git (at master) is not yet checked out. Run <code>bundle install</code> first.](./2015-01-26-react-rails.git (at master) is not yet checked out. Run <code>bundle install</code> first.md) - 2015-01-26 <code>rails</code></li><li>[debug.py =&gt; IndexError: list index out of range](./2015-01-22-debug.py =&gt; IndexError: list index out of range.md) - 2015-01-22 <code>django</code></li><li>[從http://fontello.com/下載font icon,及使用Nokogiri製作一張font icon class 的名單](./2015-01-20-從fontello下載font icon,及使用Nokogiri製作一張font icon class 的名單.md) - 2015-01-20 <code>ruby</code></li><li>[TypeError: deepestAncestor is undefined](./2015-01-18-TypeError: deepestAncestor is undefined.md) - 2015-01-18 <code>react.js</code></li><li>`);
  _push(ssrRenderComponent(_component_RouteLink, { to: "/posts/2015-01-17-redis%E5%9C%A8socket.io%E6%8E%A5%E6%94%B6%E5%A4%9A%E6%AC%A1%E9%87%8D%E8%A6%86%E4%BF%A1%E6%81%AF%E5%95%8F%E9%A1%8C.html" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`redis在socket.io接收多次重覆信息問題`);
      } else {
        return [
          createTextVNode("redis在socket.io接收多次重覆信息問題")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(` - 2015-01-17 <code>node.js</code></li><li>`);
  _push(ssrRenderComponent(_component_RouteLink, { to: "/posts/2015-01-16-%E5%B0%87package.json%E5%85%A5%E9%9D%A2%E6%89%80%E6%9C%89%E7%9A%84dependencies%E6%9B%B4%E6%96%B0%E8%87%B3%E6%9C%80%E6%96%B0%E7%89%88%E6%9C%AC.html" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`將package.json入面所有的dependencies更新至最新版本`);
      } else {
        return [
          createTextVNode("將package.json入面所有的dependencies更新至最新版本")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(` - 2015-01-16 <code>node.js</code></li><li>[在Linux terminal列輸出己整理的JSON](./2015-01-11-在Linux terminal列輸出己整理的JSON.md) - 2015-01-11 <code>linux</code></li></ul><h3 id="_2014" tabindex="-1"><a class="header-anchor" href="#_2014"><span>2014</span></a></h3><ul><li>[利用regular expression判斷URL是否為YouTube URL，且return youtube video ID](./2014-12-30-利用regular expression判斷URL是否為YouTube URL，且return youtube video ID.md) - 2014-12-30 <code>python</code></li><li>[Friendly ID中文問題](./2014-12-20-Friendly ID中文問題.md) - 2014-12-20 <code>rails</code></li><li>[把現有的project folder變為git repository](./2014-12-15-把現有的project folder變為git repository.md) - 2014-12-15 <code>git</code></li><li>[HKTV 選戰 插曲](./2014-12-10-HKTV 選戰 插曲.md) - 2014-12-10 <code>HKTV</code></li><li>[令你的youtube embed code變為responsive](./2014-12-10-令你的youtube embed code變為responsive.md) - 2014-12-10 <code>css</code></li><li>`);
  _push(ssrRenderComponent(_component_RouteLink, { to: "/posts/2014-12-07-%E5%9C%A8ubuntu%E7%A7%BB%E9%99%A4%E5%9C%96%E7%89%87%E7%9A%84metadata.html" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`在ubuntu移除圖片的metadata`);
      } else {
        return [
          createTextVNode("在ubuntu移除圖片的metadata")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(` - 2014-12-07 <code>ubuntu</code></li><li>[在rails migration改變column type](./2014-11-26-在rails migration改變column type.md) - 2014-11-26 <code>rails</code></li><li>`);
  _push(ssrRenderComponent(_component_RouteLink, { to: "/posts/2014-11-13-%E4%BD%BF%E7%94%A8ubuntu%E5%9C%A8localhost%E5%BB%BA%E7%AB%8Bsubdomain.html" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`使用ubuntu在localhost建立subdomain`);
      } else {
        return [
          createTextVNode("使用ubuntu在localhost建立subdomain")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(` - 2014-11-13 <code>apache</code></li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vuepress/.temp/pages/posts/index.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
const data = JSON.parse('{"path":"/posts/","title":"文章列表","lang":"zh-HK","frontmatter":{},"git":{},"filePathRelative":"posts/README.md"}');
export {
  index_html as comp,
  data
};
