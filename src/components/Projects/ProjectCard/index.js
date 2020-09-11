import React from "react";
import { Card, CardContent, CardActions, Button, Grid, Typography } from "@material-ui/core";

const ProjectCard = ({ project }) => {
    return (
        <Grid item key={project.name}>
            <Card>
                <CardContent>
                    <Typography variant="h5">{project.summary}</Typography>
                    <Typography variant="h6">{project.name}</Typography>
                    <Typography>{project.tech}</Typography>
                </CardContent>
                <CardActions>
                    <Button
                        children="try app"
                        color="success"
                        variant="contained"
                        href={project.siteUrl}
                    /> 
                    <Button
                        children="see code"
                        color="primary"
                        href={project.codeUrl}
                        disabled={!project.codeUrl}
                    />
                </CardActions>
            </Card>
        </Grid>
    )
}

export default ProjectCard;
