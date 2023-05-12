import React, { useState } from 'react'
import ChildComponent from './ChildComponent'

function ComponetParent() {
    const [val, setVal] = useState({})
    function ShowOutPut(value) {
        setVal(value)
    }
    return (
        <div>ComponetParent
            <h1>{val.value}</h1>
            <ChildComponent showresult={ShowOutPut} />
        </div>
    )
}

export default ComponetParent