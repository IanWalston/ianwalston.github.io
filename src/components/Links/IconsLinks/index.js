import React from "react";
import svg from "../../Svg";

export default function index(props) {
    return (
        <div className={"iconLinks"}>
            {props.links.map(link => {
                return (
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href={link.url}
                        title={link.name}
                    >
                        {svg[link.name]}
                    </a>
                );
            })}
        </div>
    );
}
