import React, { Component } from "react";
import Info from "./components/Info";
import Projects from "./components/Projects/index";
import Links from "./components/Links";
import { Container, Grid } from "@material-ui/core";

export class App extends Component {
    render() {
        const developerInfo = this.props.developerInfo;
        return (
            <Container>
                <Grid container>
                    <Grid item xs={12} md={6}>
                        <Info {...this.props} />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Links links={developerInfo.links} />
                    </Grid>
                    <Grid item xs={12}>
                        <Projects projects={developerInfo.projects} />
                    </Grid>
                    <Grid item xs={12}>
                        Ian Walston 2020
                    </Grid>
                </Grid>
            </Container>
        );
    }
}

export default App;
