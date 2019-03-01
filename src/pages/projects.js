import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'

import styled from 'styled-components'
import Layout from '../components/Layout'
import ProjectNode from '../components/ProjectNode'

const ProjectsElement = styled.section`
  a:hover {
    background-color: #F4E8D1;
  }
`

class ProjectsPage extends React.Component {
    render() {
        const posts = get(this, 'props.data.allMarkdownRemark.edges')
        return(
            <Layout location={this.props.location} title={get(this, 'props.data.site.siteMetadata.title')}>
                <ProjectsElement
                    style={{
                            // backgroundColor:'yellow',
                            display: 'grid',
                            gridTemplateColumns: '1fr 1fr 1fr',
                            gridGap: '10px',
                            // gridTemplateRows: 'fr fr',
                            gridAutoRows: 'minmax(300px, auto)',
                            padding: '30px'
                        }}>
                    {posts.map(({ node }) => {
                        // const title = get(node, 'frontmatter.title') || node.fields.slug
                        // console.warn(node.frontmatter);
                        return (
                            <Link
                                id={node.id} 
                                to={node.fields.slug}
                                style={{boxShadow: 'none'}}>
                                <ProjectNode
                                    id={node.id}
                                    project={node.frontmatter}>
                                </ProjectNode>
                            </Link>
                        )
                    })}
                </ProjectsElement>
            </Layout>
        )
    }
}

export default ProjectsPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(
      sort: { 
        fields: [frontmatter___date], 
        order: DESC 
      },
      filter: {
        frontmatter: {
          type: {
            eq: "project"
          }
        }
      }
    ) {
      edges {
        node {
          id
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            logo
            logline
          }
        }
      }
    }
  }
`