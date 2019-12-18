import React, { Component } from "react";
import Info from "./components/Info";
import Projects from "./components/Projects/index";
import Links from "./components/Links";
import ExportButton from "./components/ExportButton";

export class App extends Component {
    render() {
        const ian = this.props.ian;
        return (
            <div className="container mt-4 pt-4">
                <div className="row">
                    <div className='col-md-8'>
                        <Info {...this.props} />
                    </div>
                    <div className='col-md-4'>
                        <Links links={ian.links} />
                    </div>
                </div>
                <hr className='my-4'/>
                <div className="row">
                    <Projects projects={ian.projects} />
                    {/* <ExportButton {...this.props} /> */}
                </div>
            </div>
        );
    }
}

export default App;
