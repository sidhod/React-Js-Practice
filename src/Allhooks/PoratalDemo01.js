import React from 'react'
import ReactDOM from 'react-dom'
function PoratalDemo01() {
    return ReactDOM.createPortal(<h1>Sid</h1>, document.getElementById("portalDemo2"))
}

export default PoratalDemo01