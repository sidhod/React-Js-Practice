import React, { useState } from "react";

function HookArrayExample() {
    let arr = [2, 3, 4];
    const [number, array] = useState(arr)
    return (
        <div>
            <h1>Array= {number}</h1>
            <button onClick={() => array(arr.reverse())}>OK</button>
        </div>
    )
}

export default HookArrayExample;