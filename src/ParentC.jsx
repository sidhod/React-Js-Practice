import React, { useState } from 'react'
import Component1 from './Comp1'
import Component2 from './Comp2'

function ParentC() {
    const [color, setcolor] = useState();
    let text1 = 'Text1'
    let text2 = 'Text2'
    const [text11, setText1] = useState(text1)
    const [text22, setText2] = useState(text2)
    function ButtonClick1() {
        setText1(text2)
    }
    function ButtonClick2() {
        setText2(text1)
    }
    return (
        <div >
            <h1>`{text11}`</h1>
            <Component1 ButtonClick1={ButtonClick1} />
            <h1>`{text22}`</h1>
            <Component2 ButtonClick2={ButtonClick2} />
        </div>
    )
}
export default ParentC