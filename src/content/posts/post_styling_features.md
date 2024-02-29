---
title: 'Functional Paper Styling Features'
pubDate: 2024-02-29
description: 'Functional Paper styling integrations and quick customization options'
author: 'Vlad Ivan'
image:
    src: '/images/styling_disk.webp'
    alt: 'A disk of color accents'
tags: ["astro", "styling", "tailwind"]
---
Styling is done using [Tailwind CSS](https://tailwindcss.com). 

Main site colors are defined in the *tailwind.config.mjs* file:
+ custom-gray -> background color in dark mode
+ custom-white -> background color in light mode
+ custom-accent-> color used for the separators and the main accent color of the site
+ custom-accent-2 -> the secondary accent color of the site, used for tag background, the second title part as defined in *.env*
+ custom-accent-3 -> this color is used for some `<a>` tags during `hover`

For content rendered from Markdown, blog posts in our case, styling is done with the Tailwind [typography](https://github.com/tailwindlabs/tailwindcss-typography) plugin. A *Prose* component is applied to the generated content to apply the styling. This separate styling is configured in *tailwind.config.mjs* too:
```js
typography: (theme) => ({
        DEFAULT: {
          css: {
            // Default and light mode styling
          },
        },
        dark: {
          css: {
            // Custom dark mode styling
          },
        },
      }),
```
Settings are configured to provide a similar styling to the one used across the rest of the site.

The theme is configured to be mobile friendly with a hamburger menu implemented on narrow screens and mobile specific adjustments on some components for which the default desktop styling did not translate in a good user experience.

Theme can be changed between light/dark using the Sun/Moon toggle and the end of the navigation options.