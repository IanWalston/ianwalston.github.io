import React, { Component } from "react";
import Info from "./components/Info";
import Projects from "./components/Projects/index";
import Links from "./components/Links";

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
                <p>
                    <a>
                        This portfolio was made using react. You can check out the code for it here on github.
                    </a>
                </p>
            </div>
        );
    }
}

export default App;
