import React, { Component } from "react"
class Counter extends Component {
    constructor() {
        super();
        this.state = {
            count: 0
        }

    }
    increment() {
        // this.setState({
        //     count: this.state.count + 1
        // }, () => {
        //     console.log(this.state.count)
        // }
        // )
        this.setState((prevState) => ({
            count: prevState.count + 1

        }), () => { console.log(this.state.count) })
    }
    incrementFive() {
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()

    }
    render() {
        return (
            <div>
                <h4>Counter-{this.state.count}</h4>
                <button onClick={() => {
                    this.incrementFive()
                }}>Incriment</button>
            </div>
        )
    }
}
export default Counter;