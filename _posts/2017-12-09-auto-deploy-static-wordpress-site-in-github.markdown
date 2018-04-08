---
layout: post
title: Auto deploy your static Wordpress site in github!
date: 2017-12-09 13:32:20 +0545
img: wpgithub.jpg
category: tech
tags: [wordpress]
---
Wordpress sites are really great for customizing and making our site beautifull. No matter what other platform rise, wordpress always seems to take advantage of itself being easier to both customizing and hosting. However if our website were static, then we don't have to even spend dime on hosting because as a developer we have one great solution here **GITHUB**.

Github is one of the most easiest site to host our static HTML/Jekyll sites. But this doesn't mean we can't use it for wordpress. In fact, we can use the github to host our static wordpress site. For this we need our site to be converted to HTML. In case of wordpress, the best solution is to use the plugin such as __Simply Static.__ Once your converted site is downloaded in local storage, you can use normal method to deploy your website in github.

But what if your site being static was updated once in fortnight or as per your wish?

Well just for this purpose, i wrote the following script to make the task easier.

**(Requirements: For this script, it was assumed that the working directory was github repo)**

<div id="gist"><script src="https://gist.github.com/cdrrazan/30e7033c65514943014807129b034ab8.js"></script>
</div>

As i am ubuntu user, this is intended for all ubuntu user. I hope to extend for other distros in near future. You can use other unzipping services by replacing unzip to your favorite app. You can also find <a href="https://github.com/cdrrazan/script-ly" target="_blank">more like this and other bash snippets and scripts.
