import React, { createContext } from 'react'
import UseContextChild from './UseContextChild'
export const Context3 = createContext();
const ProviderProp1 = Context3.Provider
function UseContextExample() {
    let name = 'Sai'
    return (
        <div>
            <ProviderProp1 value={name}>
                <UseContextChild />
            </ProviderProp1>
        </div>
    )
}

export default UseContextExample