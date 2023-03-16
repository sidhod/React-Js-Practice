import React, { Component } from 'react'

class RegularCompoenent extends Component {
    render() {
        console.log("Regular Component")
        return (
            <div>regularCompoenent
                {this.props.name}</div>
        )
    }
}

export default RegularCompoenent