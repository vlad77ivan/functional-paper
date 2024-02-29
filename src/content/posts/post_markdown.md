---
title: 'Markdown Features Showcase'
pubDate: 2024-02-29
description: 'A list of markdown editing features to showcase the styling use alongside the given usage examples'
author: 'Vlad Ivan'
image:
    src: '/images/markdown_styling.webp'
    alt: 'Styling'
tags: ["astro", "blogging", "markdown", "typography"]
---
Styling can be adjusted by editing the typography theme in **tailwind.config.mjs** file. Other option is to edit the class for the top div in the **Prose.astro**  component.

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Accumsan lacus vel facilisis volutpat. Felis eget velit aliquet sagittis id consectetur purus ut faucibus. Odio eu feugiat pretium nibh ipsum consequat nisl. Ultricies tristique nulla aliquet enim tortor at auctor urna. Nibh nisl condimentum id venenatis a condimentum vitae sapien. Facilisis mauris sit amet massa vitae tortor condimentum lacinia quis. Fames ac turpis egestas sed tempus urna et pharetra pharetra. Interdum consectetur libero id faucibus nisl tincidunt. Integer eget aliquet nibh praesent. Amet luctus venenatis lectus magna.

# h1 Heading
## h2 Heading
### h3 Heading
#### h4 Heading
##### h5 Heading
###### h6 Heading


## Horizontal Rules
First rule:
___

Second rule:
***


## Typographic replacements

test.. test... test..... test?..... test!....

"Smartypants, double quotes" and 'single quotes'


## Emphasis

**This is bold text**

__This is bold text__

*This is italic text*

_This is italic text_

~~Strikethrough~~


## Blockquotes


> Blockquotes can also be nested...
>> ...by using additional greater-than signs right next to each other...
> > > ...or with spaces between arrows.


## Lists

Unordered

+ Create a list by starting a line with `+`, `-`, or `*`
+ Sub-lists are made by indenting 2 spaces:
  - Marker character change forces new list start:
    * Ac tristique libero volutpat at
    + Facilisis in pretium nisl aliquet
    - Nulla volutpat aliquam velit
+ Very easy!

Ordered

1. Lorem ipsum dolor sit amet
2. Consectetur adipiscing elit
3. Integer molestie lorem at massa


1. You can use sequential numbers...
1. ...or keep all the numbers as `1.`


## Code

Inline `code`

Indented code

    // Some comments
    line 1 of code
    line 2 of code
    line 3 of code


Block code "fences"

```
Sample text here...
```

Syntax highlighting

``` js
var foo = function (bar) {
  return bar++;
};

console.log(foo(5));
```

## Tables

| Option | Description |
| ------ | ----------- |
| data   | path to data files to supply the data that will be passed into templates. |
| engine | engine to be used for processing templates. Handlebars is the default. |
| ext    | extension to be used for dest files. |

Right aligned columns

| Option | Description |
| ------:| -----------:|
| data   | path to data files to supply the data that will be passed into templates. |
| engine | engine to be used for processing templates. Handlebars is the default. |
| ext    | extension to be used for dest files. |


## Links

[link text](https://octodex.github.com/images/minion.png)

[link with title](https://octodex.github.com/images/stormtroopocat.jpg "title text!")

link https://octodex.github.com/images/dojocat.jpg 


## Images

![Minion](https://octodex.github.com/images/minion.png)
<figcaption>Image caption</figcaption>

![Stormtroopocat](https://octodex.github.com/images/stormtroopocat.jpg "The Stormtroopocat")

Like links, Images also have a footnote style syntax

![Alt text][id]

With a reference later in the document defining the URL location:

[id]: https://octodex.github.com/images/dojocat.jpg  "The Dojocat"


### Footnotes

Footnote 1 link[^first].

Footnote 2 link[^second].

Inline footnote^[Text of inline footnote] definition.

Duplicated footnote reference[^second].

[^first]: Footnote **can have markup**

    and multiple paragraphs.

[^second]: Footnote text.
