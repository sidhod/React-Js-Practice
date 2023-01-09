import React, { Component } from 'react'
const changer = (WrappedComponent, Name) => {
    class higerOrderComponetExample extends Component {
        constructor(props) {
            super(props)

            this.state = {
                name: "Name"
            }
        }
        changeName = () => {
            this.setState(prevState => {
                return { name: Name }
            })
        }

        render() {
            return <WrappedComponent name={this.state.name}
                changeName={this.changeName} />
        }
    }
    return higerOrderComponetExample
}
export default changer