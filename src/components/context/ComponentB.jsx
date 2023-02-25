import React from 'react';
import { useContext } from 'react';
import ComponentC from './ComponentC';
import { Context1 } from './ParentComponent';

function ComponentB() {
    const name = useContext(Context1);
    return (
        <div>ComponentB {name}
            <ComponentC />
        </div>

    );
}
export default ComponentB