import React from 'react'
import ClickCounter from './ClickCounter'
import MouseHoverCounter from './MouseHoverCounter'
import Counter from './Counter'


function ParentCompPra() {
    return (
        <div>ParentCompPra
            <Counter render1={(counter, setCounter) => <ClickCounter count={counter} incrementC={setCounter} />} />
            <Counter render1={(counter, setCounter) => <MouseHoverCounter count={counter} incrementC={setCounter} />} />

            {/* <ClickCounter />
            // <MouseHoverCounter /> */}
        </div>
    )
}

export default ParentCompPra