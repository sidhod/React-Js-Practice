import React, { Component } from 'react'

class ExampleOfLifeCycle extends Component {
    constructor() {
        super()
        this.state = {
            name: 'sai'
        }
        console.log("constructor")
    }
    static getDerivedStateFromProps() {
        console.log("getDerivedStateFromProps")
        return null
    }
    componentDidMount() {
        console.log("componentDidMount")
    }
    shouldComponentUpdate() {
        return true
    }
    getSnapshotBeforeUpdate() {
        console.log("getSnapshotBeforeUpdate")
        return null
    }
    componentDidUpdate() {
        console.log("componenetDidUpdate")
    }
    changeState = () => {
        this.setState({
            name: 'Sidhodhan'
        })
    }
    render() {
        return (
            <div>{this.state.name}
                <button onClick={this.changeState}>click to Change the state</button>
            </div>
        )
    }
}

export default ExampleOfLifeCycle