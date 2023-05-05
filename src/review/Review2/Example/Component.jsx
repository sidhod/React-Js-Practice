import { Paper, TextField } from '@mui/material'
import React, { useState } from 'react'
import Compo02 from './Comonet02'

function Component01() {
    let arr = ["sai", "sid"]
    const [value, setValue] = useState({ value: '', value2: '', search: '' })
    function textValue(event) {
        setValue(prevState => ({
            ...prevState,
            value: event.target.value
        }))
    }
    function textFieldValue(event) {
        console.log(event.target.value)
        setValue(prevState => ({
            ...prevState,
            value2: event.target.value
        }))
    }
    function valueChange(event) {
        setValue(prevState => ({
            ...prevState,
            search: event.target.value
        }))
    }
    console.log(value.search)
    return (
        <div>
            <TextField label="Enter value" onChange={textValue} />
            <Compo02 value={value} textFieldValue={textFieldValue} />
            <TextField label="search" onChange={valueChange} />
            <div>{value.value2}</div>
            <div>{
                arr.map((res) => {
                    if (res.toLowerCase().includes(value.search.toLowerCase())) {
                        return <Paper elevation={3} style={{ width: '100vw', height: '28px', marginTop: '10px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}><h2>{res}</h2></Paper>
                    }
                })

            }</div>
        </div >
    )
}

export default Component01