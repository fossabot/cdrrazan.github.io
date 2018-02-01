---
layout: post
title: List github repo in your blog using js/jQuery?
date: 2017-04-15 13:32:20 +0545
img: github.jpg
category: tech
tags: [github]
---

GitHub is a web-based hosting service for software development projects that use the Git version control system. Our projects are stored in form of repositories which are nothing more than directory or folder as we speak. Sometimes we want to list them in our private blog or websites. But right now, github doesn't seem to offer this service. But this doesn't mean there's not any other way.

Steps to list the Github repos

Getting into the code, open up the file where you want to list the repo. Note that this is not the automatic process.

Insert the following code anywhere you would like to display the repo.

>  &lt;div class="github-widget" data-repo="githubuser/githubrepo"&gt;&lt;/div&gt;

Now replace the githubuser with your user name and githubrepo with the name of the github repository. For listing more than one repo, replace the same code with different github repo name.

Then include the JavaScript file somewhere after you've include jQuery:
>  &lt;script type="text/javascript" src="jquery.githubRepoWidget.min.js"&gt;&lt;/script&gt;

Here is&nbsp; the link to the <a href="https://github.com/cdrrazan/GitHub-jQuery-Repo-Widget/blob/master/jquery.githubRepoWidget.min.js" target="_blank">jQuery for listing Github projects</a>

All of the styling is included and image assets are pulled from GitHub. Here is the sample image  for listing one of my github repo.
<span style="font-family: inherit;"><span style="font-size: large;"><a href="https://4.bp.blogspot.com/-sHI9tadJH5Q/WYMVrx60TdI/AAAAAAAAAyo/LnEfLr-pp88bqLM146SCEOLlyw9JM1a6wCLcBGAs/s1600/Scrot.png" imageanchor="1" style="margin-left: 1em; margin-right: 1em;"><img alt="github-repo" border="0" data-original-height="157" data-original-width="843" src="https://4.bp.blogspot.com/-sHI9tadJH5Q/WYMVrx60TdI/AAAAAAAAAyo/LnEfLr-pp88bqLM146SCEOLlyw9JM1a6wCLcBGAs/s1600/Scrot.png" title="" /></a></span>

Demo for another one repository
<iframe src="/src/github/single-repo.html" width="100%" height="160px"></iframe><br />
<br />
You can also directly see the latest commit date and even download the zip file. The only downside is API limit rate exceeds if the widgets is refreshed or called for more than 60 times in an hour. To avoid rate limit exceed, visit github docs.
