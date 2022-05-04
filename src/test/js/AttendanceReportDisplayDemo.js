import React from 'react';

import {exampleCourseAttendance} from "./examples/AttendanceCourseReportExample"

import AttendanceReportDisplay from "../../main/js/AttendanceReportDisplay"


export const AttendanceReportDisplayDemo = (props) => {
    return (
        <div>
            <AttendanceReportDisplay attendanceCourseReport={exampleCourseAttendance} />
        </div>
    );
};

export default AttendanceReportDisplayDemo;