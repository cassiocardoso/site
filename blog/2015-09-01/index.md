---
banner: "/images/posts/banner/2015_jekyll_do.png"
title: "Jekyll and DigitalOcean, That's how I roll"
date: "2015-09-01"
category: "Coding"
tags: ['jekyll', 'workflow', 'devtips']
language: "en"
draft: false
noIndex: false
path: "setup-jekyll-on-digitalocean"
---

[Jekyll](http://jekyllrb.com/) is a static site generator written in Ruby, this way you need to have Ruby and Ruby Gems installed in your pc to use it.

Jekyll itself recommends a Unix based system for development and although Windows is not supported they have a [tutorial](http://jekyllrb.com/docs/windows/#installation) about how to make it work.

## Getting started with Jekyll

Use Jekyll is super easy. It’s a CLI tool, the basic commands are:

    // Use it to install Jekyll globally on your computer
    gem install jekyll

    // Use it to create a new Jekyll site inside my-site folder.
    jekyll new my-site

    // Use it to generate all the assets and watch for changes. Shortcut: jekyll s
    jekyll serve

And that’s it for our basic Jekyll tutorial. Let’s move on.

## Configuring Jekyll

The most common way to configure your Jekyll site is to use a `_config.yml` file in the root of the project. Let’s take a look at a basic `_config.yml` file to see how it looks:

      title: Cassio Cardoso | Web Developer
      email: me@cassio.rocks
      description: Lorem ipsum dolor
      sass:
        sass_dir: \_sass
        style:    :compressed
      markdown: kramdown
      highlighter: rouge

You can use the `_config.yml` file to define a handful of options. Besides the common page title, author, description, you can use it for more elaborate stuff like creating lists of links, defining plugins (gems) to use, and setting some custom globals.

## Basic structure

When you run the command `jekyll new` it provides a basic structure for your project. Let’s take a look at the most important parts of it.

### `_config.yml`

As mentioned before this file is created at the root of the project and it’s used to define configuration variables.

### `/_layouts`

As the name may suggest this folder will hold all the different page layouts used across the site. You’re given a couple of basic layouts like `default.html` and `post.html`. The default layout is used in every single page, and the post layout is a wrapper for blog posts. You can also create your own layouts as needed.

### `/_includes`

This folder is used to store small components used in your layouts. It’s a nice way to split the full page layouts into the `_layouts` folder and the components in the `_includes` folder. Common components are the header, footer, and some snippets like Google Analytics, Disqus, etc.

### `/_sass`

Here is part of where magic happens. You can set up the front matter to allow Jekyll to compile everything inside the `_sass` folder to a unique file for production. It’s a nice way to make your CSS more modular and easy to maintain. You just need a `main.scss` file at the root of your project importing all the files you want (similar to the way Bootstrap does).

### `/_posts`

In this folder you’ll put all the posts you have. People tend to create a `_drafts` folder to serve as a prequel for the `_posts` but it’s optional. The posts are written in Markdown and you should name it in the following format: `YYYY-MM-DD-post-tile.md` so Jekyll can compile it correctly with the metadata it needs.

### `/_site`

This folder is auto generated each time you run Jekyll. That’s why it normally doesn’t go to versioning systems (a.k.a put it on `.gitignore`).

## My setup

I decided to go with Jekyll because it’s very simple, fast and I’m able to maintain a blog without any of the stress required to configure a lot of stuff, set server up and everything else. Also, being able to write posts directly in Markdown is a **huge** plus.

## Host

For the hosting I’m using [Digital Ocean](https://www.digitalocean.com/?refcode=c35ca77dc0bb). I have the basic droplet which costs 5 dollars per month. It’s set up with Ubuntu 15.04 x64, 512Mb RAM and 20Gb of storage, which is more than I need to host the site. I decided to go with Digital Ocean because I always heard good thing about the service, and it’s cheap. And I have a few advantages that aren’t possible if I used GitHub Pages to host like using some plugins with Jekyll. That’s why I use the GitHub Pages as a staging environment.

If you want to try Digital Ocean, [click here](https://www.digitalocean.com/?refcode=c35ca77dc0bb) and enjoy a \$10 credit.

## CDN

I’m giving CloudFlare a try. For a long time I wnated to test some tool, so I decided to go with CloudFlare. I’m currently using the free plan to evaluate the service. They offer a lot of options so I’m testing them to see how it affects the site. So far so good.

<hr />

Well, this was an introduction to Jekyll and how I set it up using Digital Ocean and CloudFlare. Hope you all enjoy.
