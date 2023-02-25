import React from 'react'
import ReactDOM from 'react-dom'

function PortalExample() {
    return ReactDOM.createPortal(
        <div style={{ backgroundColor: 'red', border: '1px solid black', height: '50px', width: '50px' }}></div>,
        document.getElementById('portal-root')
    )
}

export default PortalExample