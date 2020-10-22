import React from "react";
import { Grid, Typography, Box } from "@material-ui/core";
import Project from "./ProjectCard";
import Carousel from 'react-material-ui-carousel'

export default function Projects({ projects, techs }) {
  return (
    <Box mt={6}>
      <Typography variant="h4" align="center">Projects</Typography>
      <Box p={1}></Box>
      <Box style={{ maxWidth: "1000px", margin: "0 auto" }}>

        <Carousel
          navButtonsAlwaysVisible
          interval={20000}
          timeout={500}
          animation="slide"
        >
          {projects.map((project) => (<Project project={project} techs={techs} key={project}></Project>
          ))}
        </Carousel>
      </Box>
    </Box>
  );
}
