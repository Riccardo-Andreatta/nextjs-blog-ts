---
title: 'Next.js features out of the box: Dynamic Imports'
date: '2022-11-03'
---

Next.js supports lazy loading external libraries with `import()` and React components with `next/dynamic`.

It is also possible to dynamically load a component on the client side, just by disabling the `ssr` option. This is useful if an external dependency or component relies on browser APIs.

Components or libraries are only imported and included in the JavaScript bundle when they’re used by the users.

Deferred loading helps improve the initial loading performance by decreasing the amount of JavaScript necessary to render the page. 
