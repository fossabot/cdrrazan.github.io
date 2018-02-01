---
layout: post
title: Integrate Facebook/Disqus/G+ Comments in Jekyll!
date: 2017-12-09 13:32:20 +0545
img: blog-comment.jpg
category: blog
tags: [integration]
---
Here's my current commenting platform in the blog where user can choose where to use the media and post their comment.

![Comment](/assets/img/comment.png)
<br><br>
For my jekyll blog, i have implemented all commenting system. User can either use facebook, disqus and google+. The perk of being all three and separate is that user can have freedom. For example, user who are already logged into the facebook can directly comment without registering name and email. On the other hand, disqus lets you comment in wider perspect without showing your social media. And there is google+, which i think it will be worthless to explain why google+ comments in blogs. So, without any delay, lets start the configuration. __This configuration works only for jekyll. Search on google for other platform.__

1.Follow [this facebooks docs](https://developers.facebook.com/docs/plugins/comments/) on how to setup the comment or using facebook comment platform.

2.Make an account [on disqus](disqus.com). Google+ won't need any other things, except make sure you are logged in.

3.Make a file named any. I will use <b>comment.html</b> which should be in the <b>includes</b> folder.

4.Then next step is to add the cofiguration for different system. Below is the list of all config. Make sure to change with your right one and under single file, even though the gist are differently listed.

<div id="gist"><script src="https://gist.github.com/cdrrazan/7184834c7168dfaba2ff9f991cd47eba.js"></script></div>

5.Now after saving the above configuration goto <b>```_layouts/post.html```</b> and add the following somewhere relevant.
``include comment.html`` <b>Include with { and  % .</b>


Once step 5 is finished, go check locally by running <b>```jekyll serve```.</b>

Note: You need to mention clearly the variables or parameters in the config.yml file for disqus.

This completes the commenting system in jekyll blog. Please comment if you have any problems.
