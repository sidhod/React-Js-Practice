import React, { useState } from 'react';
function ConditionalRendering1() {
    const [toogle, settoggle1] = useState(false)
    function changer() {
        settoggle1(true)
    }
    return (
        <div>
            <div style={{ backgroundColor: 'red' }}>
                {
                    toogle ? <div>Sai</div> : <div>Sidhodhan</div>
                }
            </div>
            <button onClick={changer} >Click1</button>
        </div>
    )
}
export default ConditionalRendering1