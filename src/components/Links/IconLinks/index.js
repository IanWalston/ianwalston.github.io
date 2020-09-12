import React from "react";
import { Box, Grid, Typography, IconButton } from "@material-ui/core"
import icons from "../../Icons";

export default function index(props) {
    return (
        <Grid container>
            {props.links.map(link => {
                return (
                    <Box mx={2} key={link.name}>
                        <IconButton
                            target="_blank"
                            rel="noopener noreferrer"
                            href={link.url}
                        >
                            {icons[link.name]}
                        </IconButton>
                        <Typography align='center' display='block' variant='caption'>{link.name}</Typography>
                    </Box>
                );
            })}
        </Grid>
    );
}
