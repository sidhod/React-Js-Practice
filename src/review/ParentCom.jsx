import { TextField } from '@mui/material'
import React, { createContext, useState } from 'react'
import ChildA from './ChildA'
import ChildC from './ChildC'
export const Context03 = createContext()
function ParentCom01() {

    const Priovidercontext = Context03.Provider
    const [text, setText] = useState({ text: '' })
    function typetext(event) {
        setText(prevState => ({
            ...prevState,
            text: event.target.value
        }))

    }
    console.log(text)
    return (
        <div>
            <TextField label='enter text' onChange={typetext} />
            <Priovidercontext value={text.text}>
                <ChildA />
                <ChildC />
            </Priovidercontext>

        </div>
    )
}

export default ParentCom01