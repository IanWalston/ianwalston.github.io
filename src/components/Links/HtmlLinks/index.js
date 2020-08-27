import React from "react";

export default function index(props) {
    return (
        <div className="regalurLinks">
            {props.links.map(link => {
                let displayText = "";

                if (link.displayText) {
                    displayText = link.displayText;
                } else {
                    displayText = link.url.replace(/^https:\/\//, "");
                    if (displayText.length >= 40) {
                        displayText = displayText.slice(0, 38) + "...";
                    }
                }

                return (
                    <div key={link.name}>
                        <span>{link.name}: </span>
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href={link.url}
                        >
                            {displayText}
                        </a>
                    </div>
                );
            })}
        </div>
    );
}
