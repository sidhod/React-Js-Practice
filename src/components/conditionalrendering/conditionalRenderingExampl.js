import React, { Component } from 'react'
import Result from '../classandfunction/functionExample'

class ConditionalRenderingExample extends Component {
    constructor() {
        super()
        this.state = {
            switch: false
        }
        this.changeSwitch = this.changeSwitch.bind(this)
    }
    changeSwitch() {
        this.setState({ switch: true })
    }

    render() {
        return (<div>
            {this.state.switch && <div>On</div>}
            <button onClick={this.changeSwitch}>Click</button>
        </div>
        )
        // return this.state.switch ? <div>On</div> : <div>Off</div>
        // let Result
        // if (this.state.toogle) {
        //     Result = <div>On</div>
        // } else {
        //     Result = <div>OFF</div>
        // return Result
        // }
        // return <div>{Result}</div>
        // if (this.state.toogle) {
        //     return <div>True</div>
        // } else {
        //     return <div>False</div>
        // }
    }
}
export default ConditionalRenderingExample
