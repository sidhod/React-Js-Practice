import React, { Component } from "react";
class CounterClassConditionExample1 extends Component {
    constructor() {
        super()
        this.state = {
            firstName: "",
            lastName: ""
        }
    }

    componentDidMount() {
        document.title = `${this.state.firstName}`
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevState.firstName !== this.state.firstName) {
            console.log("Update")
        }

        document.title = `${this.state.lastName}`
    }
    render() {
        return (
            <div>
                <input type="text" value={this.state.firstName} onChange={e => { this.setState({ firstName: e.target.value }) }}></input>
                <input type="text" value={this.state.lastName} onChange={e => { this.setState({ lastName: e.target.value }) }}></input>
            </div>

        )
    }
}
export default CounterClassConditionExample1