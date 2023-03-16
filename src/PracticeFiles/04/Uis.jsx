import { TextField } from '@mui/material'
import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addition, substraction } from './actions'
import Resultshowing from './Resultshowing'

function Uis04() {
    const [numbers, setNumbers] = useState({ Number1: null, Number2: null, result: null })
    const Number1 = (event) => {
        setNumbers((prevState) => ({
            ...prevState,
            Number1: event.target.value

        }))
    }
    const Number2 = (event) => {
        setNumbers((prevState) => ({
            ...prevState,
            Number2: event.target.value
        }))
    }
    const addNumbers = () => {
        let result = parseInt(numbers.Number1) + parseInt(numbers.Number2)
        setNumbers((prevState) => ({
            ...prevState,
            result: result
        }))
    }
    console.log(numbers)
    const dispatch = useDispatch()
    const selector = useSelector(res => res.addreducers)
    return (
        <div style={{ height: '80vh', width: '60vw', border: '1px solid red', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <TextField label='Enter No 1' onChange={Number1} />
            <TextField label='Enter No 2' onChange={Number2} />
            <a><button onClick={() => dispatch(addition(numbers.Number1, numbers.Number2))}>ADD</button></a>
            <button onClick={() => dispatch(substraction(numbers.Number1, numbers.Number2))}>Sub</button>
            <h1>{selector.result}</h1>
            <Resultshowing />
        </div>
    )
}

export default Uis04