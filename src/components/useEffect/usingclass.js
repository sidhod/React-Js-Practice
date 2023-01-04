import React, { Component } from "react";
class CounterClass extends Component {
    constructor() {
        super()
        this.state = {
            count: 0
        }
    }
    componentDidMount() {
        document.title = `Count ${this.state.count}`
    }
    componentDidUpdate() {
        document.title = `Count ${this.state.count}`
    }
    render() {
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={() => this.setState({ count: this.state.count + 1 })}>Click</button>
            </div>

        )
    }
}
export default CounterClass