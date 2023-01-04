import React, { Component } from "react";
class CounterClassCondition extends Component {
    constructor() {
        super()
        this.state = {
            count: 0,
            name: ""
        }
    }
    componentDidMount() {
        document.title = `Count ${this.state.count}`
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevState.count !== this.state.count) {
            console.log("Update")
        }

        document.title = `Count ${this.state.count}`
    }
    render() {
        return (
            <div>
                <input type="text" value={this.state.name} onChange={e => { this.setState({ name: e.target.value }) }}></input>
                <h1>{this.state.count}</h1>
                <button onClick={() => this.setState({ count: this.state.count + 1 })}>Click</button>
            </div>

        )
    }
}
export default CounterClassCondition