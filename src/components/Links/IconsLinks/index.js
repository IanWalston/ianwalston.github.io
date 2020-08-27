import React from "react";
import { Box, Grid } from "@material-ui/core"
import svg from "../../Svg";

export default function index(props) {
    return (
        <Grid container>
            {props.links.map(link => {
                return (
                    <Box mx={2} key={link.name}>
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href={link.url}
                            title={link.name}
                        >
                            {svg[link.name]}
                        </a>
                    </Box>
                );
            })}
        </Grid>
    );
}
