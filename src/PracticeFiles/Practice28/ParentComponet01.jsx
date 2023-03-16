import React, { useEffect, useState } from 'react'
import ChildComponet from './ChildComponet'
//1.passing props
//2.method as a props

function ParentComponete01() {
    const [update, setUpdate] = useState('Sai')
    function upperCase() {
        console.log('call')
        setUpdate('Sidhodhan')
    }
    return (
        <div>
            <ChildComponet name={update} upperCase={upperCase} />
        </div>

    )
}

export default ParentComponete01