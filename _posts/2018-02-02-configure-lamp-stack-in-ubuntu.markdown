---
layout: post
title: How to configure LAMP stack in Ubuntu?
date: 2018-02-02 13:32:20 +0545
category: linux
tags: [ubuntu]
---

<a href="https://www.unixmen.com/wp-content/uploads/2017/05/lamp_stack.jpg" imageanchor="1" style="margin-left: 1em; margin-right: 1em;"><img alt="lamp server" border="0" data-original-height="432" data-original-width="800" height="344" src="https://www.unixmen.com/wp-content/uploads/2017/05/lamp_stack.jpg" title="" width="640" /></a>

### Introduction : LAMP Server
LAMP stack is a group of tools installed on a server to enable hosting dynamic websites and web apps. LAMP stands for: Linux, Apache, MySQL, PHP. LAMP is an archetypal model of web service stacks, named as an acronym of the names of its original four open-source components: the Linux operating system, the Apache HTTP Server, the MySQL relational database management system (RDBMS), and the PHP programming language. The LAMP components are largely interchangeable and not limited to the original selection. As a solution stack, LAMP is suitable for building dynamic web sites and web applications.

So, we will break the LAMP as following and their setup as follows:

> *1. L = Linux, Our Base operating System. In this tutorial we will be setting up LAMP Server in our fresh Ubuntu.*

> *2. A = Apache, Apache is the open source web server that is free to use as it is open source software. 67% of the total world's web server are operated on Apache web server.*

> *3. M = MySQL, MySQL is the open source relational database management. Now-a-days, Maria db are gaining more popularity.*

> *4. P = Perl, PHP, Python. Well Perl seems to be having low popularity, generally PHP and Python are used as the scripting language.*



In this tutorial we’ll look on how to install and configure the LAMP stack running Ubuntu. Before Starting any configuration always check for the available update and make sure your system is up to date. In ubuntu you can check for the update as follow:

> *```$ sudo apt-get update```  //won't provide you the available package update information*

> *```$ sudo apt update```  //will provide how many packages are available to update.*

If there are updates, install all of them:

> *```$ sudo apt-get upgrade``` //won't display the progress bar in the bottom*

> *```$ sudo apt upgrade```  //will display the percentage bar in the bottom to show the actual progress!*

Since, we are wanting to configure the LAMP server in the Ubuntu 17.04, our 'L' setup is already completed as we have Ubuntu 17.04 as GNU/Linux. So, we need to move further to configure the Apache server


### Apache
Install Apache Install the Apache web server, which is available in the Ubuntu repositories:


> *```$ sudo apt-get install apache2```*


```apache2 version (2.4.25-3ubuntu2.2)```


Start an Apache configuration test:

> *```$ sudo apache2ctl configtest```*

```AH00558: apache2: Could not reliably determine the server's fully qualified domain name, using fe80::5054:ff:fe69:a3e0. Set the 'ServerName' directive globally to suppress this messag Syntax OK```

There are no syntax errors, however the test returns a warning message saying that we didn’t set up a FQDN (fully qualified domain name). This warning message is harmless, but it will show up when checking your Apache configuration for syntax errors.


Edit the Apache main configuration:


> *```$ sudo $EDITOR /etc/apache2/apache2.conf```*

//replace $Editor by your preferred for ex. NANO, gedit, emacs, vim etc.

At the end of this file, add  directive, pointing to server domain or IP. For the purpose of this tutorial we’ll write


```ServerName 192.168.111.111``` //any IP you would like to setup

Save, close the file and check for syntax errors in configuration:

> *```$ sudo apache2ctl configtest```*


Now, the result will be:

```Syntax OK```


Restart Apache:


> *```$ sudo systemctl restart apache2```*


Open a web browser and go to your server URL. If you see the following page, Apache is correctly running:

<a href="https://assets.digitalocean.com/articles/lamp_1404/default_apache.png" imageanchor="1" style="margin-left: 1em; margin-right: 1em;"><img alt="apache server" border="0" data-original-height="590" data-original-width="690" height="546" src="https://assets.digitalocean.com/articles/lamp_1404/default_apache.png" title="" width="640" /></a>

### MySQL
Install MySQL At this point, you also have a web server up and running. Next step is to install the database management system, MySQL.

MySQL is available in Ubuntu repositories, so use apt

> *```$ sudo apt-get install mysql-server```*

[We can also use Mariadb as database. However this is little too complicated. We will leave that for now.] During the installation, you will be asked for the root account password.

<a href="https://www.unixmen.com/wp-content/uploads/2017/05/Schermata-da-2017-05-11-09-41-54.png" imageanchor="1" style="margin-left: 1em; margin-right: 1em;"><img alt="sql setup" border="0" class="aligncenter size-full wp-image-50254" src="https://www.unixmen.com/wp-content/uploads/2017/05/Schermata-da-2017-05-11-09-41-54.png" title="" /></a>

At the end of this process, we’ll change some default configurations, running the following script:
> $ mysql_secure_installation
>
> Securing the MySQL server deployment.
>
> Enter password for user root:
>
> ```VALIDATE PASSWORD PLUGIN can be used to test passwords
>  and improve security. It checks the strength of password
>  and allows the users to set only those passwords which are
>  secure enough. Would you like to setup VALIDATE PASSWORD plugin?```
>
>  Press y/Y for Yes, any other key for No:  N
>
> Using existing password for root.
>
> Change the password for root ? ((Press y/Y for Yes, any other key for No) >:
>
> ... skipping.
>
> ```By default, a MySQL installation has an anonymous user,
>  allowing anyone to log into MySQL without having to have
>  a user account created for them. This is intended only for
>  testing, and to make the installation go a bit smoother.
>  You should remove them before moving into a production
>  environment.```
>
> Remove anonymous users? (Press y/Y for Yes, any other key for No) : y
>
> Success.
>
> Normally, root should only be allowed to connect from
>  'localhost'. This ensures that someone cannot guess at
>  the root password from the network.
>
> Disallow root login remotely? (Press y|Y for Yes, any other key for No) : > y
>
> Success.
>
> By default, MySQL comes with a database named 'test' that
>  anyone can access. This is also intended only for testing,
>  and should be removed before moving into a production
>  environment.
>
> Remove test database and access to it? (Press y/Y for Yes, any other key for No) : y
>
> Dropping test database...
> Success.
>
> Removing privileges on test database...
>  Success.
>
> Reloading the privilege tables will ensure that all changes made so far will take effect
> immediately.
>
> Reload privilege tables now? (Press y/Y for Yes, any other key for No) : y
> Success.
>
> All done!

The database system is now set up!


### PHP
Install PHP The next part of the LAMP stack is a PHP environment. This is the part that will process the code to display dynamic content. Install PHP using apt:

> *```$ sudo apt-get install php libapache2-mod-php php-mcrypt php-mysql```*

Test PHP To test PHP, create a new basic file named info.php in the Apache web root, which, for Ubuntu, is /var/www/html:



> *```$ sudo $EDITOR /var/www/html/info.php```*

In this file, paste the following code:

```<?php
 phpinfo();
 ?>```


Save and close this. Next, with a web browser, go to: http://your_domain_or_ip/info.php. If everything is working well, it should display the following page
<a href="https://2.bp.blogspot.com/-fgG20XDtHxk/WYJvpnFtMvI/AAAAAAAAAwE/SiwDz4xiFr8uBvGT3Z3Z0HYlTwasT5e5gCLcBGAs/s1600/phpinfo.png" imageanchor="1" style="margin-left: 1em; margin-right: 1em;"><img alt="php" border="0" data-original-height="655" data-original-width="951" height="440" src="https://2.bp.blogspot.com/-fgG20XDtHxk/WYJvpnFtMvI/AAAAAAAAAwE/SiwDz4xiFr8uBvGT3Z3Z0HYlTwasT5e5gCLcBGAs/s640/phpinfo.png" title="" width="640" /></a>

Conclusion: This marks the complete installation of LAMP in ubuntu 17.04. Drop some comments below if you hit something hard.
