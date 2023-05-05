import { color } from '@mui/system'
import React from 'react'
import './givStyle.css'

function TypesofCss() {
    const giveStyle = {
        color: 'blue'
    }
    return (
        <div>TypesofCss
            <h1 style={{ color: 'red', borderBottom: '1px solid red', fontSize: '40px', fontFamily: 'inherit', fontStyle: 'italic' }}>Sidhodhan</h1>
            <h2 style={giveStyle}>Sid</h2>
            <h3>Sid</h3>
        </div >
    )
}

export default TypesofCss