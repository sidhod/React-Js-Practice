import { Button } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { useState } from 'react'

function ConditionalRendering() {
    const [condition, setCondition] = useState(false)
    function controller() {
        console.log(condition)
        if (condition === true)
            setCondition(false)
        else {
            setCondition(true)
        }
    }
    return (
        <div>

            <button onClick={controller}>Click</button>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '15px' }}>
                {
                    // condition ? <Box style={{ border: '1px solid black', width: '50px', height: '50px', backgroundColor: 'red' }} /> : <Box style={{ border: '1px solid black', width: '50px', height: '50px', backgroundColor: 'blue' }} />

                }
            </div>

        </div>
    )
}

export default ConditionalRendering