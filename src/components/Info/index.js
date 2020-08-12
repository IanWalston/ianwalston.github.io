import React, { Component } from 'react'
import { Typography } from '@material-ui/core'
import './style.css'

const Info = (props) => {
    const developerInfo = props.developerInfo
    return (
        <>
            <Typography variant='h3'>{developerInfo.name}</Typography>
            <Typography variant='h4'>{developerInfo.title}</Typography>
            <Typography variant='h5'>{developerInfo.bio}</Typography>
            <Typography variant='h6' mb={8}>
                <a href='https://github.com/IanWalston/ianwalston.github.io'>See the React code for this portfolio</a>
            </Typography>
        </>
    )
}


export default Info
