import React from "react";
import { Typography, Link } from "@material-ui/core";

const Info = ({ props }) => {
  return (
    <>
      <Typography variant="h3">{props.name}</Typography>
      <Typography variant="h4">{props.title}</Typography>
      <Typography variant="h5">{props.bio}</Typography>
      <Typography variant="h6" mb={8}>
        <Link href="https://github.com/IanWalston/ianwalston.github.io">
          See the React code for this portfolio
        </Link>
      </Typography>
    </>
  );
};

export default Info;
