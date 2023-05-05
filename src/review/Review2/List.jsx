import React from 'react'

function List01(props) {
    console.log(props.search)
    return (
        <div>
            <h2>list</h2>
            {
                props.arraylist.filter((value) => {
                    if (value.includes(props.search)) {
                        console.log(true)
                        return value
                    }
                })
            }
        </div>
    )
}

export default List01