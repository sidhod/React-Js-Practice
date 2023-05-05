import React, { useContext } from 'react';
import CompContextC from './ComContextC';

function CompContextB() {

    return (
        <div>CompContextB
            <CompContextC />
        </div>
    )
}

export default CompContextB