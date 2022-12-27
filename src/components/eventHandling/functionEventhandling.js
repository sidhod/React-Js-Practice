import React from 'react';
function EventHandling() {
    console.log("Click Button");
}
function FunctionClick() {
    return (
        <button onClick={EventHandling}>Click Here</button>
    )
}
export default FunctionClick
