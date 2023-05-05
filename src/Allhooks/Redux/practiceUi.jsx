import React from 'react'
import { changeName } from './actions'
import { useDispatch, useSelector } from 'react-redux'

function PracticeUi() {
    const dispatch = useDispatch();
    const selector = useSelector((state) => state.buttonRed1)
    return (
        <div>practiceUi
            <h1>{selector.res}</h1>
            <button onClick={() => dispatch(changeName())}>changeName</button>
        </div>
    )
}

export default PracticeUi