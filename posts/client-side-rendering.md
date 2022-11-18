---
title: 'Client-Side Rendering'
date: '2022-11-10'
---

In a standard React application, the browser receives an empty HTML shell from the server along with the JavaScript instructions to construct the UI.

This is called **Client-Side Rendering** (*CSR*) because the initial rendering work happens on the user’s device.

![Client-Side Rendering schematics](/images/CSR.png "Client-Side Rendering")

## Advantages
- Fast rendering process
- Simple and fast navigation
- Lower server load
- Relevant for web applications

## Disadvantages
- Slow loading for the first time on the website
- Need for external framework libraries
- A weak side of SEO
- Some or all content is not included

## When to use Client-Side rendering?

The client-side rendering has its peculiarities and unique options. It will not suits all web solutions, but it will be appropriate if:

- The web app is going to have a compound UI design: the application will consist of a big number of pages with diverse functions
- The content of the pages needs frequent updating or there is a large amount of dynamic data
- The page content is related to logged users data
- The aim is a large number of users, and the app should be designed for it
- This type of rendering gives a potential opportunity for a mobile app for the same project, so it is better to develop API + Front-End from the beginning if we would like to develop a native mobile app in the future
- The acquisition strategy doesn’t prioritize SEO
