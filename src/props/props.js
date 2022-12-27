import React from 'react';
const ShowNames = (props) => {
    console.log(props);
    return (
        <div>
            < h1 > Hii {props.name}= {props.heroName}</h1>
            {props.children}
        </div>)
}
export default ShowNames;