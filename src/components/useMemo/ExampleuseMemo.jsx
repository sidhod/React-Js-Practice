import React, { useState, useMemo } from 'react'

function ExampleuseMemo() {
    const [counterOne, setCounterOne] = useState(0)
    const [counterTwo, setCounterTwo] = useState(0)

    const incrementOne = () => {
        setCounterOne(counterOne + 1)
    }

    const incrementTwo = () => {
        setCounterTwo(counterTwo + 1)
    }

    const isEven = useMemo(() => {
        let i = 0
        while (i < 2000000000) i++
        return counterOne
    }, [counterOne])

    return (
        <div>
            <h5>useMemo Hook</h5>
            <div>
                <button onClick={incrementOne}>Count One</button>
                <span>{counterOne}</span>
            </div>
            <div>
                <button onClick={incrementTwo}>Count Two</button>
                <span>{counterTwo}</span>

            </div>
        </div>
    )
}

export default ExampleuseMemo
