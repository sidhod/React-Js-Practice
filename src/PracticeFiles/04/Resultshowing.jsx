import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addition } from './actions'

function Resultshowing() {
    const dispatch = useDispatch()
    const selector = useSelector(res => res.addreducers)

    return (
        <div><h1>{selector.result}
        </h1>
            <button onClick={() => dispatch(addition(45, 60))}>add</button></div>
    )
}

export default Resultshowing