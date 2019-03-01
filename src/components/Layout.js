import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'

import { rhythm, scale } from '../utils/typography'

import Nav from './Nav.js'
import logo from '../../static/logos/site.png'
import fav_apple_touch from '../../static/icons/apple-touch-icon.png'
import fav_lg from '../../static/icons/favicon-32x32.png'
import fav from '../../static/icons/favicon-16x16.png'

class Layout extends React.Component {
  render() {
    const { location, title, children, description } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header //footer
    // console.log(`location.pathname is ${location.pathname}`);
    const routes = {
      "/":          "Blog",
      "/projects":  "Projects",
      "/about":     "About"
    };
    // if (Object.keys(routes).includes(location.pathname)) {
      
    header = (
      <h1
        style={{
          ...scale(1.5),
          marginBottom: rhythm(1.5),
          marginTop: 0,
        }}
      >
        <Link
          style={{
            boxShadow: 'none',
            textDecoration: 'none',
            color: 'inherit',
          }}
          to={'/'}
        >
          {/* {title} */}
          <img
          src={logo}
          alt={`Eric Levine`}
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            // width: '100%',
            // height: rhythm(2),
          }}
        />
        </Link>
        <Nav
          items={routes}>
        </Nav>
      </h1>
    )
    // footer = (
    //     <h3
    //       style={{
    //         fontFamily: 'Montserrat, sans-serif',
    //         marginTop: 0,
    //         marginBottom: rhythm(-1),
    //       }}
    //     >
    //       <Link
    //         style={{
    //           boxShadow: 'none',
    //           textDecoration: 'none',
    //           color: 'inherit',
    //         }}
    //         to={'/'}
    //       >
    //         {title}
    //       </Link>
    //     </h3>
    // )
    return (
      <div
        style={{
          marginLeft: 'auto',
          marginRight: 'auto',
          maxWidth: rhythm(45),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
          fontFamily: 'Roboto, sans-serif',
        }}
      >
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          meta={[{ name: 'description', content: description }]}
          title={title}
        >
          <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet"></link>
          <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css" integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/" crossorigin="anonymous" />

          {/* favicon */}
          <link rel="apple-touch-icon" sizes="152x152" href={fav_apple_touch}></link>
          <link rel="icon" type="image/png" sizes="32x32" href={fav_lg}></link>
          <link rel="icon" type="image/png" sizes="16x16" href={fav}></link>
        </Helmet>
        {header}
        {children}
      </div>
    )
  }
}

export default Layout