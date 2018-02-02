---
layout: post
title: How to get HTTPS for your blog or website?
date: 2017-12-25 13:32:20 +0545
img: cloudflare.png
category: tech
tags: [SSL]
---

SSL is a “cryptographic protocol” which protects and secures data being transferred through a computer network; this transfer of information occurs between a website or online application and a visitor. So, if you are running any blogging to professional site, enabling SSL might make generate more traffic than with no SSL.

Generally SSL certificates are costly depending upon the type from just Green Lock to showing on your company name like Cloudflare. In this blog, we are going to achieve just green Lock[ SSL certificate normally would cost more than $10]. For this purpose, make sure you have proper access to the Control Panel of the Domain name.

There are some sites like letsencrypt.org that even offers free SSL. But here in this blog we are going to use Cloudflare as already mentioned. Cloudflare in its free plan allows you to have SSL on your site. From SSL off to Full restrict option, cloudflare allows to have such features for free.


Process to activate SSL for free!


> *1. Sign Up for the cloudflare.*


> *2. Goto add site option and enter your site details. Once the scan process is finished, click on continue.*

<img alt="starting with cloudflare" border="0" data-original-height="623" data-original-width="1007" src="https://1.bp.blogspot.com/-UTIpcjJ3n6Y/WVotoEND61I/AAAAAAAABUo/0wZANVTpZOo5czn8OQ_kRMx74tETWGorQCEwYBhgL/s1600/demo.png" title="" />

> *3. A list of all the DNS records found is displayed, including your subdomains. Also choose to select the plan. Just click on Free and continue.*

<img alt="DNS records scanning" border="0" data-original-height="605" data-original-width="958" src="https://2.bp.blogspot.com/-3hDYEF4X54U/WVotoN-a6FI/AAAAAAAABUk/Jk9FBPRuv8U83Wxn5GwqK0K4BHnej37vgCEwYBhgL/s1600/demo2.png" title="" />

> *4. It will ask you to update the nameservers. Every person is assigned 2  different nameserver which should be something like ---.ns.cloudflare.com.*


<img border="0" data-original-height="278" data-original-width="958" src="https://4.bp.blogspot.com/-tH1rfLUgxNk/WVotoLeA28I/AAAAAAAABUs/6brP-7l7bzkNcIc6CmOMU3z_cpfdd2P6wCEwYBhgL/s1600/demo3.png" />

Goto your domain registrar from where you have purchased domain. Login and Change the nameserver as assigned from cloudflare. And head back to the Cloudflare.

> *5. Once the previous step is finished, just click on check Nameservers. Cloudflare starts to check on the nameservers. Usually this step takes <10 minutes.*


Once the nameservers are verified, you will see the green arrow. or status active along with type of plan.

<img src="https://1.bp.blogspot.com/-xANJAuz27m8/WVoto2Pbs6I/AAAAAAAABU0/sjwTTHkxt0gJMfK0RL9a-63lKiTA9jqcACEwYBhgL/s1600/status-active.png" />

> *6. After the successful verification go to Crypto option and the first one is the SSL you should see. Then select the Flexible to Full and Full restrict option as per your requirement.*

<img src="https://3.bp.blogspot.com/-TvZqxdbD9e8/WVo2t9LCp6I/AAAAAAAABVM/USZlXcxb3moi3vdbmsnA9J1JeJAU1e6xgCLcBGAs/s1600/ssl1.png"/>


#### Congratulation, you have https enabled in your site/blog.

But wait, we are not yet finished.

Depending upon the web hosting, your site may not always be redirected to https. For example, a user may enter example.com which may be served to http://example.com but we want to redirect to https://example.com. You can also use .htaccess rules via the hosting panel but the easy way is using that same thing from cloudflare if you are already member here.


> *1. So go to the Cloudflare panel and Click on the page rules. In free plan, CF allows to have 3 page rules.*

<img src="https://4.bp.blogspot.com/-x1ODOKYNQhM/WVo23Fx8KAI/AAAAAAAABVQ/BKaOJKtbz1cGIxMwx1AK4dspkYUGbxbdQCLcBGAs/s1600/prules.png" />

> *2. Go to Create page rules and you can have the following option.*

<img src="https://1.bp.blogspot.com/-rwR0G6SKZhw/WVo2-qPTf3I/AAAAAAAABVU/Lb_p7lJEoT4bV3OUXMdUYFK_q4D-SVL6ACLcBGAs/s1600/always_use_https.png" />


Enter the url in exactly same format [replace example.com] and choose always https as shown in the image. Hit save and deploy.


#### Why http://*.example.com/*?

Because, it will also u to have https enabled in every subdomain and every links in the blog or website.[* is wildcard ]


Thats' all for today. Hope it helps. If you have any queries, please comment below.


**[Image Credits: Cloudflare blog.]**
