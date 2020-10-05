import React, { useState } from "react";
import { Button, ButtonGroup, Typography, Grid, Card, CardContent, CardActions, Box, Tooltip } from "@material-ui/core";
import "./style.css";
import HtmlLinks from './HtmlLinks'
import IconLinks from './IconLinks'
import JsonLinks from './JsonLinks'
import PlaintextLinks from './PlaintextLinks'

export default function Links(props) {
    const [mode, setMode] = useState("icons");

    const availableModes = ["html", "icons", "json", "plaintext"];

    return <Card>
        <CardContent>
            <Typography variant="h6" >Links and Contact Info</Typography>
            {/* inline switch */}
            <Box id='link-box'>
                {{
                    "html": <HtmlLinks {...props} />,
                    "icons": <IconLinks  {...props} />,
                    "json": <JsonLinks  {...props} />,
                    "plaintext": <PlaintextLinks  {...props} />
                }[mode]}
            </Box>
        </CardContent>
        <CardActions>
            <Grid container direction="column">

                <Typography variant="caption">
                    Change Link Type
                    </Typography>

                <ButtonGroup color="primary" mb="4">
                    {availableModes.map(modeName => (
                        <Button
                            key={modeName}
                            onClick={() => setMode(modeName)}
                            disabled={mode === modeName}
                            children={modeName}
                        />
                    ))}
                </ButtonGroup>
            </Grid>
        </CardActions>
    </Card>
}
