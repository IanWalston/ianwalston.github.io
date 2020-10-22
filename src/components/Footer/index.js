import React from 'react'
import { AppBar, Box, Typography, Link } from "@material-ui/core"

function Footer({ props }) {
    return (
        <Box mt={4}>
            <AppBar position="static">
                <Box p={8}>
                    <Typography align="center" color="textPrimary">
                        {props.name}
                        {" • "}
                        <Box component="span" color="text.secondary">
                            {props.title}
                        </Box>
                        {" • "}
                         2020
                    </Typography>

                    <Typography align="center">
                        <Link href="mailto:ikwalston@comcast.net" color="textSecondary">
                            ikwalston@comcast.net
                        </Link>
                    </Typography>
                </Box>
            </AppBar>
        </Box>
    )
}

export default Footer
