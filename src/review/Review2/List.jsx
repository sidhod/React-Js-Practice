import React from 'react'

function List01(props) {
    console.log(props.search)
    return (
        <div>
            <h2>list</h2>
            {
                props.arraylist.filter((value) => {


                    return value

                })
            }
        </div>
    )
}

export default List01