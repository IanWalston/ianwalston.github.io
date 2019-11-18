import React, { Component } from 'react'

export class Info extends Component {
    render() {
        const ian = this.props.ian
        return (
            <div>
                <h1>{ian.name}</h1>
                <h2>{ian.title}</h2>
                <p>{ian.bio}</p>
            </div>
        )
    }
}

export default Info
