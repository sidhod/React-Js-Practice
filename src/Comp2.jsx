import React from 'react'

function Component2(props) {
    function changetext2() {
        props.ButtonClick2()
    }
    return (
        <div>
            <button onClick={changetext2} >Button-2</button>
        </div>
    )
}
export default Component2