import { TextField } from '@mui/material'
import React, { useState } from 'react'

function TextField01(props) {
    const [searchValue, setSearchValue] = useState({ value: '' })
    const search = (event) => {
        setSearchValue((prevState) => ({
            ...prevState,
            value: event.target.value
        }))
        props.getSearch(searchValue)

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