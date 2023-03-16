
import React, { Component } from 'react'

class LifeCycleExampl02 extends Component {
    constructor() {
        super()
        this.state = {
            name: 'sid'
        }
        console.log('lifeCycle constructor')
    }

    static getDerivedStateFromProps(props, state) {
        console.log('LifecycleA getDerivedStateFromProps')
        return null
    }
    componentDidMount() {
        console.log('lifeCycle componentDidmount')
    }
    shouldComponentUpdate() {
        console.log('lifecycle should component update')
        return true
    }
    getSnapshotBeforeUpdate(prevProps, prevstate) {
        console.log('lifecycle getSnapshotBeforeUpdate')
        return null
    }
    componentDidUpdate(prevProps, prevstate, snapshot) {
        console.log('lifecycle componentDidUpdate')

    }
    changeState = () => {
        this.setState({
            name: 'Sidh'
        })
    }
    render() {
        console.log('lifecycle render')
        return (
            <div>
                <button onClick={this.changeState}>Change state</button>
                LifeCycleExampl02
            </div>
        )
    }
}
export default LifeCycleExampl02