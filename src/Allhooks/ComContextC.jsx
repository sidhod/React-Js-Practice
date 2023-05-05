import React, { useContext } from "react";
import { Context05 } from "./useContextHook";
function CompContextC() {
    const res = useContext(Context05)
    return (
        <div>
            {res}
        </div>
    )
}
export default CompContextC