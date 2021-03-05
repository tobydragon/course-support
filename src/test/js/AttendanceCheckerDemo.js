import React from 'react';

import {exampleOf18Students} from "../resources/examples"
import {AttendanceChecker} from "../../main/js/AttendanceChecker"

export const AttendanceCheckerDemo = props => {
    return (
        <div>
            <AttendanceChecker studentNames={exampleOf18Students} />
        </div>
    )
}