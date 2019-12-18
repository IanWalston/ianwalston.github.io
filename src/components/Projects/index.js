import React, { Component } from "react";
import "./style.css";

export class Projects extends Component {
    render() {
        return (
            <div>
                <h2>Projects</h2>
                <div class="card-deck">
                    {this.props.projects.map(project => {
                        return (
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">
                                        {project.summary}
                                    </h5>
                                    <p className="card-text">{project.tech}</p>
                                </div>
                                <div className="card-footer">
                                    <a href={project.siteUrl}>
                                        <button className="btn btn-primary">
                                            site
                                        </button>
                                    </a>
                                    <a
                                        className="float-right d-block "
                                        href={project.codeUrl}
                                    >
                                        <button
                                            className="btn btn-success"
                                            disabled={!project.codeUrl}
                                        >
                                            code
                                        </button>
                                    </a>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }
}

export default Projects;
