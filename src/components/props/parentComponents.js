import React, { Component } from 'react'
import MemoExample from '../memo/memo'
import ChildComponets from './childComponets'


class ParentComponents extends Component {
    constructor() {
        super()
        this.state = {
            name: "Sai"
        }
        this.changeName = this.changeName.bind(this)
    }
    changeName() {
        this.setState({ name: "Sidhohdan" })
    }
    render() {
        return (
            <div>
                <h1>Name:{this.state.name}</h1>
                <MemoExample propsName={this.changeName} />
                <ChildComponets propsName={this.changeName} />
            </div>

        )
    }
}
export default ParentComponents
