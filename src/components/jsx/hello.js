import React from "react";
const Hello = () => {
    // //with jsx
    // return (
    //     <div className="hello">
    //         <h1>Hello Sid</h1>
    //     </div>
    // )
    return React.createElement('div', { id: "hello" }, React.createElement('h1', { className: "Sid" }, 'Hello Sid'))
}

export default Hello