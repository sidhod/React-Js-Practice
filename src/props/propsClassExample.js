import React, { Component } from 'react';
class FullName1 extends Component {
    render() {
        return <h1>My Name is {this.props.FirstName} {this.props.Lastame}</h1>
    }
}
export default FullName1;