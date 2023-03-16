
// array.map(res => console.log(res))
import React from 'react'

function ArrayMethods() {
    let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
    return (
        <div>
            <div>{
                array.map(res => <h5>{res}</h5>)
            }</div>
            <div>{
                array.filter(res => {
                    if (res === 2) {
                        return res
                    }
                })

            }
                <h1>Find value{array[1]}</h1>
            </div>
            <div>{
                array.slice(2, 5)
            }
            </div>
        </div>

    )
}

export default ArrayMethods