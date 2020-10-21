import React from "react";
import { Typography, Box } from "@material-ui/core";

const Info = ({ props }) => {
  return (
    <>
      <Typography variant="h3">{props.name}</Typography>
      <Typography variant="h4" color="textSecondary">{props.title}</Typography>
      <Box p={1}></Box>
      {props.bio.split('\n').map(each => {

        return <Box py={1} >
          <Typography variant="body1" component="p">{each}</Typography>
        </Box>
      })}
    </>
  );
};

export default Info;
