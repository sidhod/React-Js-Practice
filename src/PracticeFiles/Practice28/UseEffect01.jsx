import React, { useEffect } from 'react'
import { useState } from 'react'

function UseEffect01() {
    const [update, setUpdate] = useState({ name: 'sid' })
    function callApi() {
        console.log('useEffect')
    }
    function change() {
        setUpdate({ name: 'Sid' })
    }
    useEffect(() => {
        callApi()
    }, [])
    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <h5>Click here:{update.name}</h5>
            <button onClick={change}>click</button>
        </div>
    )
}

export default UseEffect01