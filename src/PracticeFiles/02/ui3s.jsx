import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clickButton } from './actions'

function ButtonComponents() {
    const dispatch = useDispatch()
    const selector = useSelector(state => state.buttonsreducers)
    return (
        <div>
            <h1>{"label===>" + selector.label}</h1>
            <button onClick={() => dispatch(clickButton())}>Change</button>
        </div>

    )
}
export default ButtonComponents