
import React, { useState } from "react";
function CleanupExample() {
    const [display, setDisplay] = useState(true)
    const zero = 0
    const [count, setCount] = useState(zero)
    return (
        <div>
            <h1>Count: {count}</h1>
            <div>
                <div>

                    <button onClick={() => setCount(count - 1)}>-</button>
                    <button onClick={() => setCount(zero)}>0</button>
                </div>
                <button onClick={() => setDisplay(!display)}>Clean</button>
                {display && <button onClick={() => setCount(count + 1)}>+</button>}
            </div>


        </div >
    )
}
export default CleanupExample;