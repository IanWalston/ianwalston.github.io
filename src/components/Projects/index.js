import React, { Component } from "react";
import "./style.css";
import { Card, CardContent, CardActions, Button, Grid, Typography, Link } from "@material-ui/core";

export class Projects extends Component {
    render() {
        return (
            <div>
                <h2>Projects</h2>
                <Grid container spacing={2}>
                    {this.props.projects.map(project => {
                        return (
                            <Grid item key={project.name}>
                                <Card>
                                    <CardContent>
                                        <Typography variant="h5">
                                            {project.summary}
                                        </Typography>
                                        <Typography variant="h6">
                                            {project.name}
                                        </Typography>
                                        <Typography>
                                            {project.tech}
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button
                                            color="primary"
                                            href={project.siteUrl}
                                        >
                                            site
                                        </Button>
                                        {project.codeUrl ? (
                                            <Button
                                                color="primary"
                                                href={project.codeUrl}
                                                disabled={!project.codeUrl}
                                            >
                                                code
                                            </Button>
                                        ) : (
                                                <Button
                                                    color="primary"
                                                    disabled
                                                >
                                                    code
                                                </Button>
                                            )}
                                    </CardActions>
                                </Card>
                            </Grid>
                        );
                    })}
                </Grid>
            </div>
        );
    }
}

export default Projects;
