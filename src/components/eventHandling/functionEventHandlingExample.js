import React from 'react';
function EventHandlingExample() {
    console.log("Event is Call");
}
function FunctionClickExample() {

    return (
        <div>
            <button onClick={EventHandlingExample}>Response</button>

        </div>



    )
}
export default FunctionClickExample
