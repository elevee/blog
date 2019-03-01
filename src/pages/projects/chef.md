---
title: "Chef"
type: "project"
logline: "A recipe assistant for Amazon's Alexa Platform"
technologies: [ "javascript", "alexa", "lambda", "dynamodb" ]
logo: "chef"
github: "https://github.com/elevee/chef"
---

### Chef: Your recipe companion.

Chef is an Alexa skill that reads recipes back to you.

### Purpose

I cook a lot. More often than not, it's a recipe I've never made before. Hands are dirty, and always needing clarification on ingredient amounts and next steps. Looking at some of the available Alexa skills, I couldn't find something simple that read recipe ingredients and steps back to you (other than the Allrecipes one which appeared proprietary).

### Tech involved

- Amazon Alexa SDK - No avoiding it when making a Alexa skill!
- Amazon Lambda - The function that executes everytime you invoke the Chef skill
- Amazon DynamoDB - NoSQL database containing users' recipes

###  Takeaways / Improvements

- Due to the way Alexa handles sessions, I had to store the current recipe as a flag in the database