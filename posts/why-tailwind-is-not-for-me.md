---
title: '为什么 Tailwind 和我八字不合'
description: '丑陋的 HTML，不合标准的 @apply，可以用 CSS 变量代替，对 web 组件不友好，我就是不喜欢 Tailwind'
cover: 'https://nextfe.com/static/c2b50607a8ccad62506b78708a87efb5/2c512/5Gjro2OZN1A.jpg'
date: '2021-01-21'
---

Next.js has two forms of pre-rendering: **Static Generation** and **Server-side Rendering**. The difference is in **when** it generates the HTML for a page.

- **Static Generation** is the pre-rendering method that generates the HTML at **build time**. The pre-rendered HTML is then _reused_ on each request.
- **Server-side Rendering** is the pre-rendering method that generates the HTML on **each request**.

Importantly, Next.js lets you **choose** which pre-rendering form to use for each page. You can create a "hybrid" Next.js app by using Static Generation for most pages and using Server-side Rendering for others.