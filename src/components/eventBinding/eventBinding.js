import React, { Component } from 'react';
class EventBinding extends Component {
    constructor() {
        super();
        this.state = {
            message: "hii Guys"
        }
        // this.eventCall = this.eventCall.bind(this)
    }
    // eventCall() {
    //     this.setState({
    //         message: "Sidhodhan"
    //     })

    // }
    eventCall = () => {
        this.setState({
            message: "Sidhodhan"
        })
    }
    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                {/* <button onClick={this.eventCall.bind(this)}>Click</button> */}
                {/* <button onClick={() => this.eventCall()}>Click</button> */}
                <button onClick={this.eventCall}>Click</button>
            </div>
        )
    }
}
export default EventBinding