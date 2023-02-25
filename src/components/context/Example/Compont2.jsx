import React, { useContext } from 'react'
import { Context2 } from './ParentCom'

function Comp2() {
    const name = useContext(Context2)
    return (
        <div style={{ border: '1px solid red' }}>{name}</div>
    )
}

export default Comp2