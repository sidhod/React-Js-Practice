import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { switch1, switch2 } from './actions';

function Interfaces() {
    const dispatch = useDispatch()
    const selectors = useSelector((state) => state.buttonsReducer);
    console.log(selectors)
    return (
        <div>
            <h1>{selectors.label1}</h1>
            <button onClick={() => dispatch(switch1())}>Click</button>
            <h1>{selectors.label2}</h1>
            <button onClick={() => dispatch(switch2())}>Click</button>
        </div >
    )
}

export default Interfaces
