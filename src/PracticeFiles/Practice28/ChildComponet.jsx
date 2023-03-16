import React from 'react'

function ChildComponet(props) {
    const methodASProps = () => {
        props.upperCase()
    }
    return (
        <div>
            {props.name}
            <button onClick={methodASProps} style={{ backgroundColor: 'red', color: 'white' }}>Click</button>
        </div>

    )
}

export default ChildComponet