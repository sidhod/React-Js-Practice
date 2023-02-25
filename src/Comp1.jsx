import React from 'react'

function Component1(props) {
  function changetext1() {
    props.ButtonClick1()
  }
  return (
    <div>
      <button onClick={changetext1}>Button-1</button>
    </div>
  )
}
export default Component1