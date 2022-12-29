
import React, { useState } from "react";
function HookCounterImprove() {
    const zero = 0
    const [count, setCount] = useState(zero)
    return (
        <div>
            <h1>Count: {count}</h1>
            <div>
                <button onClick={() => setCount(count + 1)}>+</button>
                <button onClick={() => setCount(count - 1)}>-</button>
                <button onClick={() => setCount(zero)}>0</button>
            </div>

        </div>
    )
}
export default HookCounterImprove;