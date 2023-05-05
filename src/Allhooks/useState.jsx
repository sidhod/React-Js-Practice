import React, { useState } from 'react'

function UseStateHook() {
    const [count, setCounter] = useState(0)
    function clicKButton() {
        setCounter(count + 1)
    }
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={clicKButton} >Click</button>
        </div>
    )
}

export default UseStateHook