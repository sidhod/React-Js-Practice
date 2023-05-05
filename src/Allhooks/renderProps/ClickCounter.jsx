import React, { useState } from 'react'

function ClickCounter(props) {
    let { count, incrementC } = props
    return (
        <button onClick={incrementC}>Click{count}</button>
    )
}

export default ClickCounter