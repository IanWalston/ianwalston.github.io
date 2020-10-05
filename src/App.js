import React, { Component } from "react";
import Info from "./components/Info";
import Projects from "./components/Projects/index";
import TechStacks from "./components/TechStacks";
import Links from "./components/Links";
import { Container, Grid, Typography } from "@material-ui/core";

export default function App({ developerInfo }) {
    return <Container>
        <Grid container>
            <Grid item xs={12} md={6}>
                <Info props={developerInfo} />
            </Grid>
            <Grid item xs={12} md={6}>
                <Links links={developerInfo.links} />
            </Grid>
            <Grid item xs={12}>
                <Projects projects={developerInfo.projects} />
            </Grid>
            <Grid item xs={12}>
                <TechStacks stacks={developerInfo.stacks} techs={developerInfo.tech} />
            </Grid>
        </Grid>
    </Container>
}
