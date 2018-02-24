---
layout: post
title: Deploying your first Rails App in DigitalOcean!
date: 2018-02-24 13:32:20 +0545
category: tech
tags: [ruby-on-rails]
---

This tutorial was <i>inspired by deploying your ruby on rails app using nginx, puma web server in DigitalOcean VM.</i>

When i started making my first ruby on rails app, it worked great on local development environment. The idea was simple enough, the app would generate the CV for the user and also let them download it. So, i thought, why not deploy in production server?

There are places where we can deploy your ruby on rails app for free such as heroku. I will be discussing the place where i deployed my first app: <b>"DigitalOcean." </b>


### DigitalOcean

DigitalOcean is one of the favorite and cheap place to deploy your rails app. You can either create a VM and either completely configure from scratch or you can create machine specially for the targeted purpose. For this purpose i didn't go through scratch process because i am familiar with the setup process for nginx and puma server so i chose <b>"One-Click-Apps"</b>. One click apps process lets you setup instantly. The available apps are Ruby on Rails, Wordpress, Discourse, phpmyAdmin etc.

#### Setup Process

<img src="https://3.bp.blogspot.com/-BIrO8HXfFxM/WpFKEewGuLI/AAAAAAAAA7o/PdzffCScMXQqVrPqMsSYKQPLJuTsL5aWQCLcBGAs/s1600/DO-create.png"/>

> *1. To configure your VM, click on Ruby on Rails on 16.04.*

> *2. The standard droplet, will be 1 GB. 1vCPU, 25GB SSD which cost $5/month which fits for our need.*

> *3. You can choose any datacenter nearest to your location.*

> *4. Setup additional options and setup your SSH keys.*

> *5. Finally choose name for your droplet and click on create option.*

This will finally create the VM and provide you the IP address from which can access using SSH.
<img src="https://1.bp.blogspot.com/-JIMJT3ZFWyw/WpFKV9XW0NI/AAAAAAAAA7s/-XqALm9CbdwjrPd4ESVFj0-Dxb1cWBnBQCLcBGAs/s1600/do-vm.png" />

Once the machine is created, we can access using SSH.

> *Goto terminal and type ```ssh root@IP```.*

This takes us right to the machine and we can check the **ruby**, **rails** and other needed things.

Please make sure you can configure and install the following.

>*1. GIT Configuration*

>*2. SSH Configuration*

>*3. Postgresql Configuration*

>*4. Nginx*

>*5. System Upgrade*

For this instance, i configured my SSH keys to github. You can configure this to bitbucket as well.

Once the SSH keys are configured, clone your app to the VM, to check if our setup is working. You can do this by

``` $ git clone git@github.com:username/name-of-the-app.git```

There is no need to keep this repo as we will use capistrano for our cloning and other purpose.

### Our real work now.

After finishing all the stuff, its time to setup our app. We are going to use <a href="http://capistranorb.com/">capistrano.</a>.

Add this to your ```Gemfile```.
<div id="gist">
<script src="https://gist.github.com/cdrrazan/0e99ee5a86df48a88ddb042a014aadb4.js"></script>
</div>
 Run ```$ bundle install``` to install gems now.

 This does

 > *1. Creates Capfile in the project's root path.*

 > *2. ```deploy.rb``` in the config directory.*

 > *3. deploy folder in the config directory.*

After the gem is installed, now it is time to configure capistrano. Run the following command to configure capistrano.

``` $ cap install```

Replace the content of the newly generated capfile like this.

<div id="gist">
  <script src="https://gist.github.com/cdrrazan/2c9411271cbc0ac7d7e5b62f4fdd18b3.js"></script>
</div>

Now the main task is to configure the deploy.rb which does the automation part.
Replace the ```deploy.rb``` with the following.
<div id="gist">
  <script src="https://gist.github.com/cdrrazan/540f2236e938d96b569e0f0eeee7e994.js"></script>
</div>

The main part to configure or replace are

>*1. Server IP -- Provided by DigitalOcean*

>*2. Port -- 22*

>*3. repo_url -- your github/bitbucket url{depends on what you setup earlier for SSH}*

>*4. application -- app name*

>*5. user -- username in the VM*

Once all this finishes, it is time to setup our nginx. Create a file nginx.conf inside config directory and add the following code.

<div id="gist">
  <script src="https://gist.github.com/cdrrazan/7427217b6f8ef97161010d2e4f7a202a.js"></script>
</div>
 Remember you need to change the username from deploy to your username and appname to whatever you wrote in the deploy.rb.

 Push all the changes in the git server and run the deployment as

 ```$ cap production deploy:inital```

 This will take time depending upon your app and internet connection. Once the process finishes, connect your Puma web server to the Nginx reverse proxy.

 ```$ sudo rm /etc/nginx/sites-enabled/default```
<br>
 ```$ sudo ln -nfs "/home/deploy/apps/appname/current/config/nginx.conf" "/etc/nginx/sites-enabled/appname"```

 Again remember to replace the app name and username in above lines.

Restart out the nginx service and Boom we have our app ready. Go with your IP address in the browser and TADA its done!!

<img src="https://2.bp.blogspot.com/-7iniUL91nEk/WpFYsZXZueI/AAAAAAAAA8I/FRnd-MQpfvEuoJNjjgfivTR23G_l_ojLQCLcBGAs/s1600/itsover.jpg"/>
Well thanks for reading the article and if you hit with any problems, please comment below. I will be happy to assist. :smiley face:








