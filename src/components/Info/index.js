import React, { Component } from 'react'
import './style.css'

export class Info extends Component {
    render() {
        const ian = this.props.ian
        return (
            <div>
                <h1 className='display-4'>{ian.name}</h1>
                <h2>{ian.title}</h2>
                <p className='lead'>{ian.bio}</p>
                <a href='https://github.com/IanWalston/ianwalston.github.io'>See the React code for this portfolio</a>
            </div>
        )
    }
}

export default Info
