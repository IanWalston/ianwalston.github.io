import React from "react";
import { Typography, Grid } from "@material-ui/core";

function TechCard({ info }) {
  return (
    <Grid
      container
      direction="column"
      justify="center"
      alignItems="center"
      style={{ height: "150px" }}
    >
      <Grid item style={{ height: "50px" }}>
        <img width="48px" src={`img/${info.id}.png`} />
      </Grid>
      <Grid item>
        <Typography variant="h6" align="center">
          {info.name}
        </Typography>
      </Grid>
      <Grid item style={{textAlign:"center"}} >
        <Typography variant="caption" align="center">
          {info.description}
        </Typography>
      </Grid>
    </Grid>
  );
}

export default TechCard;
