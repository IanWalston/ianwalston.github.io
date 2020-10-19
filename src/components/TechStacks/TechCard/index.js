import React from "react";
import { Typography } from "@material-ui/core";

function TechCard({ info }) {
  return (
    <div>
      <Typography>{info.name}</Typography>
      <Typography>{info.description}</Typography>
      <img width="200px" src={`img/${info.id}.png`} />
    </div>
  );
}

export default TechCard;
