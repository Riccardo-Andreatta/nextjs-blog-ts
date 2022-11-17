---
title: 'Next.js features out of the box'
date: '2022-11-01'
---

- **Compilation** is the process of taking code in one language and outputting it in another language or another version of that language. In Next.js, compilation happens during the development stage as developers edit the code, and as part of the build step to prepare the application for production.

- **Minification** is the process of removing unnecessary code formatting and comments without changing the code’s functionality. The goal is to improve the application’s performance by decreasing file sizes. In Next.js, JavaScript and CSS files are automatically minified for production.

- **Bundling** is the process of resolving the web of dependencies and merging (or “packaging”) the files (or modules) into optimized bundles for the browser, with the goal of reducing the number of requests for files when a user visits a web page.

- **Code Splitting**: Next.js has built-in support for code splitting. Each file inside the pages/ directory will be automatically code split into its own JavaScript bundle during the build step.
    - Any code shared between pages is also split into another bundle to avoid re-downloading the same code on further navigation.
    - After the initial page load, Next.js can start pre-loading the code of other pages users are likely to navigate to.
    - Dynamic imports are another way to manually split what code is initially loaded.
