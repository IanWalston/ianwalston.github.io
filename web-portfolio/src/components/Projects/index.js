import React, { Component } from 'react'

export class Projects extends Component {
    render() {
        return (
            <div>
                {this.props.projects.map(project=>{
                    return <div>{project.name}</div>
                })}
            </div>
        )
    }
}

export default Projects
