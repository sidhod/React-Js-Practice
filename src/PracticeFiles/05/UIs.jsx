import { TextField } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { click } from './actions'

function UICom() {
    const [text, settext] = useState({ text: '' })
    const dispatch = useDispatch()
    const selector = useSelector(res => res.textReducer)
    function textValue(event) {
        settext(prevState => ({
            ...prevState,
            text: event.target.value
        }))
    }
    return (
        <div>
            <TextField label='Enter text' onChange={textValue}></TextField>
            <button onClick={() => dispatch(click(text))}>Enter</button>
            <h1>{selector.text}</h1>
        </div>
    )
}

export default UICom