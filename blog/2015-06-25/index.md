---
banner: "/images/posts/banner/2016_ubuntu.png"
title: "How to setup a Ubuntu machine on DigitalOcean"
language: "en"
category: "Coding"
tags: ['devtips', 'devops', 'digitalocean', 'ubuntu']
date: "2015-06-25"
draft: false
noIndex: false
path: "setup-ubuntu-on-digitalocean"
---

When creating a new **Ubuntu 14.04** server, there are some basic steps that you should take to ensure that your server is secure and configured properly.

## Introduction

First step to configure your new DigitalOcean server is to connect to it using _SSH (Secure Shell)_.

## Prerequisites

The prerequisites section describes everything that you need to know to follow this tutorial.

### Server information and Login credentials

In order to connect to a remote Linux server via SSH, you must have the following:

- **User name:** The remote user to log in as. The default admin user, or _Superuser_, on most Linux servers is `root`.
- **Password and/or SSH Key:** The password that is used to authenticate the user that you are logging in as. If you added a public SSH key to your droplet when you created it, you must have the private SSH key of the key pair (and passphrase, if it has one).
- **Server IP address:** This is the address that uniquely identifies your server on the internet, and can be found in your DigitalOcean droplets page.

If you did not add an SSH key to your droplet when you created it, you should have received an email from DigitalOcean with the aforementioned connection information and credentials. The emailed password id temporary and must be changed after the first login.

### SSH Client Software

There are a variety of SSH clients that you can use to connect to a Linux server. We will cover the following two:

- **OpenSHH** (_Linux and Mac OS X_): A collection of software that ships with most Unix-like operating systems that includes the `ssh` command.
- **PuTTY** (_Windows_): A free SSH client that can run on Windows, and is available for download on their site. `putty.exe` is the SSH client and `puttygen.exe` should also be downloaded if you want to use SSH keys.

## SSH Login as `root`

Now that you have all of the required information and software, you are now ready to log in to your server for the first time.

### Using OpenSSH (Linux and Mac OS X)

The OpenSSH `ssh` client is a command-line tool, so open a Terminal window to get started.

**Step 1 - Initiate the connection**

At the command prompt, enter the following command to attempt to connect to your server as the `root` user

      ssh root@SERVER_IP_ADDRESS

**Step 2 - Authenticate**

The authentication step involves providing a password and/or a private SSH key to prove that you are authorized to log in as `root`.

If you **added an SSH key** to your droplet, and you have the private key installed on your computer, OpenSSH will attempt to use the key to authenticate to the `root` account. If you used a key with a passphrase, you will need to provide the passphrase to complete the login process. At this point, if you are unable to log in, you may need to start you `ssh-agent` and add your SSH keys to it with the following command (assuming you key is called `id_rsa`), then go back to Step 1.

      eval `ssh-agent -s`
      ssh-add ~/.ssh/id_rsa

If you **did not add an SSH key** to your droplet, you will be prompted for the temporary password, and you will also be required to change it. Follow these steps to complete the login process:

1.  Copy the temporary password from the email, and paste it into the password prompt.
2.  At the `(current) UNIX password` prompt, paste in the temporary password again.
3.  At the `Enter new UNIX password` prompt, enter a strong password.
4.  At the `Retype new UNIX password` prompt, enter the same strong password you just entered.

Don't forget the new password that you just set.

You're now logged in!

## Creating a new user

Once you are logged in as `root`, we're prepared to add the new user account that we will use to log in from now on. To do that, type the following command:

      adduser USER_NAME

You will be asked a few questions, starting with the account password.

Enter a strong password and, optionally, fill in any of the additional information if you would like. This is not required and you can just hit `ENTER` in any field you wish to skip.

## Root privileges

Now, we have a new user account with regular account privileges. However, we may sometimes need to do administrative tasks.

To avoid having to log out of our normal user and log back in as the root account, we can set up what is known as "_super user_" or root privileges for our normal account. This will allow our normal user to run commands with administrative privileges by putting the word `sudo` before each command.

To add these privileges to our new user, we need to add the new user to the "_sudo_" group. By default, on Ubuntu 14.04, users who belong to the "_sudo_" group are allowed to use the `sudo` command.

As `root`, run this command to add your new user to the _sudo_ group:

      sudo adduser USER_NAME sudo

Now your user can run commands with super user privileges!

## Add public key authentication

The next step in securing your server is to set up public key authentication for your new user. Setting this up will increase the security of your server by requiring a private SSH key to log in.

### Generate a key pair

If you do not already have a SSH key pair, which consists of a public and private key, you need to generate one.

To generate a new key pair, enter the following command at the terminal of your **local machine**:

      ssh-keygen

Next, you will be prompted for a passphrase to secure the key with. You may either enter a passphrase or leave the passphrase blank.

This generates a private key `id_rsa`, and a public key, `id_rsa.pub`, in the `.ssh` directory of your local user home directory. Remember that the private key should not be shared with anyone who should not have access to your servers.

### Copy the public key

After generating a SSH key pair, you will want to copy your public key to your new server.

**Option 1: Use `ssh-copy-id`**

If your local machine has the `ssh-copy-id` script installed, you can use it to install your public key to any user that you have login credentials for.

Run the `ssh-copy-id` script by specifying the user and IP address of the server that you want to install the key on, like this:

      ssh-copy-id USER_NAME@SERVER_IP_ADDRESS

After providing your password at the prompt, your public key will be added to the remote user's `.ssh/authorized_keys` file. The corresponding private key can now be used to log into the server.

### Configure SSH Daemon

Now that we have our new account, we can secure our server a little bit by modifying its SSH daemon configuration (the program that allows us to log in remotely) to disallow remote SSH access to the **root** account.

Begin by opening the configuration file with your text editor as root:

      nano /etc/ssh/sshd_config

Next, we need to find the line that looks like this:

      PermitRootLogin yes

Here, we have the option to disable root login through SSH. This is generally a more secure setting since we can now access our server through our normal user account and escalate privileges when necessary.

Modify this line to "**no**" like this to disable root login:

      PermitRootLogin no

Disabling remote root login is highly recommended on every server!

### Reload SSH

Now that we have made our change, we need to restart the SSH service so that it will use our new configuration. Use this command:

      service ssh restart

### Test

Now, before we log out of the server, we should **test** our new configuration. We do not want to disconnect until we can confirm that new connections can be established successfully.

1.  Open a new terminal window on your local machine.
2.  Type: `ssh NEW_USER@SERVER_IP_ADDRESS`
3.  Type the password you defined for this new user.
4.  You should be logged in now.
5.  To run a command with root privileges use: `sudo command`
6.  You can exit the server typing: `exit`

## Configuring a basic Firewall

Firewalls provide a basic level of security for your server. These applications are responsible for denying traffic to every port on your server with exceptions for ports/services you have approved.

Ubuntu ships with a tool called `ufw` that can be used to configure your firewall policies. Our basic strategy will be to lock down everything that we do not have a good reason to keep open.

Before we enable or reload our firewall, we will create the rules that define the exceptions to our policy. First, we need to create an exception for SSH connections so that we can maintain access for remote administration.

The SSH daemon runs on port 22 by default and `ufw` can implement a rule by name if the default has not been changed. So if you have **not** modified SSH port, you can enable the exception by typing:

      sudo ufw allow ssh

If you have modified the port that the SSH daemon is listening on, you will have to allow it by specifying the actual port number, along with the TCP protocol:

      sudo ufw allow PORT_NUMBER/tcp

This is the bare minimum firewall configuration. It will only allow traffic on your SSH port and all other services will be inaccessible.

If you plan on running additional services, you will need to open the firewall at each port required.

If you plan on running a conventional HTTP web server, you will need to allow access to port 80:

      sudo ufw allow 80/tcp

If you plan to run a web server with SSL/TLS enabled, you should allow traffic to that port as well:

      sudo ufw allow 443/tcp

If you need SMTP email enabled, port 25 will need to be opened:

      sudo ufw allow 25/tcp

After you've finished addin the exceptions, you can review your selections by typing:

      sudo ufw show added

If everything looks good, you can enable the firewall by typing:

      sudo ufw enable

After that, type `y` to confirm your selection. This will apply the exceptions you made, block all other traffic, and configure your firewall to start automatically at boot.

**NOTE:** Remember that you will have to explicitly open the ports for any additional services that you may configure later.

## Configuring Timezones and Network Time Protocol (NTP)

The next step is to set the localization settings for your server and configure the Network Time Protocol (NTP) synchronization.

The first step will ensure that your server is operating under the correct time zone. The second step will configure your system to synchronize its system clock to the standard time amintained by a global network of NTP servers. This will help prevent some inconsistent behavior that can arise from out-of-sync clocks.

### Configure Timezones

Our first step is to set our server's timezone. This is a very simple procedure that can be accomplished by reconfiguring the `tzdata` package:

      sudo dpkg-reconfigure tzdata

You will be presented with a menu system that allows you to select the geographic region of your server. After this you will be able to select the specific time zone that is appropriate for your server.

### Configure NTP Synchronization

Now that you have timezone set, we should configure NTP. This will allow your computer to stay in sync with other servers, leading to more predictability in operations that rely on having the correct time.

For NTP synchronization, we will use a service called `ntp`, which we can install from Ubuntu's default repositories:

      sudo apt-get update
      sudo apt-get install ntp

This is all that you have to do to set up NTP synchronization on Ubuntu. The daemon will start automatically each boot and will continuously to adjust the system time to be in-line with the global NTP server throughout the day.

## Protecting SSH with Fail2Ban

While connecting to your server throught SSH can be very secure, the SSH daemon itself is a service that must be exposed to the internet to function properly. This comes with some inherent risk and creates a vector of attack for would-be assailants.

Any service that is exposed to the network is a potential target in this way. If you pay attention to application logs for there services, you will often see repeated, systematic login attempts that represent brute force attacks by users and bots alike.

A service called **fail2ban** can mitigate this problem by creating rules that can automatically alter your `iptables` firewall configuration based on a predefined number of unsuccessful login attempts. This will allow your server to respond to illegitimate access attempts without intervention from you.

### Installing `fail2ban` on Ubuntu

First, we need to update our local package index and then we can use `apt` to download and install the package:

      sudo apt-get update
      sudo apt-get install fail2ban

As you can see, the installation is trivial. We can now begin configuring the utility for our own use.

### Configure Fail2Ban with your service settings

The fail2ban service keeps its configuration files in the `/etc/fail2ban` directory. There is a file with defaults called `jail.conf`.

Since this file can be modified by package upgrades, we should not edit this file in-place, but rather copy it so that we can make our changes safely.

We need to copy this to a file called `jail.local` for fail2ban to find it:

      sudo cp /etc/fail2ban/jail.conf /etc/fail2ban/jail.local

Once the file is copied, we can open it for editing to see how everything works:

      sudo nano /etc/fail2ban/jail.local

In this file, there are a few settings you may wish to adjust. The settings located under the `[DEFAULT]` section will be applied to all services enabled for fail2ban that are not everridden in the service's own section.

      ignoreip = 127.0.0.1/8

You can adjust the source addresses that fail2ban ignores by adding a value to the `ignoreip` parameter. Currently, it is configured to not ban any traffic from the local machine. You can add additional addresses to ignore by appending them to the end of the parameter, separated by a space.

      bantime = 600

The `bantime` parameter sets length of time that a client will be banned when they have failed to authenticate correctly. This is measured in seconds. By default, this is set to 600 seconds, or 10 minutes.

      findtime = 600
      maxretry = 3

The next two parameters that you want to pay attention to are `findtime` and `maxretry`. They work together to establish the conditions under which a client is found to be and illegitimate user that should be banned.

The `maxretry` variable sets the number of tries a client has to authenticate within a window of time defined by `findtime`, before being banned. With the default settings, the fail2ban service will ban a client that unsuccessfully attempts to log in 2 times within a 10 minute window.

      destemail = root@localhost
      sendername = Fail2Ban
      mta = sendmail

Some other settings you may with to edit are the `destemail`, `sendername` and `mta` settings if you wish to configure email alerts. The `destemail` parameter sets the email address that should receive ban messages. The `sendername` sets the value of the "From" field in the email. The `mta` parameter configures what mail service will be used to send the email.

      action = $(action_)s

This parameter configures the action that fail2ban takes when it wants to institute a ban. The value `action_` is defined in the file shortly before this parameter. The default action is to simply configure the firewall to reject traffic from the offending host until the ban time elapses.

If you would like to configure email alerts, you can change the value from `action_` to `action_mw`. if you want the email to include the relevant log lines, you can change it to `action_mwl`. Make sure you have the appropriate email settings configures if you choose to use email alerts.

### Individual Jail settings

Finally, we get to the portion of the configuration file that deals with individual services. There are specified by the section headers, like `[SSH]`.

Each of these sections can be enabled by modifying or adding the `enabled` line to be "_true_".

      enabled = true

By default, the SSH service is enabled and all others are disabled.

These sections work by using the default values we defined above. If you want to override any values, you can do so under the service's section. If you want to use the defaults, you aren't required to add anything.

Some other settings that are set here are the `filter` that will be used to decide whether a line in a log indicates a failed authentication and the `logpath` which tells fail2ban where the logs for that particular service are located.

The `filter` value is actually a reference to a file located in the `/etc/fail2ban/filter.d` directory, with its `.conf` extension removed. This file contains the regular expressions that determine whether a line in the log is bad.

      ls /etc/fail2ban/filter.d

If you see a file that looks to be related to a service you are using, you should open it with a text editor. Most of the files are fairly well commented and you should be able to at least tell what type of condition the script was designed to guard against. Most of these filter have appropriate (disabled) sections in the `jail.local` file that we can enable if desired.

For instance, pretend that we are serving a website using nginx and realize that a password-protected portion of our site is getting slammed with login attempts. We can tell fail2ban to use the `nginx-http-auth.conf` file to check for this condition within the `/var/log/nginx/error.log` file.

This is actually already set up in a section called `[nginx-http-auth]` in our `/etc/fail2ban/jail.local` file. We just need to flip the `enabled` parameter to protect our service:

      [nginx-http-auth]

      enabled = true
      filter  = nginx-http-auth
      port    = http,https
      logpath = /var/log/nginx/error.log

If you enable this, you will want to restart your fail2ban service to make sure your rules are constructed correctly.

### Putting it all together

Now that you understand the basic idea behind fail2ban, let's run through a basic setup.

We're going to configure a auto-banning policy for SSH and Nginx, just as we described above. We want fail2ban to email us when an IP is banned.

First, let's install all of the relevant software.

If you don't already have it, you'll need nginx, since we're going to be monitoring its logs, and you'll need sendmail to mail us notifications. We'll also grab `iptables-persistent` to allow the server to automatically set up our firewall rules at boot:

      sudo apt-get update
      sudo apt-get install nginx sendmail iptables-persistent

#### Establish a base firewall

When that is finished, we should implement a default firewall. We're going to tell it to allow established connections, traffic generated by the server itself, traffic destined for our SSH and web server ports. We will drop all other traffic. We can set this basic firewall up by typing:

      sudo iptables -A INPUT -i lo -j ACCEPT
      sudo iptables -A INPUT -m conntrack --ctstate ESTABLISHED,RELATED -j ACCEPT
      sudo iptables -A INPUT -p tcp --dport 22 -j ACCEPT
      sudo iptables -A INPUT -p tcp --dport 80 -j ACCEPT
      sudo iptables -A INPUT -j DROP

These commands will implement the above policy. We can see our current firewall rules by typing:

      sudo iptables -S

#### Adjusting the Fail2ban configuration

Now, we need to configure fail2ban using the settings we'd like. Open the `jail.local` file:

      sudo nano /etc/fail2ban/jail.local

We can set a more severe ban time here. Under the default heading, change the `bantime` setting so that our service bans clients for one hour:

      bantime = 3600

We also need to configure our alert email information. First, find the `destemail` parameter and put in the email address that you want to use to collect these messages:

      destemail = admin@example.com

You can set the `sendername` to something else if you'd like. It's useful to have a value that can be easily filtered using your email service though, or else your regular inbox may get flooded with alerts if there are a lot of break in attempts from various places.

Moving down, we need to adjust the `action` parameter. Let's choose the `action_mwl` option, which institutes the ban and then emails us a "_whois_" report on the offending host, and also emails the relevant log lines.

      action = %(action_mwl)S

Moving on to our SSH section, if we want to adjust the amount of unsuccessful attempts that should be allowed before a ban is established, you can edit the `maxretry` entry. If you are using a port other than "_22_", you'll want to adjust the `port` parameter properly. As mentioned before, this service is already enabled, so we don't need to modify that.

Next, search for the `[nginx-http-auth]` section. Change the `enabled` parameter to read "_true_".

      [nginx-http-auth]

      enabled = true

This should be all you have to do in this section unless your web server is operating on non-standard ports or if you moved the default error log path.

#### Restarting the Fail2ban service

When you are finished, save and close the file.

Now, start or restart your fail2ban service. Sometime, it's better to completely shut down the service and then start it again:

      sudo service fail2ban stop
      sudo service fail2ban start

It may take a few moments for all of your firewall rules to be populated. however, after a time, you can check the new rules by typing:

      sudo iptables -S

#### Testing the banning policies

From another server, one that won't need to log into your fail2ban server, we can test the rules by getting it banned.

You can try to connect using a non-existent name:

      ssh lorem@fail2ban_SERVER_IP_ADDRESS

Enter random characters into the password prompt. Repeat this a few times. At some point, the fail2ban server will stop responding with the `Permission denied` message. This signals that your second server has been banned from the fail2ban server.

<hr />

## Installing Node.js on Ubuntu 14.04

Node.js is a JavaScript platform for server-side programming that allows users to build network applcations quickly. By leveraging JavaScript on both the front-end and the back-end, development can be more consistent and be designed within the same system.

If you are looking to set u a production Node.js environment, check out this link: [How To Set Up a Node.js Application for Production](https://www.digitalocean.com/community/tutorials/how-to-set-up-a-node-js-application-for-production-on-ubuntu-14-04)

### Installing the distro-stable version

It is possible to install Node.js from Ubuntu default repositories:

      sudo apt-get update
      sudo apt-get install nodejs

In most cases, you'll also want to install `npm`, which is the Node.js package manager. You can do this by typing:

      sudo apt-get install npm

This will allow you to easily install modules and packages to use with Node.js.

**NOTE:** Because of a conflict with another package, the executable from the Ubuntu repositories is called `nodejs` instead of `node`. Keep this in mind as you are running software.

<hr />

## Installing Apache on Ubuntu

The Apache web server is currently the most popular web server in the world, which makes it a great default choice for hosting a website.

We can install Apache easily using Ubuntu's package manager, `apt`. A package manager allows us to install most software pain-free from a repository maintained by Ubuntu.

      sudo apt-get update
      sudo apt-get install apache2

Afterwards, your web server is installed.

You can do a spot check right away to verify that everything went as planned by visiting your server's public IP address in your web browser (see the note under the next heading to find out what your public IP address is if you do not have this information already):

      http://your_server_IP_address

<hr />

## Configuring `git` in the server

First thing needed is to install Git on your VPS:

      sudo apt-get install git-core

To be able to serve a Jekyll blog we also need Ruby and Jekyll:

      curl -L https://get.rvm.io | bash -s stable --Ruby=2.0.0
      gem install jekyll

After installing the dependencies, lets create a new "bare repository" to deploy to:

      cd ~/
      mkdir repos && cd repos
      mkdir BLOG_NAME.git && cd BLOG_NAME.git
      git init --bare

Following that, we need to set up a `post-receive` hook. This is a shell script that Git runs when files are pushed to a repository. Create it like so:

      cd hooks
      touch post-receive
      vi post-receive

Now it's time to edit the `post-receive` hook. Let's do this using the following script:

      #! /bin/bash -l
      GIT_REPO=$HOME/repos/BLOG_NAME.git
      TMP_GIT_CLONE=$HOME/tmp/git/BLOG_NAME
      PUBLIC_WWW=/var/www/BLOG_NAME

      git clone $GIT_REPO $TMP_GIT_CLONE
      jekyll build --source $TMP_GIT_CLONE --destination $PUBLIC_WWW
      rm -Rf $TMP_GIT_CLONE
      exit

Then save the file. Once the file is created and has the script, it's time to adjust it's permissions:

      chmod +x post-receive

### Adding a Git Remote on the local server

Back on your local machine, add a remote to your blog's Git repository:

      git remote add REMOTE_NAME user@SERVER_IP_ADDRESS:repos/BLOG_NAME.git

Now you should be able to push your latest commits to the server with the following command:

      git push REMOTE_NAME BRANCH_NAME

Any time you make a new blog post in Jekyll, commit the changes to the Git repository and push to your VPS. The cloud server will build the site and the changes will go live within seconds.

**NOTE:** This post is a compilation of some answers found on DigitalOcean forums with some customized settings I added to fulfill my needs.
