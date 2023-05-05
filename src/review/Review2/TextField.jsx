import { TextField } from '@mui/material'
import React, { useState } from 'react'

function TextField01(props) {
    const [searchValue, setSearchValue] = useState({ value: '' })
    const search = (event) => {
        props.getSearch(event.target.value)
    }
    const clickButton = () => {

    }
    return (
        <div>
            <TextField label='enter here' onChange={search} />
            <button onClick={clickButton}>click</button>
        </div>
    )
}

export default TextField01