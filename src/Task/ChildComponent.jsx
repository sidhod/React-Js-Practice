import React, { useState } from 'react'

function ChildComponent(props) {
    const [value, setValue] = useState({ value: '' });
    function textFieldValue(event) {
        setValue(prev => ({
            ...prev,
            value: event.target.value
        }))
    }
    function submitEmail() {
        props.showresult(value)

    }
    return (
        <div>ChildComponent
            <input type='text' onChange={textFieldValue} />
            <button onClick={submitEmail}>Submit Button</button>
        </div>
    )
}

export default ChildComponent