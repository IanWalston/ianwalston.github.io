import React from "react";
import { Grid, Typography, Box } from "@material-ui/core";
import Project from "./ProjectCard";

export default function Projects({ projects, techs }) {
  return (
    <Box mt={6}>
      <Typography variant="h4" align="center">Projects</Typography>
      <Box p={1}></Box>
      <Box style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <Grid
          container
          alignItems="stretch"
          spacing={2}
        >
          {projects.map((project) => (
            <Grid item xs={12} sm={6} md={4}>
              <Project
                project={project}
                techs={techs}
                key={project}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}
