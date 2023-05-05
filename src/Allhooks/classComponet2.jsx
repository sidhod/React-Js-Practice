import React, { Component } from 'react'
class ClassComonet2 extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                {this.props.name}
            </div>
        )
    }
}
export default ClassComonet2