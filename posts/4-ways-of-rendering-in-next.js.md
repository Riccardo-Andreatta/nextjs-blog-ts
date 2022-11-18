---
title: 'Ways of rendering in Next.js'
date: '2022-11-06'
---

Before explaining the 4 ways of rendering in Next.js, a quick concept: what does it mean "rendering"?

**Rendering** is the process that converts the code we write in React (*Next.js is based in the React library*) into the HTML representation of our UI.

Rendering can take place on the server or on the client (with Next.js 13 - the last one - also on specific CDNs that are called "Edge" that in easy
words, are particular types of CDNs but instead of just storing and caching data, they have also server capabilities).

Rendering can happen either ahead of time, at build time, or on every request at runtime.

With Next.js, there are several types of rendering methods available:
1. [Client-Side Rendering](/posts/client-side-rendering)
1. [Server-Side Rendering](/posts/server-side-rendering)
1. [Static Site Generation](/posts/static-site-generation)
1. [Incremental Static Regeneration](/posts/incremental-static-regeneration)

Keep in mind that *Server-Side Rendering*, *Static Site Generation* and *Incremental Static Regeneration* are also named **Pre-Rendering** because the fetching of external data and transformation of React components into HTML happens before the result is sent to the client.

**With Next.js we can choose the most appropriate rendering method for our use case on a page-by-page basis**.
