import React, { useCallback, useState } from 'react'
import Button from './Button'
import Counter from './Counter'
import Title from './Title'

function UseCallBack() {
    const [age, setAge] = useState(15)
    const [salary, setsalary] = useState(50000)
    const incrementAge = useCallback(() => {
        setAge(age + 1)
    }, [age])
    const incrementSalary = useCallback(() => {
        setsalary(salary + 10000)
    }, [salary])
    return (
        <div>
            <Title />
            <Counter text='Age' count={age} />
            <Button handleClick={incrementAge}>Increment Age</Button>
            <Counter text='salary' count={salary} />
            <Button handleClick={incrementSalary}>Increment Salary</Button>
        </div>
    )
}
export default UseCallBack
