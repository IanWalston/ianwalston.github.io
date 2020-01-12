import React from 'react'

export default function index(props) {
    let text = "";

    props.links.map(link => {
        return (text += `${link.name}: ${
            link.displayText ? link.displayText : link.url
        }\n\n`);
    });

    return <textarea value={text} />;
}
