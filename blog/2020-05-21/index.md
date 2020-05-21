---
banner: ""
date: "2020-05-21"
draft: false
language: "en"
noIndex: false
path: "nevermore-theme"
category: "OSS"
tags: ['theme', 'vs code', 'nevermore']
title: "Launching my owm VS Code Theme: Nevermore"
---

<img src="/assets/nevermore-logo.png" alt="Nevermore Theme" height="200">

I, usually, stick with a theme that I like for a while. From Atom's One Dark, to Dracula, to, more recently, the Material Theme. And, for the most part, I really liked how the themes looked, and besides changing the editor font-family, I didn't change any of the theme settings.

Despite that, creating my owm theme has been an item on my bucket-list for a while so I decided to give it a try.

I can't thank [Sarah Drasner](https://twitter.com/sarah_edo) enough for her amazing tutorial on [Creating a VS Code Theme](https://css-tricks.com/creating-a-vs-code-theme/). This was basically my home page for the past few days while I worked on my own version.

The tutorial is very complete and explains everything from creating your Microsoft Publisher account (required to publish your extensions) to using a nice generator to bootstrap your own extension and her insights on the research she did for choosing the correct colors for the theme.

I definitely recommend that you check the article if you intend to develop your own theme.

## Theme appearance

![Theme preview](/assets/nevermore-theme-preview.png)

The theme is a dark one, which uses a very dark shade of gray as the primary background color, the main accent colors are purple and blue, while lighter shades of gray are used for the main foreground colors.

The theme also has the basic terminal colors support, which are shared with the Git status.

I've created a basic CodePen with all the colors I used while creating the theme, check it out: [Nevermore Theme colors](https://codepen.io/cassiocardoso/details/yLYxNZb).

## Design decisions

The main inspiration for the theme was the poem: _The Raven by Edgar Allan Poe_. It inspired me in creating the dark basis and setting the main accent colors. But I needed some lighter colors for some tokens to get enough contrast. Having too darks fonts everywhere would make the eyes tired faster, that's where the lighter shades of the accent colors come into play.

Another decision of mine was to heavily use italics to highlight some code tokens. I chose that because my current font [Dank Mono](https://dank.sh/) looks so good in italics that I tried to use it as much as possible. But I'm aware that not everyone uses it, or doesn't like italics on the code, therefore I also created a **no italics** version of the theme.

## It's live. What comes next?

I created the theme mainly for myself and as a creative exercise but now that I launched it as an open-source project I intend to maintain and keep improving it in the future.

I am sure there are some issues, specially with supporting languages that I'm not currently using, so I would love feedback and ideas on how to improve on these areas.

If you want to try the theme you can get it for free on the Visual Studio Marketplace by [clicking here](https://marketplace.visualstudio.com/items?itemName=cassiocardoso.nevermore).

To file an issue or contribute with the project check the [GitHub repo](https://github.com/cassiocardoso/nevermore-theme).
