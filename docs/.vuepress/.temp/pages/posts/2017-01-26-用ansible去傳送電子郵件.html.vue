<template><div><p>{% raw %}
Ansible在前幾年是一個非常熱門的開源項目，以我理解ansible其中一個功能是可用來部署應用程式，但是我個人覺得部署應用程式暫時有 capistrano或deployer-php也非常足夠，同時部署應用程式於多個伺服器也勝任有餘，總比手動部署來得有效率。</p>
<p>因此比起用Ansible來去試一試寫一個部署scripts，我想使用Ansible試一試一個簡單的例子去在各server 執行一些command (e.g df -h)，再把結果以電子郵件傳送，這樣也可以感受一下Ansible的威力，雖然個人比起編寫yaml (yaml 內或text template 可以使用 jinja2 template language，一個類似Django template engine的template engine)，個人更喜愛寫Ruby 或 PHP scripts 。</p>
<p>首先在/etc/ansible/ansible.cfg 設定 host_key_checking = False，這樣會令測試ansible時簡單一點，ansible.cfg 的範例如下所示:</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code class="language-text"><span class="line">[defaults]</span>
<span class="line">host_key_checking = False</span>
<span class="line">log_path=/path/to/log</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>之後建立一個ansible playbook e.g site.yml</p>
<div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml"><pre v-pre><code class="language-yaml"><span class="line"><span class="token punctuation">-</span> <span class="token key atrule">hosts</span><span class="token punctuation">:</span> all<span class="token punctuation">:</span><span class="token tag">!local</span></span>
<span class="line">  <span class="token key atrule">tasks</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> ping all hosts</span>
<span class="line">    <span class="token key atrule">ping</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token key atrule">register</span><span class="token punctuation">:</span> ping_result</span>
<span class="line">    <span class="token key atrule">ignore_errors</span><span class="token punctuation">:</span> yes</span>
<span class="line"></span>
<span class="line">  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> check disk space for all hosts</span>
<span class="line">    <span class="token key atrule">command</span><span class="token punctuation">:</span> df <span class="token punctuation">-</span>h</span>
<span class="line">    <span class="token key atrule">register</span><span class="token punctuation">:</span> disk_result</span>
<span class="line">    <span class="token key atrule">ignore_errors</span><span class="token punctuation">:</span> yes</span>
<span class="line"></span>
<span class="line">  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> check high cpu usage process</span>
<span class="line">    <span class="token key atrule">shell</span><span class="token punctuation">:</span> ps <span class="token punctuation">-</span>eo pcpu<span class="token punctuation">,</span>user<span class="token punctuation">,</span>args <span class="token punctuation">|</span> sort <span class="token punctuation">-</span>r <span class="token punctuation">-</span>k1 <span class="token punctuation">|</span> head <span class="token punctuation">-</span>n5</span>
<span class="line">    <span class="token key atrule">register</span><span class="token punctuation">:</span> cpu_result</span>
<span class="line">    <span class="token key atrule">ignore_errors</span><span class="token punctuation">:</span> yes</span>
<span class="line"></span>
<span class="line">  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> run ifconfig</span>
<span class="line">    <span class="token key atrule">shell</span><span class="token punctuation">:</span> ifconfig</span>
<span class="line">    <span class="token key atrule">register</span><span class="token punctuation">:</span> ifconfig_result</span>
<span class="line">    <span class="token key atrule">ignore_errors</span><span class="token punctuation">:</span> yes</span>
<span class="line"></span>
<span class="line">  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> template email</span>
<span class="line">    <span class="token key atrule">local_action</span><span class="token punctuation">:</span> template src=./files/email_template.j2 dest='./tmp/<span class="token punctuation">{</span><span class="token punctuation">{</span> hostvars<span class="token punctuation">[</span>inventory_hostname<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token string">"inventory_hostname"</span><span class="token punctuation">]</span> <span class="token punctuation">}</span><span class="token punctuation">}</span>.txt'</span>
<span class="line"></span>
<span class="line"><span class="token punctuation">-</span> <span class="token key atrule">hosts</span><span class="token punctuation">:</span> local</span>
<span class="line">  <span class="token key atrule">tasks</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> create result email</span>
<span class="line">    <span class="token key atrule">template</span><span class="token punctuation">:</span> src=./files/email_summary_template.j2 dest=./tmp/email.txt</span>
<span class="line">    <span class="token key atrule">delegate_to</span><span class="token punctuation">:</span> localhost</span>
<span class="line"></span>
<span class="line">  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> send email result</span>
<span class="line">    <span class="token key atrule">local_action</span><span class="token punctuation">:</span> mail host='<span class="token punctuation">{</span><span class="token punctuation">{</span> email_host <span class="token punctuation">}</span><span class="token punctuation">}</span>' port='<span class="token punctuation">{</span><span class="token punctuation">{</span> email_port <span class="token punctuation">}</span><span class="token punctuation">}</span>' to='<span class="token punctuation">{</span><span class="token punctuation">{</span> email_to <span class="token punctuation">}</span><span class="token punctuation">}</span>' username='<span class="token punctuation">{</span><span class="token punctuation">{</span> email_username <span class="token punctuation">}</span><span class="token punctuation">}</span>' password='<span class="token punctuation">{</span><span class="token punctuation">{</span> email_password <span class="token punctuation">}</span><span class="token punctuation">}</span>' subject='Report' body='<span class="token punctuation">{</span><span class="token punctuation">{</span> lookup("file"<span class="token punctuation">,</span> "./tmp/email.txt") <span class="token punctuation">}</span><span class="token punctuation">}</span>' from='<span class="token punctuation">{</span><span class="token punctuation">{</span> email_from <span class="token punctuation">}</span><span class="token punctuation">}</span>' charset='UTF<span class="token punctuation">-</span>8' subtype='html'</span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以上的yaml script的流程好簡單，純粹用ping + shell module在不同的server 去執行不同的指令，之後用register 去把執行結果紀錄至指定的variable。因為萬一執行時出現錯誤，我們還是希望ansible playbook可繼續執行，因此設定ignore_errors = true即可。</p>
<p>下一步便是把各servers的執行結果變為一個template，因為這個執行結果在local machine的下一個tasks是需要的，所以使用了local_action</p>
<p>以下便用 email_template.j2 的原始碼:</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code class="language-text"><span class="line">{% if ping_result is defined %}</span>
<span class="line">&lt;h2>Ping Command Result&lt;/h2></span>
<span class="line">-----------------------------------&lt;br/></span>
<span class="line">{{ ping_result | to_nice_yaml | replace("\n","&lt;br/>") }}</span>
<span class="line">&lt;br/></span>
<span class="line">{% endif %}</span>
<span class="line"></span>
<span class="line">{% if disk_result is defined %}</span>
<span class="line">&lt;h2>Disk Command Result&lt;/h2></span>
<span class="line">-----------------------------------&lt;br/></span>
<span class="line">{{ disk_result | to_nice_yaml | replace("\n","&lt;br/>") }}</span>
<span class="line">&lt;br/></span>
<span class="line">{% endif %}</span>
<span class="line"></span>
<span class="line">{% if cpu_result is defined %}</span>
<span class="line">&lt;h2>Command result for ps -eo pcpu,user,args | sort -r -k1 | head -n5&lt;/h2></span>
<span class="line">-----------------------------------&lt;br/></span>
<span class="line">{{ cpu_result | to_nice_yaml | replace("\n","&lt;br/>") }}</span>
<span class="line">{% endif %}</span>
<span class="line">&lt;br/></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>執行結果是一個python 的 dict，為了確保所有的內容都被列印出來，純粹用to_nice_yaml 列印出來即可。
一下步便是把每一個inventory的執行結果整理至一個email template，然後寄出。email_summary_template.j2的內容如下所示:</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code class="language-text"><span class="line">{% for host in groups['all'] %}</span>
<span class="line">{% if host != 'localhost' %}</span>
<span class="line">&lt;h1>Result for</span>
<span class="line">{{ hostvars[host]['inventory_hostname'] }}</span>
<span class="line">&lt;/h1></span>
<span class="line">&lt;b>==================================================================&lt;/b>&lt;br/></span>
<span class="line">{{lookup("file", "./tmp/" + hostvars[host]["inventory_hostname"] + ".txt")}}</span>
<span class="line">{% endif %}</span>
<span class="line">{% endfor %}</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>請注意，send email result的這個tasks全部都使用了variable，避免直接寫死任何容易更改設定在 playboook內，這一個動作明顯不符合Ansible本身的哲學，variable可以放在group_vars/all :</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code class="language-text"><span class="line">---</span>
<span class="line">email_host: &lt;email_host></span>
<span class="line">email_port: &lt;email_port></span>
<span class="line">email_to: &lt;email_to></span>
<span class="line">email_username: &lt;email_username></span>
<span class="line">email_password: &lt;email_password></span>
<span class="line">email_from: &lt;email_from></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>ansible的建議資料夾結構請參考 <a href="http://docs.ansible.com/ansible/playbooks_best_practices.html#directory-layout" target="_blank" rel="noopener noreferrer">http://docs.ansible.com/ansible/playbooks_best_practices.html#directory-layout</a></p>
<p>最後我們還是編寫hosts 檔案，以下是hosts的檔案範例，建議先設定ssh key來做認證，小心保管好private key + public key，避免把密碼寫在hosts file</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code class="language-text"><span class="line">[local]</span>
<span class="line">localhost ansible_connection=local</span>
<span class="line"></span>
<span class="line">[servers]</span>
<span class="line">&lt;example1.com> ansible_user=&lt;example_user1> ansible_port=&lt;example_port1> ansible_ssh_private_key_file=.ssh/id_rsa</span>
<span class="line">&lt;example1.com> ansible_user=&lt;example_user2> ansible_port=&lt;example_port2> ansible_ssh_private_key_file=.ssh/id_rsa</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>設定方法可參考 <a href="https://blog.longwin.com.tw/2005/12/ssh_keygen_no_passwd/" target="_blank" rel="noopener noreferrer">https://blog.longwin.com.tw/2005/12/ssh_keygen_no_passwd/</a></p>
<p>執行ansible playbook的方法相當簡單，如下所示:</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line">ansible-playbook <span class="token parameter variable">-i</span> hosts site.yml</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>這樣我們便完成了一個好簡單的ansible playbook，這個playbook也有相當多的改進的地方，例如我們都把tasks 都放在site.yml，現在還好，沒有太多tasks。但沒有按roles去把不同的tasks放入去長遠都會有維護上的問題，site.yml愈簡單愈容易維護，另外一個可以改進的地方是lookup時的錯誤處理。</p>
<p>想知道這個project的檔案結構，可參考 <a href="https://github.com/nickshek/ansible_mail_example" target="_blank" rel="noopener noreferrer">https://github.com/nickshek/ansible_mail_example</a>
{% endraw %}</p>
</div></template>


