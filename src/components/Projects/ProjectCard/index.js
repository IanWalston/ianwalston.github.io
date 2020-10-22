import React from "react";
import {
  Card,
  CardContent,
  CardActions,
  Button,
  Grid,
  Typography,
  Tooltip,
} from "@material-ui/core";

export default function ProjectCard({ project }) {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5">{project.name}</Typography>
        <Typography variant="h6">{project.summary}</Typography>
        <Typography>{project.tech}</Typography>
      </CardContent>
      <CardActions>
        <Tooltip
          title="Links to a live demonstartion of this web application"
          enterDelay={1000}
        >
          <Button  variant="contained" href={project.siteUrl}>
            try app
            </Button>
        </Tooltip>
        <Tooltip
          title="Links to a public Github repository where you can read the code I wrote for this web application" //eslint-disable-line
          enterDelay={1000}
        >
          <Button
            color="primary"
            href={project.codeUrl}
            disabled={!project.codeUrl}
          >
            see code
            </Button>
        </Tooltip>
      </CardActions>
    </Card>
  );
}
