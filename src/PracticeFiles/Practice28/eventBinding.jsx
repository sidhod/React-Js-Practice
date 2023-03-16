import React, { Component } from 'react'
//Event Binding bY four ways
class EventBinding01 extends Component {
    constructor() {
        super()
        this.state = {
            name: 'Sai'
        }
        // this.change = this.change.bind(this)
    }
    change = () => {
        this.setState({
            name: 'Sidhodhan'
        })
    }
    render() {
        return (
            <div>
                <h1>{this.state.name}</h1>
                {/* <button onClick={this.change.bind(this)}>Click</button> */}
                {/* <button onClick={() => this.change()}>Click</button> */}
                <button onClick={this.change}>Click</button>
            </div>
        )
    }
}
export default EventBinding01
