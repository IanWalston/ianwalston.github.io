import React from "react";
import TechCard from "./TechCard";
import { Typography, Grid, Box } from "@material-ui/core";

function TechStacks({ stacks, techs }) {
  return (
    <div>
      <Box p={3}></Box>
      <Typography variant="h3">Tech Stacks</Typography>
      <Typography>
        A few examples of the technologies I use to build web applications
      </Typography>

      {stacks.map((stack) => {
        return (
          <Box key={stack.name}>
            <Box p={3}></Box>
            <Typography variant="h4">{stack.name}</Typography>
            <Typography>{stack.description}</Typography>

            <Grid container>
              {stack.tech.map((eachTechInStack) => {
                const id = eachTechInStack.id;

                const tech = techs.find((item) => item.id === id);

                return (
                  <Grid item key={id} xs={12} sm={3} md={2}>
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
