import React from "react";
import { Typography, Grid } from "@material-ui/core";

function TechCard({ info }) {
  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      style={{ height: "200px" }}
    >
      <Grid item style={{ height: "100px" }}>
        <img width="96px" src={`img/${info.id}.png`} />
      </Grid>
      <Grid item>
        <Typography variant="h5" align="center">
          {info.name}
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant="caption" align="center">
          {info.description}
        </Typography>
      </Grid>
    </Grid>
  );
}

export default TechCard;
