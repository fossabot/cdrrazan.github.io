---
layout: post
title: Basic GIT tutorials for Windows (Beginners)
date: 2017-05-14 13:32:20 +0545
img: github.jpg # Add image post (optional)
category: tech
tags: [git]
---

Before learning GIT we need to know what VC actually is.

Version control is a system that records changes to a file or set of files over time so that you can recall specific versions later. (Source: http://git-scm.com) So there are a lot of tools that actually help in VC but in this topic we will be covering with the basic topic to use, configure git and use github.

Specifically, i'm covering this topic in windows using windows 7. I assume you already have installed git for your system. Don't worry even though you haven't, head over git-downloads and choose the OS you are running and install. It should go easy as there is nothing to mess about.

> ### Download link: <a href="https://git-scm.com/download/" target="_blank">*GIT Downloads*</a>

Both GIT GUI and GIT BASH are installed in case of the windows. Fire up the GIT BASH. You will be prompted with the black terminal like screen. Most of the linux commands work here but in case of the windows user you need to know the basic make new directory, file etc which are pretty simple. So, before beginning, make sure git is clearly installed and you know basic commands of the terminal as said above.


Step by step instruction:


> *1. GIT version can be checked by git --version. The manual page on git can be referred to man git but it wont work on windows.*

~/> ```git-win7```

If you do this in Linux, you will get the following result.
<a href="https://1.bp.blogspot.com/-AIN9MH-85jc/V995lMcRymI/AAAAAAAABL8/ExZ04MqhyjkCY7YzUKPRd7mSBJjv5L1nwCEw/s1600/man%2Bgit.png" imageanchor="1"><img alt="linux-git" border="0" src="https://i1.wp.com/1.bp.blogspot.com/-AIN9MH-85jc/V995lMcRymI/AAAAAAAABL8/ExZ04MqhyjkCY7YzUKPRd7mSBJjv5L1nwCEw/s640/man%2Bgit.png?ssl=1" title="linux-git" /></a>

> *2. Make an account on GITHUB. Sign up process is pretty easy.*

> *3. Now we are going to make an empty directory and push the file to the remote i.e in our github account.*


### Configuring git

In order to do the git operation, git needs to know who we are.

Configure git by the following commands


> ```$git config --global user.name "your name"```

> ```$git config --global user.email "your@email.com"```


Then proceed to the following operation.

> ```mkdir wintest.``` *//making a directory*

> ```cd wintest``` *//changing the working dir to wintest.*

> ```git init```  *//initialize the git repo. Now git starts tracking content and you will see .git folder*


Now we can add anything file folder anything in the repo (locally still it is).

In this example:


>  ```~echo "hello from git Blog by RAZan" > index.html```

Exp: What this does is it writes the hello from git Blog by RAZan to the index.html

> ```~git add --all```

//for adding all files to the staging area. If you want to add only those file that were modified then you can do by this ```git add <filename>```

> ```~git commit -m "your message"```

//now the file in the staging are committed with the message. mostly these type of message is included to show the user what things were modified.
<a href="https://1.bp.blogspot.com/-7uh3alG0qK4/V995ikRMndI/AAAAAAAABMA/wgzB901VSiI1O2GoLuhLbJ_gwi2g3z1gACEw/s1600/gitinit.png" imageanchor="1"><img alt="git setup" border="0" src="https://i0.wp.com/1.bp.blogspot.com/-7uh3alG0qK4/V995ikRMndI/AAAAAAAABMA/wgzB901VSiI1O2GoLuhLbJ_gwi2g3z1gACEw/s640/gitinit.png?ssl=1" title="git-setup" /></a>

Once the repo is created grab the HTTPs link from there.(SSH concept is little bit advanced)Now we know where to push our REPO. So go through the BASH and type

> ```git add remote origin https://github.com/<your-username>/wintest.git```

After then PUSH the REPO by using

> ```git push -u origin master```

You can check the git status after every command you enter.

> ```git status```

Feel free to query me. You can meet me here in Twitter or visit my Repos at <a href="https://github.com/cdrrazan" target="_blank">Github.</a> Thank You. We will meet in the next blog post.
