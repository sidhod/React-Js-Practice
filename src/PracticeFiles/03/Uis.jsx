import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { click1, click2 } from './actions'


function Uis() {
    const dispatch = useDispatch()
    const selector = useSelector(state => state.clickreducer)
    return (
        <div style={{ width: '50%', display: 'flex', flexDirection: 'column', justifyItems: 'center', justifyContent: 'center' }}>

            <button onClick={() => dispatch(click1())}>Click1</button>
            <button onClick={() => dispatch(click2())}>Click2</button>
            <div style={{ width: '30%', height: '30%', color: 'black', backgroundColor: `red`, border: '1px solid black' }}>{selector.text}</div>
        </div>
    )
}

export default Uis