import React, { useState } from "react";
let intial = 0;

function Array() {
    let arr = ["Sai", "Sid", "Sidho", "Kiran"];
    const [number, array] = useState(0)
    console.log(number);
    return (
        <div>
            <h1>Hii {arr[number]}</h1>
            <button onClick={() => array(number + 1)}>Next</button>
            <button onClick={() => array(number - 1)}>Prev</button>
        </div>
    )
}
export default Array;