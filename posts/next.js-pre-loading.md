---
title: 'Next.js Pre-loading'
date: '2022-11-02'
---

Client-side transitions between routes (pages) can be enabled via the `Link` component.

The `Link` component accepts a props called `prefetch` that prefetches the page in the background and that defaults to true. Any `<Link />` that is in the viewport (initially or through scroll) will be preloaded.

Prefetch can be disabled by passing `prefetch={false}`. When prefetch is set to false, prefetching will still occur on hover.

Pages using Static Generation will preload JSON files with the data for faster page transitions.

Prefetching is only enabled in production.
