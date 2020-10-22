import React from "react";
import { Typography, Box } from "@material-ui/core";

const Info = ({ props }) => {
  return (
    <Box pr={6}>
      <Typography variant="h3">{props.name}</Typography>
      <Typography variant="h4" color="textSecondary">{props.title}</Typography>
      <Box p={1}></Box>
      {props.bio.split('\n').map(each => {

        return <Box py={1} key={each.slice(10)} >
          <Typography variant="body1" component="p">{each}</Typography>
        </Box>
      })}
    </Box>
  );
};

export default Info;
