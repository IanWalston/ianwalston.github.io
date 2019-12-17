import React, { Component } from 'react'
import './style.css'

export class Projects extends Component {
    render() {
        return (
            <div className='projects'>
                {this.props.projects.map(project=>{
                    return <div className='project'>
                            <div>{project.summary}</div>
                            <div>{project.tech}</div>
                            <div><a href={project.siteUrl}>site</a></div>
                            <div><a href={project.codeUrl}>code</a></div>
                    </div>
                })}
            </div>
        )
    }
}

export default Projects
