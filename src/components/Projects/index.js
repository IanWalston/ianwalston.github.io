import React from "react";
import { Grid, Typography, Box } from "@material-ui/core";
import Project from "./ProjectCard";

export default function Projects({ projects }) {
  return (
    <Box mt={6}>
      <Typography variant="h3">Projects</Typography>
      <Grid container spacing={2}>
        {projects.map((project) => (
          <Project project={project} key={project}></Project>
        ))}
      </Grid>
    </Box>
  );
}
