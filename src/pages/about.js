import React from 'react'
import get from 'lodash/get'
import Layout from '../components/Layout'
import { Link, graphql, withPrefix } from 'gatsby'

import heroImage from '../assets/hero_image.png'
import styled from 'styled-components'
import 'typeface-montserrat'

const AboutElement = styled.section`
  .hero {
    position: relative;
    // background: url('${heroImage}');
    // background-size: cover;
    width: 100%;
    
    img {
      // border-left: 40px solid black;
      // border-bottom: 40px solid black;
      border-image-source: linear-gradient(white, black);
      border-image-slice: 20;
      background-blend-mode: lighten;
    }
    
    #overlay {
      width: 100%;
      height: 100%
      background-color: white;
      z-index: 1000;
    }

    #heroInset {
      margin: 20px;
      width: 500px;
      background-color: white;
      border-radius: 25px;
      opacity: .9;
      position: absolute;
      // font-family: 'montserrat'
      font-size: 38px;
      padding: 20px;
      h3 {
        margin: 20px 0px;
      }
      hr {
        border: 0;
        height: 0;
        border-top: 1px solid orange;
      }
      p {
        font-size: 18px;
      }
      .row {
        width: 100%;
      }
      .pulse {
        float: right;
        font-size: 1.3rem;
        // background: #cca92c;
        // box-shadow: 0 0 0 rgba(204,169,44, 0.4);
        // animation: pulse 2s infinite;
        &:hover {
          animation: none;
          background-color: 'black'
        }
        a {
          text-decoration: none;
          box-shadow: none;
          padding: 5px;
        }
        i {
          color: orange;
        }
      }
    }
  }
`

class AboutPage extends React.Component {
    render() {
        return(
            <Layout location={this.props.location} title={get(this, 'props.data.site.siteMetadata.title')}>
              <AboutElement>
                <div className='hero'>
                  <div id='overlay'></div>
                  <div id='heroInset'>
                    {/* <h3>About Eric</h3> */}
                    <p>Originally from Boston, the film & TV world brought me to LA, but software development became the preferred method of expression. When I'm not creating experiences for web and mobile, you can find me playing hockey, cooking, or parodying something.</p>
                    <hr></hr>
                    <div className='row'>
                      <span className='pulse'>
                        <a href='http://www.twitter.com/elevee' target='_blank'><i class="fab fa-twitter-square"></i></a>
                        <a href='http://www.instagram.com/elevee' target='_blank'><i class="fab fa-instagram"></i></a>
                        <a href='http://www.linkedin.com/in/elevee' target='_blank'><i class="fab fa-linkedin"></i></a>
                        elevee
                      </span>
                    </div>
                  </div>
                  <img 
                    src={heroImage}
                    // src='https://via.placeholder.com/868x500?text=Hero Element'
                    style={{width: '100%'}}
                  />
                </div>
                <p></p> 
              </AboutElement>
            </Layout>
        )
    }
}

export default AboutPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`