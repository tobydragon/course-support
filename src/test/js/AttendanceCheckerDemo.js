import React from 'react';

import {testRoster} from "./examples/InternalObjectExamples"
import AttendanceChecker from "../../main/js/AttendanceChecker"

export const AttendanceCheckerDemo = props => {
    return (
        <div>
            <AttendanceChecker roster={testRoster} switchStudentStatus={(student)=>console.log("switch called on " + student)} />
        </div>
    )
};

export default AttendanceCheckerDemo;