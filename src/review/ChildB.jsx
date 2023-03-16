import React, { useContext } from 'react'
import { Context03 } from './ParentCom'

function ChildB() {
    const text = useContext(Context03)
    return (
        <div>{text}</div>
    )
}

export default ChildB