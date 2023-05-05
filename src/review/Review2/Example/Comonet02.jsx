import { TextField } from '@mui/material'
import React from 'react'

function Compo02(props) {
    function changeValue(event) {
        props.textFieldValue(event)
    }
    return (
        <div>
            <div>{props.value.value}</div>
            <TextField label="Enter value 01" onChange={changeValue} />
        </div>

    )
}

export default Compo02