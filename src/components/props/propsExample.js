import React from 'react';
const FullName = (props) => {
    console.log(props);
    return (
        <div>
            < h1 > My Name is {props.FirstName} {props.LastName}</h1>
            {/* {props.children} */}
        </div>)
}
export default FullName;