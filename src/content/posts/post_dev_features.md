---
title: 'Functional Paper Architecture Features'
pubDate: 2024-02-29
description: 'Functional Paper includes pagination, search, tagging system and some other features'
author: 'Vlad Ivan'
image:
    src: '/images/architecture.webp'
    alt: 'Architecture'
tags: ["astro", "architecture", "pagefind", "giscus"]
---
I'll provide an overview of some of the architectural features of Functional Paper. This is not a configuration tutorial, just a FYI on what is available.

## Pagination
Pagination is implemented in the [Blog](/blog) page because I am not a fan of infinite scrolling. The number of posts per page can be easily adjusted from the *.env* file so it will fit you exact preference.

A feature related to this is how the *more posts* link form the home page works. As the number of posts shown on home is the same as the first page of the [Blog](/blog/), I decided to redirect to the second page of it. In case the second page does not exist because `number_of_posts <= PAGE_SIZE`, redirect to the first and only blog page will be used instead.


## Search
Search is powered by [pagefind](https://pagefind.app). Indexes are built during `astro build` and results are provided using the pagefind API through pagefind.js. The data from posts is used in the indexes.

Pagefind provides a default UI for the search box and results. I chose to not use it to be able to easier implement my custom styling. The code for it is in the search.astro page.


## Tags
Each post has a list of tags. These are used to offer a quick glance at the topics covered in a post. All tags throughout the blog are clickable to be able to quickly found relatable content.

There is also a dedicated [Tags](/tags) page that showcases all the tags across the posts. A dynamic sizing system is implemented on this page to give a visual representation of the most used tags, which are the niche tags and everything in between.


## Comments
I believe feedback is a very important component in content creation. User interaction is a bit harder to do in a statically generated site, but achievable. [giscus](https://giscus.app) is a comments system powered by GitHub Discussions that can be used to add comments and reactions to static sites. They also offer the option of self-hosting your own giscus instance.

Your visitors will need to sign into their GitHub accounts to be able to react and comment. This is a fine solution for technical blogs, but for the other types another solution would probably offer better user engagement.


## SEO
### Sitemap
The [sitemap](https://docs.astro.build/en/guides/integrations-guide/sitemap/) integration for Astro is used to generate at build time a sitemap for your site that can be used by the search engines.

### robots.txt
This file is generated using *robots.txt.ts*. You can customize it from there. It is also used to link to the sitemap.


## RSS
For those using an RSS reader, I've followed the [official guide](https://docs.astro.build/en/guides/rss/#setting-up-astrojsrss) to integrate an RSS feed generation during the build. RSS feed icon is available in the footer next to the social media links.


## Footer social media
I've added clickable icons for some of the most popular social media platforms. Those are added automatically depending on the environment variable for that social media link being set or not in the *.env* file, so there is not need to manually remove an icon form source code, maybe you'll create that social media account later.


## .env
Check the *.env* file for the global environment variables and experiment with them to fit your needs.