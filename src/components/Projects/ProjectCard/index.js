import React from "react";
import {
  Card,
  Button,
  Box,
  Grid,
  Typography,
  Tooltip,
} from "@material-ui/core";

export default function ProjectCard({ project, techs }) {
  return (
    <Card>
      <Box px={7} py={5} bgcolor="info.main" color="primary.contrastText">
        <Grid container>

          <Grid item sm={6} container direction="column" justify="center" alignItems="center" >
            <Grid item>
              <Typography variant="h5">{project.name}</Typography>
            </Grid>
            <Grid item>
              <Typography variant="h6">{project.summary}</Typography>
            </Grid>
            <Grid item container justify="space-evenly" align="center">

              {project.tech.map(tech => {
                const techInfo = techs.find(each => each.id === tech)

                return <Grid item>
                  <Tooltip
                    title={techInfo.name}
                  >
                    <img src={"./img/" + tech + ".png"} width="64px" />
                  </Tooltip>
                </Grid>
              })}
            </Grid>
          </Grid>

          <Grid item sm={6} spacing={4} container direction="column" justify="space-evenly" alignItems="center" alignItems="flex-end">
            <Grid item>
              <Tooltip
                title="A live demonstartion of this web application"
                enterDelay={900}
              >
                <Button variant="contained" href={project.siteUrl}>
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
                  variant="contained"
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
      </Box>
    </Card>
  );
}
