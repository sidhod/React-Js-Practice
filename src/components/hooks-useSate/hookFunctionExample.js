import React, { useState } from "react";
let intial = 0;

function SquareNumber() {
    let arr = ["Sai", "Sid", "Sidho"];
    const [number, array] = useState(0)
    console.log(number);
    return (
        <div>
            <h1>Hii {arr[number]}</h1>
            <button onClick={() => array(number + 1)}>OK</button>
        </div>
    )
}
export default SquareNumber;