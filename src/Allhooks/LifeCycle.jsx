import React, { Component } from 'react';
class LifeCycleExample extends Component {
    constructor() {
        super()
        this.state = {
            name: 'Sidhodhan'
        }
    }
    static getDerivedStateFromProps() {
        console.log('getDerivedStateFromProps')
        return null
    }

    getSnapshotBeforeUpdate() {
        console.log("getSnapshotBeforeUpdate")
        return null
    }
    shouldComponentUpdate() {
        console.log("ShouldComponetUpdate")
        return true
    }
    componentDidMount() {
        console.log("componentDidMount")
    }
    componentDidUpdate() {
        console.log("componentDidUpdate")
    }

    changeM = () => {
        this.setState({
            name: 'Sid'
        })
    }
    render() {
        return (
            <div>
                <h1>{this.state.name}</h1>
                <button onClick={this.changeM}>click</button>
            </div>)

    }
}
export default LifeCycleExample