import React from "react";
import { Card, CardContent, CardActions, Button, Grid, Typography, Tooltip } from "@material-ui/core";

export default function ProjectCard({ project }) {
    return (
        <Grid item key={project.name}>
            <Card>
                <CardContent>
                    <Typography variant="h5">{project.summary}</Typography>
                    <Typography variant="h6">{project.name}</Typography>
                    <Typography>{project.tech}</Typography>
                </CardContent>
                <CardActions>
                    <Tooltip title="Links to a live demonstartion of this web application" enterDelay={1000} >
                        <Button
                            children="try app"
                            color="success"
                            variant="contained"
                            href={project.siteUrl}
                        />
                    </Tooltip>
                    <Tooltip title="Links to a public Github repository where you can read the code I wrote for this web application" enterDelay={1000} >
                        <Button
                            children="see code"
                            color="primary"
                            href={project.codeUrl}
                            disabled={!project.codeUrl}
                        />
                    </Tooltip>
                </CardActions>
            </Card>
        </Grid>
    )
}