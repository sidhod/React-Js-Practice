import React, { Component } from 'react';
class SquareOfNo extends Component {
    constructor() {
        super();
        this.state = {
            number: 0
        }
        this.squareEvent = this.squareEvent.bind(this)
    }
    squareEvent() {
        this.setState({

            square: this.state.number * this.state.number,
            number: this.state.number + 1

        })

    }
    render() {
        return (
            <div>
                <h4>Square {this.state.number - 1} = {this.state.square}</h4>
                <button onClick={this.squareEvent}>Square</button>
            </div >
        )
    }
}
export default SquareOfNo