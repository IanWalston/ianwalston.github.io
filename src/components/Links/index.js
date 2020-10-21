import React, { useState } from "react";
import {
  Typography,
  Grid,
  Card,
  CardContent,
  CardActions,
  Box,
  Slider,
} from "@material-ui/core";
import "./style.css";
import HtmlLinks from "./HtmlLinks";
import IconLinks from "./IconLinks";
import JsonLinks from "./JsonLinks";
import PlaintextLinks from "./PlaintextLinks";

const modes = [
  {
    value: 0,
    label: "json",
  },
  {
    value: 1,
    label: "plain text",
  },
  {
    value: 2,
    label: "html",
  },
  {
    value: 3,
    label: "icons",
  },
];

export default function Links(props) {
  const [mode, setMode] = useState(3);

  function handleSelectMode(e, value) {
    setMode(value);
  }

  return (
    <Card>
      <CardContent>
        <Typography variant="h6">Links and Contact Info</Typography>
        {/* inline switch */}
        <Box id="link-box">
          {
            [
              <JsonLinks {...props} />,
              <PlaintextLinks {...props} />,
              <HtmlLinks {...props} />,
              <IconLinks {...props} />,
            ][mode]
          }
        </Box>
      </CardContent>
      <CardActions>
        <Grid container direction="column">
          <Box p={2}>
            <Typography variant="subtitle1">Change Link Type</Typography>
            <Typography variant="subtitle2">
              See how the same data can be displayed in multiple ways by using the
              slider below to select a different type
          </Typography>
            <Box mx={3}>
              <Slider
                defaultValue={3}
                min={0}
                max={3}
                marks={modes}
                traks={false}
                onChangeCommitted={handleSelectMode}
              />
            </Box>
          </Box>
        </Grid>
      </CardActions>
    </Card>
  );
}
