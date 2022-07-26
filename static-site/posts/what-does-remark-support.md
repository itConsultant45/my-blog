---
title: 'What MD does remark support?'
excerpt: 'This blog site uses the remark and remark-html npm packages to render content. Lets compare Microsoft’s [Syntax guidance for basic Markdown usage](https://docs.microsoft.com/en-us/azure/devops/project/wiki/markdown-guidance?view=azure-devops) with supported functionality.'
date: '2022-07-28'
categories: ['Documentation']
tags: ['Markdown', 'HTML', 'NPM']
---

# This is a H1 header

## This is a H2 header

### This is a H3 header

#### This is a H4 header

##### This is a H5 header

Add lines between your text with the **Enter** key

> Single line quote
>
> > Nested quote
> > multiple line
> > quote

above

---

below

Use _emphasis_ in comments to express **strong** opinions and point out ~~corrections~~  
**_Bold, italicized text_**  
**~~Bold, strike-through text~~**

```bash
sudo npm install vsoagent-installer -g
```

```js file=./say-hi.js start=start_here end=end_here
const count = records.length;
```

| Heading 1 | Heading 2 |                       Heading 3 |
| --------- | :-------: | ------------------------------: |
| Cell A1   |  Cell A2  |                         Cell A3 |
| Cell B1   |  Cell B2  | Cell B3<br/>second line of text |
