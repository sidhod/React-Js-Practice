import React from 'react'

function ListRendering() {
    let arr = ["Game", "Name"]
    let newarr = arr.map(words => <h1>{words}</h1>)
    return (
        <div>{
            newarr
        }</div>
    )
}
export default ListRendering;
