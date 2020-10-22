import React from "react";
import { Grid, Typography, Box } from "@material-ui/core";
import Project from "./ProjectCard";
import Carousel from 'react-material-ui-carousel'

export default function Projects({ projects }) {
  return (
    <Box mt={6}>
      <Typography variant="h3" align="center">Projects</Typography>

      <Box style={{maxWidth: "600px", margin: "0 auto"}}>
        
      <Carousel>
        {projects.map((project) => (<Project project={project} key={project}></Project>
        ))}
      </Carousel>
        </Box>
    </Box>
  );
}
