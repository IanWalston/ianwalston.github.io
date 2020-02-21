import React, { useState } from "react";
import ReactTooltip from "react-tooltip";
import { Button } from "react-bootstrap";
import "./style.css";
import HtmlLinks from './HtmlLinks'
import IconsLinks from './IconsLinks'
import JsonLinks from './JsonLinks'
import PlaintextLinks from './PlaintextLinks'

export default function Links(props) {
    const [mode, setMode] = useState("html");

    const availableModes = ["html", "icons", "json", "plaintext"];

    const getRandomMode = () => {
        let newMode = "";
        do {
            newMode = availableModes[Math.floor(Math.random() * 4)];
        } while (newMode === mode);
        setMode(newMode)
    };

    return (
        <div className="Links">
            <h2 className="text-center">Links</h2>
            <div className="buttons">
                {availableModes.map(modeName => (
                    <Button
                        onClick={() => setMode(modeName)}
                        className={mode === modeName && "active"}
                    >
                        {modeName}
                    </Button>
                ))}
                <Button onClick={getRandomMode} variant='warning'>random</Button>
            </div>
                    {{
                        html: <HtmlLinks {...props} />,
                        icons: <IconsLinks  {...props} />,
                        json: <JsonLinks  {...props} />,
                        plaintext: <PlaintextLinks  {...props} />
                    }[mode]}
            <ReactTooltip />
        </div>
    );
}
