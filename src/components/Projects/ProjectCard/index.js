import React from "react";
import {
  Button,
  Box,
  Grid,
  Typography,
  Tooltip,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(2),
    background: theme.palette.grey[200],
    borderRadius: theme.spacing(2)
  }
}))

export default function ProjectCard({ project, techs }) {

  const classes = useStyles()

  return (
    <Grid container className={classes.root} >
      <Grid item sm={6} container direction="column" justify="center" alignItems="center" >
        <Grid item>
          <Typography variant="h5">{project.name}</Typography>
        </Grid>
        <Grid item>
          <Typography variant="subtitle">{project.summary}</Typography>
        </Grid>
        <Grid item>
          <Box p={1}></Box>
        </Grid>
        <Grid item container justify="space-evenly" align="center">
          {project.tech.map(techId => {
            const techInfo = techs.find(each => each.id === techId)
            return <Grid item key={techId}>
              <Tooltip
                title={techInfo.name}
              >
                <img src={"./img/" + techId + ".png"} width="36px" />
              </Tooltip>
            </Grid>
          })}
        </Grid>
      </Grid>

      <Grid item sm={6} spacing={4} container direction="column" justify="space-evenly" alignItems="center">
        <Grid item>
          <Tooltip
            title="A live demonstartion of this web application"
            enterDelay={900}
          >
            <Button
              variant="contained"
              color="primary"
              href={project.siteUrl}
            >
              try app
                </Button>
          </Tooltip>
        </Grid>
        <Grid item>
          <Tooltip
            enterDelay={900}
            title="Public Github repository containing the source code for this application" //eslint-disable-line
          >
            <Button
              color="primary"
              href={project.codeUrl}
              disabled={!project.codeUrl}
            >
              see code
              </Button>
          </Tooltip>
        </Grid>
      </Grid>
    </Grid>
  );
}
