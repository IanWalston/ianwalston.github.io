import React, { Component } from "react";
import "./style.css";
import { Row, Col, Card, CardDeck, Button } from "react-bootstrap";

export class Projects extends Component {
    render() {
        return (
            <div>
                <h2>Projects</h2>
                <CardDeck>
                    {this.props.projects.map(project => {
                        return (
                            <Col sm={6} md={4} lg={3}>
                                <Card>
                                    <Card.Body className="card-body">
                                        <h5 className="card-title">
                                            {project.summary}
                                        </h5>
                                        <p className="card-text">
                                            {project.tech}
                                        </p>
                                    </Card.Body>
                                    <Card.Footer>
                                        <a
                                            href={project.siteUrl}
                                            target="_blank"
                                            className="btn btn-primary"
                                        >
                                            site
                                        </a>
                                        {project.codeUrl ? (
                                            <a
                                                target="_blank"
                                                className="float-right d-block btn btn-success"
                                                href={project.codeUrl}
                                                disabled={!project.codeUrl}
                                            >
                                                code
                                            </a>
                                        ) : (
                                            <Button
                                                variant="success"
                                                className="float-right d-block"
                                                disabled
                                            >
                                                code
                                            </Button>
                                        )}
                                    </Card.Footer>
                                </Card>
                            </Col>
                        );
                    })}
                </CardDeck>
            </div>
        );
    }
}

export default Projects;
