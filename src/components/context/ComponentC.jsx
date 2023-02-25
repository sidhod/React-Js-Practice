import * as React from 'react';
import { useContext } from 'react';
import { ComponentD } from './ComponentD';
import { Context1 } from './ParentComponent';


function ComponentC() {
    const name = useContext(Context1)
    return (
        <div>
            ComponentC {name}
            <ComponentD />
        </div>
    );
}
export default ComponentC