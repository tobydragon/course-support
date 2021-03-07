import React from 'react';

import {exampleOf18Students} from "../resources/examples"
import {AttendanceChecker} from "../../main/js/AttendanceChecker"

export const AttendanceCheckerDemo = props => {
    return (
        <div>
            <AttendanceChecker presentRoster ={["Caitlyn", "Conner"]} absentRoster={["Bill", "Ted"]} switchStudentStatus={(student)=>console.log("switch called on " + student)} />
        </div>
    )
}