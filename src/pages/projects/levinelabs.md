---
title: "Portfolio / Blog"
type: "project"
technologies: ["gatsby", "react", "graphql", "javascript"]
logline: "This very site!"
logo: "levinelabs"
# github: "blah"
---

### Purpose

Needed a simple markdown blog platform that could also serve as an online presence for my projects.


### Tech involved

- __Gatsby__ - I had experience with static site generators in the past, namely Jekyll and Middleman, both being Ruby frameworks, and enjoyed their modularity and simplicity.
- __React__ - Always been a fan of React's performance from working with it previously.
- __GraphQL__ for querying - This was my first time using the query language. It's a refreshing way to work with data and its schema. Using GraphQL allowed me to expose only the attributes I needed for each component with page-specific queries, and integrated really well with the headmatter in markdown files.
- __CSS Grid__ for view layout
- __Netlify__ - I've been hearing the hype for a while now, and the deploy process with a static site generator structure was probably faster than that of Heroku! Mostly just utilizing its continuous deployment feature (via Git integration) and built-in HTTPS certificate (using LetsEncrypt under the hood). However, if your microservice or app calls for a more functional approach, it can handle hosting a singular function similar to Amazon Lambda.

###  Takeaways / Improvements

Steps will be taken in the coming weeks to make the site more mobile-friendly.

Image loading and optimization can be improved with the Gatsby plugin [gatsby-image](https://www.gatsbyjs.org/packages/gatsby-image/), so that's the next logical step to improve already-snappy load times.