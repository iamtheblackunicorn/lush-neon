<p align="center">
 <img src="assets/images/banner/banner.png"/>
</p>

# LUSH NEON :sparkles: :fire:

![GitHub CI](https://github.com/iamtheblackunicorn/lush-neon/actions/workflows/jekyll.yml/badge.svg)

***A homage to the 80s and neon lights.*** :sparkles: :fire:

## About :books:

Since the 80s featured neon lights and colorful arcades and I like colorful and bright things, I tried to design a website that was minimalist in nature but also mimicked this style. ***Lush Neon*** is my interpretation of this colorful aesthetic and was designed to be used by users of the Jekyll CMS framework.

## Live Demo :fireworks:

A live demo of this Jekyll theme can be found [here](https://iamtheblackunicorn.art/lush-neon).

## Features :test_tube:

- A retro design inspired by the arcades of the 80s and neon lights.
- Fast and easy to use!
- Elegant and pretty to behold.
- SEO
- Responsive design for mobile and desktop.


## Installation :hammer:

To get started with ***Lush Neon***, you will need to have the following tools installed on your system of choice and available from the command-line.

- Git
- Ruby
- Jekyll for Ruby (available via Ruby Gems)
- Bundler for Ruby (available via Ruby Gems)
- CMake (optional)

If you have these tools all correctly installed, you start by creating a new Jekyll site with this command:

```
$ jekyll new mysite
```

Once you have done this, change directory into the `mysite` directory.

```
$ cd mysite
```

Open this directory in your favourite text editor. We recommend [Atom](https://atom.io).

You will see several files. The two most important files are:

- `_config.yml`: This file tells Jekyll your preferences for your site. (Note that you can easily generate the `favicons` for your site using [this tool](https://www.favicon-generator.org/).) In this file you should fill in the following fields:
  - `viewText`: This is the text that is shown on the blog preview page to go to the URL of your posts.
  - `mottoText`: This is the text to expand the navigation menu.
  - `siteTitle`: This is the name of your site.
  - `siteName`: This is the main heading and title of your site.
  - `navClose`: This is the text to close the navigation menu.
  - `siteLogo`: This is the path to your logo.
  - `description`: This is the description of what your site.
  - `apple57x57`: This is the path to the "favicon" of the dimensions `57x57`.
  - `apple60x60`: This is the path to the "favicon" of the dimensions `60x60`.
  - `apple72x72`: This is the path to the "favicon" of the dimensions `72x72`.
  - `apple76x76`: This is the path to the "favicon" of the dimensions `76x76`.
  - `apple114x114`: This is the path to the "favicon" of the dimensions `114x114`.
  - `apple120x120`: This is the path to the "favicon" of the dimensions `120x120`.
  - `apple144x144`: This is the path to the "favicon" of the dimensions `144x144`.
  - `apple152x152`: This is the path to the "favicon" of the dimensions `152x152`.
  - `apple180x180`: This is the path to the "favicon" of the dimensions `180x180`.
  - `android192x192`: This is the path to the "favicon" of the dimensions `192x192`.
  - `favicon32x32`: This is the path to the "favicon" of the dimensions `32x32`.
  - `favicon96x96`:This is the path to the "favicon" of the dimensions `96x96`.
  - `favicon16x16`: This is the path to the "favicon" of the dimensions `16x16`.
  - `siteManifest`: This is the path to your site's manifest.
  - `theme`: You should fill this with `jekyll-theme-lush-neon`.
  - `iconUrlIsAbsolute`: Set this to `true` if you are supplying your icon URLs from another server.
  - `microsoft144x144`: This is the path to the "favicon" of the dimensions `144x44`.
  - `plugins`: Be sure to add the following packages to this section:
    - `jekyll-feed`
    - `jekyll-seo-tag`
    - `jekyll-paginate`
    - `jekyll-sitemap`
    - `jekyll-gist`
    - `sassc`
    - `jekyll-remote-theme`

- `Gemfile`: This file tells Jekyll and Bundler which packages and extensions to use to compile your Jekyll site into a static collection of HTML files. Add these lines to your `Gemfile`:

```Ruby
gem "jekyll-feed"
gem "jekyll-seo-tag"
gem "jekyll-paginate"
gem "jekyll-sitemap"
gem "jekyll-gist"
gem "jekyll-remote-theme"
gem "sassc"
gem "jekyll-theme-lush-neon", git: "https://github.com/iamthblackunicorn/lush-neon", branch: "main"
```

Next, create a directory inside the `mysite` directory called `_data`. Inside `_data`, create a file called `nav.yml`. Fill this file in the following manner.

```YAML
- name: "HOME"
  url: "/"
```

This file tells Jekyll which links you would like in your site's navigation menu and to which URL to take users.

Finally, add a directory called `_posts` in the `mysite` directory. This is where your site's blog posts will go. Create a new post with the file name format such as this `YYYY-MM-DD-Your-awesome-post.markdown`. At the start of the file, you need to set some variables. The `layout` variables tells Jekyll which one of ***Lush Neon's*** layouts to use. `tags` tells Jekyll which subjects your post is related to. Here's an example:

```Markdown
layout: post
title:  "Welcome to Jekyll!"
description: "The standard welcome post for new Jekyll users."
tags: jekyll update
```

(Optional) If you make headings, take care that these headings should start with an `h2`. Also if you would like to create extra pages and not posts, be sure to create a directory by the name of the page and a file called `index.markdown` inside it. Populate this file with your content and start it just like a post, but instead use `page` for the page's layout.

## Usage :pick:

After you have set up your Jekyll like this, you can simply run `bundle install` and `bundle exec jekyll serve --config _config_dev.yml` in the `mysite` directory. Go to [http://localhost:4000](http://localhost:4000) and you should see your fresh new website!

## Deployment :flight_departure:

If you would like to build and deploy your site, you can build the site by using the `bundle exec jekyll build` command and then uploading the files in `mysite/_site` to a server. GitHub Pages supports the direct use of a Jekyll site, so no need to build the site before uploading it to a GitHub repository.

## Changelog :black_nib:

### Version 1.0.0:

- initial release
- visual changes
- slightly cleaned-up code

## Note :scroll:

- *Lush Neon :sparkles: :fire:* by Alexander Abraham :black_heart: a.k.a. *"The Black Unicorn" :unicorn:*
- Licensed under the MIT license.
