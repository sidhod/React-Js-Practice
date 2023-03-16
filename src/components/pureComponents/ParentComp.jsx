import React, { Component } from 'react'
import PureComponent1 from './pureComponent';
import RegularCompoenent from './regularCompoenent';

export class ParentComp extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: 'sai'
        }
    }
    componentDidMount() {
        setInterval(() => {
            this.setState({
                name: 'sai'
            })
        }, 2000);
    }
    render() {
        console.log("***************Parent**************************")
        return (
            <div>
                ParentComp
                <RegularCompoenent name={this.state.name} />
                <PureComponent1 name={this.state.name} />
            </div>
        )
    }
}

export default ParentComp