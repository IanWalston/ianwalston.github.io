import React, { Component } from "react";
import Info from "./components/Info";
import Projects from "./components/Projects/index";
import Links from "./components/Links";
import { Row, Col } from "react-bootstrap";

export class App extends Component {
    render() {
        const ian = this.props.ian;
        return (
            <div className="container mt-4 pt-4">
                <Row>
                    <Col md={8}>
                        <Info {...this.props} />
                    </Col>
                    <Col md={4}>
                        <Links links={ian.links} />
                    </Col>
                </Row>
                <hr className="my-4" />
                <Row>
                    <Col>
                        <Projects projects={ian.projects} />
                    </Col>
                </Row>
                <hr className="mt-4" />
                <footer class="page-footer font-small text-center py-3">
                    Ian Walston 2020
                </footer>
            </div>
        );
    }
}

export default App;
