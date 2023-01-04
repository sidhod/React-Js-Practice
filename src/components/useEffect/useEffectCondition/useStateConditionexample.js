import React, { useEffect, useState } from "react";
function CounterTitleConditionExample() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('')
    useEffect(() => {
        console.log("Update")
        document.title = `${firstName}`
    })
    return (
        <div>
            <input type="text" placeholder="first Name" value={firstName} onChange={e => setFirstName(e.target.value)} />
            <input type="text" placeholder="last Name" value={lastName} onChange={e => setLastName(e.target.value)} />
        </div>
    )
}
export default CounterTitleConditionExample