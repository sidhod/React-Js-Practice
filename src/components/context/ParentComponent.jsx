import * as React from 'react';
import { createContext } from 'react';
import ComponentA from './ComponentA';
export const Context1 = createContext()
const ProviderN = Context1.Provider
function ParentComponent() {
    let name = "Sai"
    return (
        <div>
            <ProviderN value={name}>
                <ComponentA />
            </ProviderN>

        </div>
    );
}
export default ParentComponent