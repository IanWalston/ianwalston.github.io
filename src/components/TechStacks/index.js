import React from "react";
import TechCard from "./TechCard";
import { Typography, Grid, Box } from "@material-ui/core";

function Index({ stacks, techs }) {
  return (
    <div>
      <Box p={3}></Box>
      <Typography variant="h3">Tech Stacks</Typography>
      <Typography>
        These are a few examples of the technologies
        I use to build web applications
        </Typography>

      {stacks.map((stack) => {
        return (<>
          <Box p={3}></Box>
          <Typography variant="h4">{stack.name}</Typography>
          <Typography>{stack.description}</Typography>

          <Grid container >
            {stack.tech.map((eachTechInStack) => {
              const id = eachTechInStack.id;

              const tech = techs.find((item) => item.id === id);

              return (
                <Grid item key={stack.name} xs={12} sm={4} md={3} lg={2}>
                  <TechCard info={tech} key={eachTechInStack.id} />
                </Grid>
              )
            })}
          </Grid>
        </>
        );
      })}
    </div>
  );
}

export default Index;
