import React, { Component } from 'react'

class IntervalClassCounter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
    }

    componentDidMount() {
        this.interval = setInterval(this.tick, 1000)
        console.log("component is mount")
    }
    componentWillUnmount() {
        clearInterval(this.interval)
        console.log("component is unmount")
    }
    tick = () => {
        this.setState({
            count: this.state.count + 1
        })
    }
    render() {
        return <h1>{this.state.count}</h1>
    }
}

export default IntervalClassCounter