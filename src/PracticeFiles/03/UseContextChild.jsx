import React from 'react'
import { useContext } from 'react'

import { Context3 } from './UseContextExample'

function UseContextChild() {
    const name = useContext(Context3)
    return (
        <div><h1>My Name is {name}</h1></div>
    )
}

export default UseContextChild