const _ = require('lodash')
const Promise = require('bluebird')
const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    resolve(
      graphql(
        `
          {
            allMarkdownRemark(
              sort: { 
                fields: [frontmatter___date], 
                order: DESC 
              }, 
              limit: 1000
            ) {
              edges {
                node {
                  fields {
                    slug
                  }
                  frontmatter {
                    title
                    type
                    published
                  }
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          console.log(`ERRORS!: ${result.errors}`)
          reject(result.errors)
        }
        console.log(`result from createPages is ${JSON.stringify(result, null, 4)}`);
        // Create blog posts detail and projects detail pages.
        const posts = result.data.allMarkdownRemark.edges;
        console.log(`posts are ${JSON.stringify(posts)}`);
        _.each(posts, (post, index) => {
          const template = path.resolve(`src/templates/${post.node.frontmatter.type === "project" ? "project.js" : "blog-post.js"}`);
          const previous = index === posts.length - 1 ? null : posts[index + 1].node;
          const next = index === 0 ? null : posts[index - 1].node;
          console.log(`creating page at ${post.node.fields.slug}`);
          createPage({
            path: post.node.fields.slug,
            component: template,
            context: {
              slug: post.node.fields.slug,
              previous,
              next,
            },
          })
        })
        // Create Index page using blogEntries pages as template. Requires published blog posts!
        const blogPosts = posts.filter(post => post.node.frontmatter.type !== "project" && post.node.frontmatter.published);
        console.log(`blogPosts: ${JSON.stringify(blogPosts)}`);
        const postsPerPage = 3
        const numPages = Math.ceil(blogPosts.length / postsPerPage)
        Array.from({ length: numPages }).forEach((_, i) => {
          // const template = path.resolve(`./src/templates/${post.node.frontmatter.type === "project" ? "project.js" : "blog-post.js"}`);          
          console.log(`creating index page with context limit: ${postsPerPage} and skip: ${i * postsPerPage}`);
          console.log(`creating page at ${i === 0 ? '/' : '/'+ (i + 1)}`);
          createPage({
            path: i === 0 ? `/` : `/${i + 1}`,
            component: path.resolve("./src/templates/blogEntries.js"),
            context: {
              skip: i * postsPerPage,
              limit: postsPerPage,
              currentPage: i + 1,
              numPages: numPages
            },
          })
        })
      })
    )
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode, basePath: 'pages' })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}