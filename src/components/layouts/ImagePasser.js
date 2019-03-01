// import React from 'react'
// import PropTypes from 'prop-types'
// // import Helmet from 'react-helmet'

// // import Header from '../components/Header'

// const ImagePasser = ({ children }) => (
//   <div>
//     <div
//       style={{
//         margin: '0 auto',
//         maxWidth: 960,
//         padding: '0px 1.0875rem 1.45rem',
//         paddingTop: 0,
//       }}
//     >
//       {children()}
//       Blah
//     </div>
//   </div>
// )

// ImagePasser.propTypes = {
//   children: PropTypes.func,
// }

// export default ImagePasser

// export const query = graphql`
//   {
//   allFile(filter: {sourceInstanceName: {eq: "images"}}) {
//     edges {
//       node {
//         childImageSharp {
//           fixed(width: 125, height: 125) {
//             src
//             width
//             height
//             originalName
//           }
//         }
//       }
//     }
//   }
// }
// `