---
title: 'Static-Site Generation'
date: '2022-11-14'
---

With **Static Site Generation** (*SSG*), the HTML is generated on the server, but unlike Server-Side Rendering, there is no server at runtime. Instead, the content is generated once, at build time, when the application is deployed, and the HTML is stored in a CDN and re-used for each request.

![Static Site Generation schematics](/images/SSG.png "Static Site Generation")

In Next.js, we can opt to statically generate pages by using `getStaticProps()` function.

## Advantages

- SSG generates already-compiled pages that can be stored on a CDN (less costly than an active server). In addition, those pages:
    - load a lot faster,
    - never expire,
    - decrease the server load.
- Security: there is no database for would-be hackers to attack.
- High level of SEO: the content of the pages has already been loaded during the static generation.
- Highly scalable since there is no need for scripts to run on a file-based generator, scaling is very easy without overwhelming the server.
- There are no extraneous libraries, no databases, or other features that a dynamic generator is built with, therefore, it’s very simple to work with and migrate as needed.

## Disadvantages

- Build time depends on the source: the greater the number of posts and pages, more time will be needed to build the application. This is the reason why websites that are publishing content too often or have a great number of posts, should avoid static site generators.
- Due to the lack of access to incoming requests, developers cannot read request headers, cookies, or URL query parameters and debugging become harder.
- The content cannot be changed between site deployments (without interrupt service routine).
- Real-Time Data is unavailable.
- No User-Generated content (comments, feedbacks, etc).
- Static site generators are not like plug and play, there is the need of some coding knowledge to customize and maintain static site generators.

## When to use Client-Side rendering?

Static Site Generation is recommended for use on any page where there is the need to pre-render content/data. It can be generated before a user request takes place.

This means that the data is available at build time, or in other words, on every page where we want to present static content or provide excellent SEO capabilities.

Examples of such pages include blogs or marketing sites that contain data from a headless CMS where the content is not updated very often. 
