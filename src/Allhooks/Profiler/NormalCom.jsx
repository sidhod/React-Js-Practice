import React from 'react'
import ComponentOne from './ComponentOne'
import { Profiler } from 'react'
import FormExample from '../Form'

function NormalCom() {
    function checkDetail(id, phase, actualDuration, baseDuration, startTime, commitTime) {
        console.log("id-" + id + "phase-" + phase + " duration-" + actualDuration + " baseduration-" + baseDuration + " StartTime-" + startTime + " CommitTime-" + commitTime)
    }
    return (
        <div>
            <Profiler id="CheckP" onRender={checkDetail}>
                <ComponentOne />
                <FormExample />
            </Profiler>
        </div>
    )
}

export default NormalCom