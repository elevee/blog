---
title: "Gif Beukeboom"
type: "project"
technologies: ["php", "javascript", "node", "express"]
logline: "Gifs of NHL Goals"
logo: "gifbeukeboom"
github: "https://github.com/elevee/gif_beukeboom"
---

Gif Beukeboom is a service that converts NHL goals into GIFs and aggregates them onto a website for at-a-glance viewing. A companion Slack integration delivers each GIF right into a slack channel shortly after the video goes live on NHL.com's API.

### Purpose

This project came about because I wanted to view the goals scored on any given evening in the NHL, but the league's official website tends to require multiple clicks to get to them. The site has a heavy javascript UX that often has you looking at loaders, waiting for every page to render, then rerender, etc.

The site shows each day's games. When on an individual game page, it populates with the game's goal GIFs along with pertinent information about the goal: Who scored, who assisted, etc.

A reddit-like voting system was also implemented, to enable sorting/filtering features later like "Best goals of 2019" and "Best goals scored by the Oilers" lists.

### Tech involved

- PHP/Linux/Bash - A PHP script, set to run in crontab on a regular interval, checks the API for new goals and converts them to GIF format.
- Amazon S3 - bucket for GIF asset storage
- Express.js - The resulting website (currently offline).
- Oauth for Facebook login
- Foundation for view layout
- EJS for view templating
- Moment.js for time formatting and processing.

###  Takeaways / Improvements

This project gave me a good understanding of developing with Node & Express.

The app/scripts have been working for 2 seasons beautifully for my needs, however if deploying to production (ignoring legal concerns), the application would need to undergo a few performance enhancements and improvements:

By default, on initial ingestion/conversion, the script creates a GIF of the entire goal clip. This tends to include the goal + 2-3 replays thereafter. A feature add to reduce browser load times was implemented to save an additional, shorter GIF and point to that asset instead, if available. Users could then create this shorter clip for the goal in a crowdsourced fashion by positioning the playhead when the puck enters the net on the viewing angle that is best. This saw a dramatic improvement when navigating to individual game pages, which could on average have 6-8 GIFs.

