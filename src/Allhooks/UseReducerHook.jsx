import React, { useReducer } from 'react';
const intialState = {
    name: 'Sid'
}
const reducer = (state, action) => {
    switch (action.type) {
        case 'Sid': return {

            name: 'Sidhodhan'

        }
        case 'Sai': return {

            name: 'Sai Kamble'

        }
        default: return state
    }
}
function UserReducerHook() {

    const [val, dispatch] = useReducer(reducer, intialState)
    return (
        <div>
            <h1>{val.name}</h1>
            <button onClick={() => dispatch({ type: 'Sid' })}>click1</button>
            <button onClick={() => dispatch({ type: 'Sai' })}>click2</button>
        </div>
    )
}
export default UserReducerHook