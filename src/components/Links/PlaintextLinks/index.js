import React from 'react'
import { TextareaAutosize } from '@material-ui/core'

export default function index(props) {

    const text = props.links.map(link => `${link.name}: ${link.displayText ? link.displayText : link.url}`).join('\n')

    return <TextareaAutosize
    style={{width:'100%'}}
        fullwidth="true"
        rowsMax={5}
        defaultValue={text}
    />;
}
