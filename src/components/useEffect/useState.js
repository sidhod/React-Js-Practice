import React, { useEffect, useState } from "react";
function CounterTitle() {
    const [count, updatecount] = useState(0)
    useEffect(() => {
        document.title = `Count ${count}`
    })
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={() => updatecount(count + 1)}>click</button>
        </div>
    )
}
export default CounterTitle