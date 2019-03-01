import React from 'react'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'
import { scale } from '../utils/typography'

import { Link, withPrefix } from 'gatsby'
import styled from 'styled-components'

const ProjectNodeElement = styled.div`
    img {
        margin-bottom: 0px;
        width: 100%;
        height: 100%;
        // border-radius: 100px;
    }
    h3, p {
        color: black;
    }
    h3 { margin: 10px 0px; }
    p { font-size: 14px; }
`

class ProjectNode extends React.Component {
    render() {
        const project = this.props.project;
        console.log(`PROJECT IS ${project}`);
        return (
            <ProjectNodeElement
                className={`projectNode`}
                style={{
                    ...scale(0.3),
                    padding: '15px',
                    // backgroundColor: "orange",
                    display: 'grid',
                    justifyItems: 'center',
                }}
            >       
                <div
                    style={{
                        // backgroundColor: 'green',
                        width: '150px',
                        height: '150px'
                    }}>
                    <img 
                        src={project.logo ? withPrefix(`/logos/${project.logo}.png`) : "https://via.placeholder.com/150"} 
                        alt={`${project.title} Logo`}/>
                </div>
                <h3>{project.title}</h3>
                <p>{project.logline}</p>
            </ProjectNodeElement>
        )
    }
}

export default ProjectNode