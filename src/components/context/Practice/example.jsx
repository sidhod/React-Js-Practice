import { Box } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Componet1A from './Componet1A'
import Componet2B from './Componet2B'

function Parent() {
    let list = ['sai', 'sid', 'roshan']
    const [arra, setarra] = useState(['sai', 'sid', 'roshan'])

    function Serach(value) {
        console.log(value)
        let bool = false
        let arr = list.filter(name => {
            if (name.includes(value.searchobj)) {
                return name
            }
        })
        console.log(arr)
        if (true)
            setarra(arr)
    }

    return (
        <div style={{ border: '1px solid red', display: 'flex', justifyContent: 'space-around' }}>
            <div>
                {arra.map(
                    res => <Box style={{ border: '1px solid red' }} >
                        <h2>{res}</h2>
                    </Box>
                )
                }
            </div>


            <Componet1A search={Serach} />
        </div>
    )
}

export default Parent