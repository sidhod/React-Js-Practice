import React from 'react'
import CompContextA from './CompContextA'
import { createContext } from 'react'
export const Context05 = createContext()
function UseContextHook() {
    const ProviderContextCom = Context05.Provider
    return (
        <div>
            Parent Com
            <ProviderContextCom value={"Sidhodhan"}>
                <CompContextA />
            </ProviderContextCom>

        </div>
    )
}

export default UseContextHook