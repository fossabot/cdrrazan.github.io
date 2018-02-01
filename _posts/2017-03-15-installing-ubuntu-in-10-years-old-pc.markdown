---
layout: post
title: Ubuntu in 10 Years old pc!
date: 2017-03-15 13:32:20 +0545
img: ubuntu1.jpg # Add image post (optional)
category: linux
tags: [ubuntu]
---

By  Neymarsabin.

Specs
> *Age: 10 years*

> *RAM: 981MB*

> *Hard Drive Size: 80GB*

> *CPU: Intel(R) Pentium(R) 4 CPU 3.00GHZ*

> *Width: 64bits*
<hr>

Before Ubuntu

I had installed windows 7 but would stop working after boot if there is no internet connectivity. After connecting to Ethernet port it would stuck forever. Sort of *memory LOW * problem.
<hr>
After Installing Ubuntu

Installing Ubuntu was the same like others.But tweaking it to use lowest memory(RAM) possible was my challenge. Without tweaking it would again act like windows 7 and stuck at some point.
<hr>
Things i did:

My first job was to remove the packages that were using the memory unnecessarily
First of them was the Ubuntu default desktop environment. I always hate unity. Don't know why but i have always hated that.

 > *sudo apt remove unity*

This couldn't uninstalled unity-greeter package so had to manually uninstall it.

 > *sudo apt remove unity-greeter*

I also removed gnome packages.

 > *sudo apt remove gnome-* *

The next thing to do was to remove the Ubuntu display manager which is in fact lightdm by default.

 > *sudo apt remove lightdm*

And a quick autoremove of several packages that were no longer needed.

 > *sudo apt autoremove*

All combined

 > *sudo apt remove unity unity-greeter gnome-* lightdm*
 > *sudo apt autoremove*

<i>Do not reboot, otherwise you would not have your desktop environment.</i>
<hr>


Start installing

Do a quick update

> *sudo apt update*

Installing the desktop environment first

> *sudo apt install i3*

As i removed default display manager, i somehow needed to start i3 when X starts, so:

> *cp /etc/X11/xinit/xinitrc /.xinitrc*
> *emacsclient .xinitrc*

And add the following line at the end of the file to start i3 when i start my X server manually.

 > *exec i3*

Now install some useful packages

 > *sudo apt install gnome-terminal ranger tmux openssh-server git htop*
 > *sudo apt autoremove*
 > *reboot*

And a clean reboot.In the tty terminal enter your username and password.Then, u will be left in the shell(probably bash shell).Enter:

 > *startx*

This starts the X server. And also the i3 window manager.
<hr>
Testing the system

 > *Setup a xampp server*
 > *Start and use firefox*
 > *Check for information using htop*

<hr>
This that can be done:

 > *Remove network manager and assign static ip.*
