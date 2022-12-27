import React, { Component } from "react"
class DestrutureExample extends Component {
    render() {
        const { FirstName, LastName } = this.props
        return (
            <h1> {FirstName} {LastName}</h1 >
        )
    }
}
export default DestrutureExample