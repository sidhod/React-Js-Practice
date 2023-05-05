import React from 'react';
function ListRenderingCom() {
    let arra = ["Sid", "Sidhodhan", "Shubham"]
    return (
        <div>{
            arra.map((res, key) => <h1>{res}{key}</h1>)
        }
        </div>
    )
}
export default ListRenderingCom