import React, { useContext } from 'react';
import { Context1 } from './ParentComponent';
export const ComponentD = () => {
    const name = useContext(Context1)
    return (
        <div>
            ComponentD {name}
        </div>
    )
}
