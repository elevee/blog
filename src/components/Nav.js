import React from 'react'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'
import { scale } from '../utils/typography'

import { Link } from 'gatsby'
import styled from 'styled-components'

const NavElement = styled.nav`
    // line-height: 0.5rem;
    ul {
        margin-top: -15px;
        margin-left: 15px;
        list-style-type: none;
        li {
            display: inline;
            a, a:focus, a:hover, a:visited, a:link, a:active { 
                text-decoration: none;
                boxShadow: 'none';
                color: inherit;
            }
            :hover {
                color: orange;
            }
        }
        li + li::before {
            content: " | ";
            color: orange;
        }
    }
`

class Nav extends React.Component {
    render() {
        const items = Object.entries(this.props.items).map((item, i) => {
            return(
                <li key={i}>
                    <Link
                        to={item[0]} 
                        className={'navItem'}
                        style={{
                            // textDecoration: 'none',
                            boxShadow: 'none'
                        }}>
                        {item[1]}
                    </Link>
                </li>
            )
        });
        return (
            <NavElement
                style={{
                    ...scale(0.3)
                }}
            >
                <ul>
                    {items}
                </ul>
            </NavElement>
        )
    }
}

export default Nav
// export default ({ children }) => (
//     <div className={styles.ul}>{children}</div>
// )