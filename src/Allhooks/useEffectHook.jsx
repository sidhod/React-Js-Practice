import React, { useEffect, useState } from 'react'

function UseseEffectHook() {
    const [val, setValue] = useState(0)
    useEffect(() => {
        console.log("Sidhodhan", val)
    }, [val])
    function clickButt() {
        setValue(val + 1)
    }
    return (
        <div>
            ClickButton
            <button onClick={clickButt}>Click</button>
        </div>
    )
}

export default UseseEffectHook