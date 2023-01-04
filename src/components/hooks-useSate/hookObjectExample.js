import React, { useState } from "react";
function HookObjectExample() {
    const [name, setName] = useState({ firstName: '', lastName: '', age: '' })

    return (
        <form>

            <h1>First Name={name.firstName}</h1>
            <h1>Last Name={name.lastName}</h1>
            <h1>Age={name.age}</h1>
            <input type="text" value={name.firstName} onChange={e => setName({ ...name, firstName: e.target.value })} placeholder="First name" /><br />
            <input type="text" value={name.lastName} onChange={e => setName({ ...name, lastName: e.target.value })} placeholder="Last name" /><br />
            <input type="text" value={name.lastName} onChange={e => setName({ ...name, age: e.target.value })} placeholder="Age" />
            <h1>{JSON.stringify(name)}</h1>
        </form>
    )
}
export default HookObjectExample;