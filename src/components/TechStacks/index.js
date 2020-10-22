import React from "react";
import TechCard from "./TechCard";
import { Typography, Grid, Box } from "@material-ui/core";

function TechStacks({ stacks, techs }) {
  return (
    <div style={{maxWidth:"800px", margin:"0 auto" }}>
      <Box p={3}></Box>
      <Typography variant="h4" align="center">Tech Stacks</Typography>
      <Typography align="center">
        A few examples of the technologies I bring together to create web applications
      </Typography>

      {stacks.map((stack) => {
        return (
          <Box key={stack.name}>
            <Box p={3}></Box>
            <Typography align="center" variant="h5">{stack.name}</Typography>
            <Typography align="center">{stack.description}</Typography>

            <Grid container >
              {stack.tech.map((eachTechInStack) => {
                const id = eachTechInStack.id;

                const tech = techs.find((item) => item.id === id);

                return (
                  <Grid item key={id} xs={12} sm={4} md={3}>
                    <TechCard info={tech} key={eachTechInStack.id} />
                  </Grid>
                );
              })}
            </Grid>
          </Box>
        );
      })}
    </div>
  );
}

export default TechStacks;
