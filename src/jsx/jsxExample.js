import React from "react";
const Display = () => {
    // // //with jsx
    // return (
    //     <form>
    //         <label for="fname">First name:</label><br></br>
    //         <input type="text" id="fname" name="fname"></input>
    //     </form>
    // )
    //withpot jsx
    return React.createElement('form', null, React.createElement('label', null, 'First name:'), React.createElement('input', { type: 'text' }))
}
export default Display
