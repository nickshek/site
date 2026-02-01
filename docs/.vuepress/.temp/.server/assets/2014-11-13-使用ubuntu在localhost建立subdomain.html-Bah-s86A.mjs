import { ssrRenderAttrs, ssrRenderStyle } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "../app.DmpE4U7o.mjs";
import "@vuepress/shared";
import "vue-router";
import "@vueuse/core";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>有好多時候，我們需要在localhost測試多個project無論是(php,Ruby,Python的項目)。在localhost建立subdomain可以讓我們在同一主機測試不同項目:</p><p>php項目1的URL : http://localhost/project1/</p><p>php項目2的URL : http://localhost/project2/</p><p>我們的最終目的是改變以上的項目的URL為:</p><p>php項目1的URL : http://project1.localhost/</p><p>php項目2的URL : http://project2.localhost/</p><p>1.首先修改/etc/hosts:</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line"><span class="token function">sudo</span> <span class="token function">nano</span> /etc/hosts</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="${ssrRenderStyle({ "counter-reset": "line-number 0" })}"><div class="line-number"></div></div></div><p>在/etc/hosts加入以下原始碼:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">127.0.0.1       project1.localhost</span>
<span class="line">127.0.0.1       project2.localhost</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="${ssrRenderStyle({ "counter-reset": "line-number 0" })}"><div class="line-number"></div><div class="line-number"></div></div></div><p>2.在/etc/apache2/sites-available/新增project1和project2的configure file:</p><p>project1.conf</p><div class="language-apache line-numbers-mode" data-highlighter="prismjs" data-ext="apache"><pre><code class="language-apache"><span class="line">&lt;VirtualHost *:80&gt;</span>
<span class="line">  # The ServerName directive sets the request scheme, hostname and port that</span>
<span class="line">  # the server uses to identify itself. This is used when creating</span>
<span class="line">  # redirection URLs. In the context of virtual hosts, the ServerName</span>
<span class="line">  # specifies what hostname must appear in the request&#39;s Host: header to</span>
<span class="line">  # match this virtual host. For the default virtual host (this file) this</span>
<span class="line">  # value is not decisive as it is used as a last resort host regardless.</span>
<span class="line">  # However, you must set it for any further virtual host explicitly.</span>
<span class="line">  ServerName project1.localhost</span>
<span class="line"></span>
<span class="line">  ServerAdmin webmaster@localhost</span>
<span class="line">  DocumentRoot /var/www/html/project1</span>
<span class="line"></span>
<span class="line">  # Available loglevels: trace8, ..., trace1, debug, info, notice, warn,</span>
<span class="line">  # error, crit, alert, emerg.</span>
<span class="line">  # It is also possible to configure the loglevel for particular</span>
<span class="line">  # modules, e.g.</span>
<span class="line">  #LogLevel info ssl:warn</span>
<span class="line"></span>
<span class="line">  ErrorLog \${APACHE_LOG_DIR}/error.log</span>
<span class="line">  CustomLog \${APACHE_LOG_DIR}/access.log combined</span>
<span class="line"></span>
<span class="line">  # For most configuration files from conf-available/, which are</span>
<span class="line">  # enabled or disabled at a global level, it is possible to</span>
<span class="line">  # include a line for only one particular virtual host. For example the</span>
<span class="line">  # following line enables the CGI configuration for this host only</span>
<span class="line">  # after it has been globally disabled with &quot;a2disconf&quot;.</span>
<span class="line">  #Include conf-available/serve-cgi-bin.conf</span>
<span class="line">&lt;/VirtualHost&gt;</span>
<span class="line"></span>
<span class="line"># vim: syntax=apache ts=4 sw=4 sts=4 sr noet</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="${ssrRenderStyle({ "counter-reset": "line-number 0" })}"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>project2.conf</p><div class="language-apache line-numbers-mode" data-highlighter="prismjs" data-ext="apache"><pre><code class="language-apache"><span class="line">&lt;VirtualHost *:80&gt;</span>
<span class="line">    # The ServerName directive sets the request scheme, hostname and port that</span>
<span class="line">    # the server uses to identify itself. This is used when creating</span>
<span class="line">    # redirection URLs. In the context of virtual hosts, the ServerName</span>
<span class="line">    # specifies what hostname must appear in the request&#39;s Host: header to</span>
<span class="line">    # match this virtual host. For the default virtual host (this file) this</span>
<span class="line">    # value is not decisive as it is used as a last resort host regardless.</span>
<span class="line">    # However, you must set it for any further virtual host explicitly.</span>
<span class="line">    ServerName project2.localhost</span>
<span class="line"></span>
<span class="line">    ServerAdmin webmaster@localhost</span>
<span class="line">    DocumentRoot /var/www/html/project2</span>
<span class="line"></span>
<span class="line">    # Available loglevels: trace8, ..., trace1, debug, info, notice, warn,</span>
<span class="line">    # error, crit, alert, emerg.</span>
<span class="line">    # It is also possible to configure the loglevel for particular</span>
<span class="line">    # modules, e.g.</span>
<span class="line">    #LogLevel info ssl:warn</span>
<span class="line"></span>
<span class="line">    ErrorLog \${APACHE_LOG_DIR}/error.log</span>
<span class="line">    CustomLog \${APACHE_LOG_DIR}/access.log combined</span>
<span class="line"></span>
<span class="line">    # For most configuration files from conf-available/, which are</span>
<span class="line">    # enabled or disabled at a global level, it is possible to</span>
<span class="line">    # include a line for only one particular virtual host. For example the</span>
<span class="line">    # following line enables the CGI configuration for this host only</span>
<span class="line">    # after it has been globally disabled with &quot;a2disconf&quot;.</span>
<span class="line">    #Include conf-available/serve-cgi-bin.conf</span>
<span class="line">&lt;/VirtualHost&gt;</span>
<span class="line"></span>
<span class="line"># vim: syntax=apache ts=4 sw=4 sts=4 sr noet</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="${ssrRenderStyle({ "counter-reset": "line-number 0" })}"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3.用a2ensite令該二個virtual hosts的設定生效:</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line"><span class="token function">sudo</span> a2ensite /etc/apache2/sites-available/project1.conf</span>
<span class="line"><span class="token function">sudo</span> a2ensite /etc/apache2/sites-available/project2.conf</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="${ssrRenderStyle({ "counter-reset": "line-number 0" })}"><div class="line-number"></div><div class="line-number"></div></div></div><p>4.輸入 <code>sudo service apache2 restart</code> 重新啟動apache2</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vuepress/.temp/pages/posts/2014-11-13-使用ubuntu在localhost建立subdomain.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _20141113___ubuntu_localhost__subdomain_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
const data = JSON.parse('{"path":"/posts/2014-11-13-%E4%BD%BF%E7%94%A8ubuntu%E5%9C%A8localhost%E5%BB%BA%E7%AB%8Bsubdomain.html","title":"使用ubuntu在localhost建立subdomain","lang":"zh-HK","frontmatter":{"title":"使用ubuntu在localhost建立subdomain","date":"2014-11-13T00:00:00.000Z","tags":["apache"]},"git":{},"filePathRelative":"posts/2014-11-13-使用ubuntu在localhost建立subdomain.md"}');
export {
  _20141113___ubuntu_localhost__subdomain_html as comp,
  data
};
