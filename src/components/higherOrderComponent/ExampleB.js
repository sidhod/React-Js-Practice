import React, { Component } from 'react'
import changer from './higerOrderComponetExample'
class ExampleB extends Component {
    render() {
        const { name, changeName } = this.props
        return (
            <h2 onMouseOver={changeName}>{name}</h2>
        )
    }
}
export default changer(ExampleB, "Sidhodhan")

