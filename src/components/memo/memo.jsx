import React from 'react'

function MemoExample() {
    console.log("result")
    return (
        <div>Name</div>
    )
}

export default React.memo(MemoExample)