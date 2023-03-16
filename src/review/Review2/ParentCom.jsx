import React, { useState } from 'react'
import List01 from './List';
import TextField01 from './TextField'


function ParentCom02() {
    const arr = ['sid', 'sai', 'sidhodhan'];
    const [search, setSearch] = useState('')
    const [array, setarray] = useState(['sid', 'sai', 'sidhodhan'])
    function getSearch(value) {
        setSearch((prevState) => ({
            ...prevState,
            value
        }))
    }

    return (
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
            <TextField01 getSearch={getSearch} />
            <List01 arraylist={array} search={search} />
        </div>
    )
}

export default ParentCom02