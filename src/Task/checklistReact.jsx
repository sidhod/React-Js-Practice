import React, { useState } from 'react'

function ChecklistReact() {
    const [checked, setChecked] = React.useState(true);
    const [Data, setData] = useState({ name: '', lastName: '', checVal: [], gender: 'male' })
    console.log(Data);
    const textChanger1 = (event) => {
        setData(prevState => ({
            ...prevState,
            name: event.target.value
        }))
    }
    const textChanger2 = (event) => {
        setData(prevState => ({
            ...prevState,
            lastName: event.target.value
        }))
    }
    const handleChange = (event) => {
        setData(result => ({
            ...result,
            checVal: event.target.value
        }))
    };
    const [gender, setGender] = useState("male")

    const onOptionChange = e => {
        setData(prevState => ({
            ...prevState,
            gender: e.target.value
        }))
    }
    console.log(gender)

    return (
        <div>
            <h1>HTML froms</h1>
            <form >
                <label>First name:</label>
                <br />
                <input type='text' onChange={textChanger1} />
                <br />
                <label>Last name:</label>
                <br />
                <input type='text' onChange={textChanger2} />
                <br />
                <input type="submit" />
                <br />
                <input type='checkbox' value="Sid"
                    onChange={handleChange} />
                <label>Sai</label>
                <br />
                <input type='checkbox' id="check" value="Sai"
                    onChange={handleChange} />
                <label>Sid</label>
                <br />
                <input type='radio' value="male" checked={Data.gender === "male"} onChange={onOptionChange} />
                <label>Male</label>
                <input type='radio' value="female" checked={Data.gender === "female"} onChange={onOptionChange} />
                <label>Female</label>
            </form>
        </div>
    )
}

export default ChecklistReact