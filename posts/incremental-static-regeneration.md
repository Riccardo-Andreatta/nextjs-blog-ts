---
title: 'Incremental Static Regeneration'
date: '2022-11-17'
---

**Incremental Static Regeneration** (*ISR*) is one of the most powerful features of Next.js, it enables the usage of static-site generation in a way that doesn’t force us to rebuild the whole page on ‌every reload.

ISR improves furthermore the scalability of web applications.

## ISR: regeneration every X seconds

ISR is an extension of SSG. It offers an additional `revalidate` property returned by `getStaticProps()`. This property is counted in seconds and tells how often Next.js should regenerate statically the HTML for a given page.

![Incremental Static Regeneration schematics - Regeneration every X seconds](/images/ISR-revalidate-seconds.png "Incremental Static Regeneration - Scenario 1")

## ISR: user triggers regeneration

The regeneration can be triggered by a user request rather than every “X” seconds.

![Incremental Static Regeneration schematics - User triggers regeneration](/images/ISR.png "Incremental Static Regeneration - Scenario 2")

In this scenario the first user triggers a regeneration for all the subsequent users.

As in the previous case, once the page has been successfully generated, Next.js will invalidate the cache and send the updated product page for all future requests.

If the background regeneration fails, the old page remains unaltered (this is why pages are never expiring).

In Next.js we trigger the regeneration with the function `revalidate()`.

## ISR: statically generate most popular pages

We can statically generate hundreds of the most popular or latest pages at build time and enable ISR for the rest of the application.

![Incremental Static Regeneration schematics - Statically generate selected pages and server render first time the others are visited](/images/ISR-generate-most-popular-pages.png "Incremental Static Regeneration - Scenario 3")

Once a user makes a request to a page not listed in `getStaticPaths()`, Next.js will Server-Side Render the page for that user and statically generate the page in the background. The next user will receive the statically generated content.

This method keeps the build time short, retaining all the benefits of SSG for every page of the application. 

## ISR: `fallback` property

Next.js statically generate most popular pages defined in `getStaticPaths()` at build time using the page component. The remaining pages are generated on-demand by specifying the `fallback` property.
- If `fallback: blocking`: when a request is made to a page that hasn't been generated, Next.js is server-side rendering it on the first request. Future requests will serve the static page from the cache.
- If `fallback: true`: when a request is made to a page that hasn't been generated, Next.js will immediately serve a static page with a loading state on the first request. When the data has finished loading, the page will render using this data and cached in the server. Future requests will serve the static page from cache.
- If `fallback: false`: any paths not returned by `getStaticPaths()` will result in a 404 error.

By using `getStaticProps()` and `getStaticPaths()`, we can create a "*hybrid*" Next.js application by using Static-Site Generation for common pages and using Server-Side Rendering for pages containing dynamic data and pages that are not yet built.

## Incremental Static Regeneration: pros and cons

This rendering method enables us to build apps which load instantly, and are SEO friendly and we keep all the benefits from the Static-Site Generation, overcoming some of the downsides.

There’s a few flaws in ISR that need to be considered before going “all-in” on the concept.

When a user comes to a page in the application, we want them to see the most up-to-date version, immediately. With ISR the first visitor to a page will not see that. They will always see a fallback first. And then later, if the data gets stale, the first visitor to see that cached page will see the out-of-date data first before it revalidates.

This inconsistent experience can be pretty difficult to debug if the users are experiencing negative side-effects as a result of old/unbuilt pages.

# When to use Incremental Static Regeneration?

When there is the need to refresh the content without having to rebuild the entire app.
When the application has hundreds of pages that need to pre-render but we do not want to spend hours on building an app.
When we want to statically generate pages that will be created soon, for example by content editors: when they create a new blog post, there is no need to rebuild the entire app to generate a newly created page.

# Side notes for developments and deployments when using this strategy

To verify that the on-demand ISR configuration is correct, developers need to create a production build and then start the production server (`npm run build && npm start`).

ISR works out of the box, on self-hosted Next.js sites when we use `next start`.
