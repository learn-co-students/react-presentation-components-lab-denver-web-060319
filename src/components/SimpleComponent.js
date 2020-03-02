import React, { Component } from 'react'

export default class SimpleComponent extends Component {

    state = {
        mood: 'happy'
    }

    handleChange = () => {
        this.setState({
            mood: 'sad'
        })
    }


    render() {
        return (
            <div onClick={this.handleChange}>
                {this.state.mood}
            </div>
        )
    }
}
