import React from "react";
import { Box, Grid, Typography, Link, IconButton } from "@material-ui/core"
import svg from "../../Svg";

export default function index(props) {
    return (
        <Grid container>
            {props.links.map(link => {
                return (
                    <Box key={link.name}>
                        <IconButton
                            target="_blank"
                            rel="noopener noreferrer"
                            href={link.url}
                        >
                            {svg[link.name]}
                        </IconButton>
                        <Typography align='center'>{link.name}</Typography>
                    </Box>
                );
            })}
        </Grid>
    );
}
