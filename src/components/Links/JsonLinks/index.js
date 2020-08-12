import React from 'react'
import { TextareaAutosize } from '@material-ui/core'

export default function index(props) {
    const json = JSON.stringify(props.links, null, 4);

    return <TextareaAutosize
    className="json"
    style={{width:'100%'}}
        fullwidth
        rowsMax={5}
        defaultValue={json}
    />;
    ;
}
