import React from 'react'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'

import { Link } from 'gatsby'
import profilePic from './bio_shadow.png'
import { rhythm } from '../utils/typography'

class Bio extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          marginBottom: rhythm(2.5),
        }}
      >
        <img
          src={profilePic}
          alt={`Eric Levine`}
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            width: rhythm(2),
            height: rhythm(2),
          }}
        />
        <p>
          Written by <strong><Link to={'/about'} style={{boxShadow:'none', color: 'orange'}}>Eric Levine</Link></strong> who tries very hard not to be a try-hard in Los Angeles building try-hard one-liners like this.
        </p>
      </div>
    )
  }
}

export default Bio
