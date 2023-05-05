import React, { useState } from 'react';
function FormExample(event) {
    const [firstNam, setfirstName] = useState({ firstName: '', lastName: '' })
    const [selectedOp, setSelectedOp] = useState("Sidhodhan")
    function firstName(event) {
        setfirstName(prevState => ({
            ...prevState,
            firstName: event.target.value
        }))
    }
    function lastName(event) {
        setfirstName(prevState => ({
            ...prevState,
            lastName: event.target.value
        }))
    }
    function handelSelect(event) {
        setSelectedOp(event.target.value)

    }
    console.log(firstNam)

    return (
        <div>
            <form>
                <label>Enter Your Name
                    <input type="text" onChange={event => firstName(event)} />
                </label>
                <label>Last Name
                    <input type="text" onChange={event => lastName(event)} />
                </label>
                <input type='submit' />
                <br />
                <select value={selectedOp} onChange={handelSelect}>
                    <option value="Sid">Sid</option>
                    <option value="Sidhodhan">Sidhodhan</option>
                    <option value="Si">Si</option>
                </select>
            </form>
        </div>
    )
}
export default FormExample