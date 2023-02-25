import { bgcolor } from '@mui/system'
import React from 'react'
import { createContext } from 'react'
import Compont1 from './Compont1'
export const Context2 = createContext()
const ProviderProp = Context2.Provider
function ParentCom() {
    let Name1 = "Sidhodhan"
    return (
        <div style={{ border: '1px solid black' }}>
            parent
            <ProviderProp value={Name1}>
                <Compont1 />
            </ProviderProp>
        </div >
    )
}

export default ParentCom