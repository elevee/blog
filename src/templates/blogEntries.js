import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/Layout"
import Bio from '../components/Bio'
import get from 'lodash/get'

import styled from 'styled-components'

const BlogElement = styled.div`
  section h1 a, .pagination a {
    box-shadow: none;
    color: inherit;
    :hover {
      color: orange;
    }
  }  
  .pagination {
    width: 100%;
    text-align: center;
  }
`

export default class BlogList extends React.Component {
  render() {
    // console.log(this.props)
    const {title, description} = this.props.data.site.siteMetadata
    const posts = this.props.data.allMarkdownRemark ? this.props.data.allMarkdownRemark.edges : null
    const { currentPage, numPages } = get(this, 'props.pageContext')
    const isFirst = currentPage === 1
    const isLast = currentPage === numPages
    const prevPage = currentPage - 1 === 1 ? "/" : (currentPage - 1).toString()
    const nextPage = (currentPage + 1).toString()
    
    return (
      <BlogElement>
        <Layout title={title} description={description}>
          <Bio />
          {/* <h3>current page is {currentPage} of {numPages} pages.</h3> */}
          {/* {if(!posts){
            <h3>Ahhh shit</h3>
          }} */}
          
          {!posts ? <div><h3>No posts</h3><p>No posts have been published yet. Check back later.</p></div> : posts.map(({ node }) => {
            const title = node.frontmatter.title || node.fields.slug
            return (
              <section key={node.fields.slug}>
                <h1>
                  <Link to={node.fields.slug}>
                    {title}
                  </Link>
                </h1>
                <div dangerouslySetInnerHTML={{__html: node.html}}></div>
              </section>
            )
          })}

          <div className='pagination'>
            {/* pagination */}
            {!isFirst && (
              <Link to={prevPage} rel="prev">
                {/* ← Previous Page */}
                <i class="fas fa-chevron-left fa-5x"></i>
              </Link>
            )}
            {!isLast && (
              <Link to={nextPage} rel="next">
                {/* Next Page → */}
                <i class="fas fa-chevron-right fa-5x"></i>
              </Link>
            )}
          </div>
        </Layout>
      </BlogElement>
    )
  }
}

export const BlogListQuery = graphql`
  query blogListQuery($skip: Int!, $limit: Int!) {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {
        frontmatter: {
          type: {
            ne: "project"
          }
          published: {
            eq: true
          }
        }
      }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            published
          }
          html
        }
      }
    }
  }
`