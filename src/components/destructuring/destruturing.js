import React, { Component } from "react"
class Destruture extends Component {
    render() {
        const { FirstName, LastName } = this.props
        return (
            <h1>My Name is {FirstName} {LastName}</h1 >
        )
    }
}
export default Destruture