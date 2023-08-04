import React, { Component } from 'react'

export default class Hello extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Old Name'
        }
    }

    componentDidMount() {
        // get called after render
    }

    componentDidUpdate() {
        // called after every update
    }

    componentWillUnmount() {
        // called before component is deleted/unmount
    }

    render() {
        return(
            <div onClick={this.setState('New Name')}>
            {this.state.name}
            </div>
        )
    }
}