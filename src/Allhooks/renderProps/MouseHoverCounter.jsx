import React from 'react'
import { useState } from 'react'

function MouseHoverCounter(props) {
    console.log(props)
    let { count, incrementC } = props
    return (
        <div>
            <h1 onMouseOver={incrementC}>Mouse hover{count}</h1>

        </div>
    )
}

export default MouseHoverCounter