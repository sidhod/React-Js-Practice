import React, { useState } from 'react'

function Counter(props) {
    const [counter, setCounter] = useState(0)
    const changeCounter = () => {
        setCounter(counter + 1)
    }
    return (
        <div>
            {props.render1(counter, changeCounter)}
        </div>
    )
}

export default Counter