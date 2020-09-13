import React from 'react'
import { TextareaAutosize } from '@material-ui/core'

export default function index(props) {
    return <TextareaAutosize
        className="json"
        style={{ width: '100%' }}
        fullwidth="true"
        rowsMax={5}
        defaultValue={JSON.stringify(props.links, null, 4)}
    />;
    ;
}
