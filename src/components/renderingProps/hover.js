import React, { Component } from 'react'

class HoverCounterTwo2 extends Component {

    render() {
        const { count, incrementCount } = this.props
        return <h2 onMouseOver={incrementCount}>Hovered {count} times</h2>
    }
}

export default HoverCounterTwo2