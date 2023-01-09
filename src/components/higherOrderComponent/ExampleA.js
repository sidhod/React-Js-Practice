
import React, { Component } from 'react'
import changer from './higerOrderComponetExample'
class ExampleA extends Component {
    render() {
        const { name, changeName } = this.props
        return (
            <div>

                <button onClick={changeName}>Click:{name}</button>
            </div>

        )
    }
}
export default changer(ExampleA, "Sai")
