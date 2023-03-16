import React, { Component, PureComponent } from 'react'

class PureComponent1 extends PureComponent {
    render() {
        console.log("Pure Component")
        return (
            <div>Pure Component
                {this.props.name}
            </div>
        )
    }
}
export default PureComponent1

