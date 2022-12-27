import React, { Component } from 'react';
class Square extends Component {
    constructor() {
        super();
        this.state = {
            number: 0
        }
    }
    square() {
        this.setState({

            square: this.state.number * this.state.number,
            number: this.state.number + 1

        })

    }
    render() {
        return (
            <div>
                <h4>Square {this.state.number - 1} = {this.state.square}</h4>
                <button onClick={() => {
                    this.square();
                }}>Square</button>
            </div>
        )
    }
}
export default Square