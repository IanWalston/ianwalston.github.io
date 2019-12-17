import React, { Component } from "react";
import Info from "./components/Info";
import Projects from "./components/Projects/index";
import Links from "./components/Links";
import ExportButton from "./components/ExportButton";

export class App extends Component {

    render() {
        const ian = this.props.ian;
        return (
            <div>
                <div className='sidebarBlock'>
                    <Info {...this.props}/>
                    <Links links={ian.links}/>
                </div>
                <Projects projects={ian.projects}/>
                <ExportButton {...this.props}/>
            </div>
        );
    }
}

export default App;
