import React from 'react'
import Helmet from 'react-helmet'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'

// import Bio from '../components/Bio'
import Layout from '../components/Layout'
import Technology from '../components/Technology'
import { rhythm, scale } from '../utils/typography'

class ProjectTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')
    const siteDescription = post.excerpt
    // const { previous, next } = this.props.pageContext
    console.log(`Props in Project: ${post.frontmatter.technologies}`);

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          meta={[{ name: 'description', content: siteDescription }]}
          title={`${post.frontmatter.title} | ${siteTitle}`}
        />
        <div className="vitals"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr'
          }}>
          <div>
            <span className='title' style={{fontFamily: 'Roboto', fontSize: '3rem', fontWeight: '100', margin: '0', marginRight: '10px'}}>{post.frontmatter.title}</span>
            <Technology technologies={post.frontmatter.technologies}></Technology>
          </div>
          <div style={{alignSelf: 'center', textAlign: 'right'}}>
            {post.frontmatter.github ? 
              <a style={{ boxShadow: 'none', color: 'gray' }} href={post.frontmatter.github} target='_blank'>
                <span className="github"
                      style={{
                        fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol',
                        fontSize: '1.2rem',
                        marginRight: '5px'
                      }}> View on GitHub 
                </span>
                <svg version="1.1" width="16" height="16" viewBox="0 0 16 16" className="octicon octicon-mark-github" aria-hidden="true"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path></svg>
              </a> :
            ""}
          </div>
        </div>
        
        {/* <p
          style={{
            ...scale(-1 / 5),
            display: 'block',
            marginBottom: rhythm(1),
            marginTop: rhythm(-1),
          }}
        >
          {post.frontmatter.type}
        </p> */}
    
        {/* {techs ? techs : ""} */}
        
        <hr
          style={{
            marginBottom: rhythm(1),
          }}
        />
        
        <h3>{post.frontmatter.logline ? post.frontmatter.logline : post.frontmatter.title}</h3>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </Layout>
    )
  }
}

export default ProjectTemplate

export const pageQuery = graphql`
  query ProjectFromSlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt
      html
      frontmatter {
        title
        type
        technologies
        logline
        github
        # date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`