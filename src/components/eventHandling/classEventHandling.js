import React, { Component } from 'react';

class ClassEventHandler extends Component {
    handler() {
        console.log("click")
    }
    render() {
        return (
            <button onClick={this.handler}>Output</button>
        )
    }
}
export default ClassEventHandler;