import React from 'react'

export default function index(props) {
    const json = JSON.stringify(props.links, null, 4);

    return <textarea className="json" value={json} />;
}
