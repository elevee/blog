import React from 'react'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'
import { scale } from '../utils/typography'

import { Link, graphql } from 'gatsby'
import styled from 'styled-components'

// import Img from 'gatsby-image'
import { withPrefix } from 'gatsby'

//css here
const TechElement = styled.nav`
   display: inline-block;
   ul {
       margin: 0;
   }
`

class Technology extends React.Component {
    componentDidMount(){
        //listener for hover state (images are not react elements so can't use onmouseenter)
        console.log(document.querySelectorAll(".technologies img"));
    }

    render() {
        let techs = null;
        // console.log(`PROPS: ${this.props.technologies}`);
        if(this.props.technologies && this.props.technologies.length > 0){
            techs = this.props.technologies.map((tech, i) => {
                return (
                    <li
                        style={{
                            "display": "inline", 
                            "marginRight": "5px"
                        }}
                        key={i}>
                        {/* {tech} */}
                        <img
                            src={withPrefix(`technologies/${tech}.png`)} 
                            width={"30px"}
                            height={"30px"}
                            // alt={tech}
                            />
                    </li>
                )
            })
        }
        return (
            <TechElement
                data={this.props.data}
                // style={{
                //     ...scale(0.3),
                // }}
            >
                <ul
                    style={{"listStyleType": "none"}}
                    className={"technologies"}>
                    {techs ? techs : ""}
                </ul>
            </TechElement>
        )
    }
}

export default Technology

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