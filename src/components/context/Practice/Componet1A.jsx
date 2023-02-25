import { TextField } from '@mui/material'
import React, { useState } from 'react'

function Componet1A(props) {
    const [value1, setvalue] = useState({ searchobj: "" })

    function RunSearch(event) {
        setvalue(() => ({

            searchobj: event.target.value
        }))
        props.search(value1)
    }
    return (
        <div>
            <h1>Search here</h1>
            <TextField onChange={RunSearch}></TextField>
        </div>
    )
}

export default Componet1A