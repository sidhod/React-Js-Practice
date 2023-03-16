import React, { useEffect, useState } from "react";
function CounterTitleCondition02() {
    const [count, updatecount] = useState(0)
    const [name, setName] = useState("")
    useEffect(() => {
        console.log("Update")
        document.title = `Count ${count}`
    }, [count])
    return (
        <div>
            <input type="text" value={name} onChange={e => setName(e.target.value)} />
            <h1>{count}</h1>
            <button onClick={() => updatecount(count + 1)}>click</button>
        </div>
    )
}
export default CounterTitleCondition02