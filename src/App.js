import React, { Component } from "react";
import Info from "./components/Info";
import Projects from "./components/Projects/index";
import Links from "./components/Links";

export class App extends Component {
    render() {
        const ian = this.props.ian;
        return (
            <div className="container mt-4 pt-4">
                <div className="row">
                    <div className="col-md-8">
                        <Info {...this.props} />
                    </div>
                    <div className="col-md-4">
                        <Links links={ian.links} />
                    </div>
                </div>
                <hr className="my-4" />
                <div className="row">
                    <Projects projects={ian.projects} />
                </div>
                <hr className="mt-4" />
                <footer class="page-footer font-small blue">
                    <div class="footer-copyright text-center py-3">
                        © 2020
                        <a href="https://ianwalston.github.io/">
                            {" "}
                            ianwalston.github.io
                        </a>
                    </div>
                </footer>
            </div>
        );
    }
}

export default App;
