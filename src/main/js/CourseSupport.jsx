import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { exampleCourseAttendance } from "../../test/js/examples/AttendanceCourseReportExample";
import AttendanceReportDisplay from "./AttendanceReportDisplay";
import ClassroomDashboard from "./ClassroomDashboard"
import CourseSupportHeader from "./CourseSupportHeader"

const CourseSupport = (props) => {

    const [courseId, setCourseId] = useState(props.courseId);

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<CourseSupportHeader courseId={courseId} allCourseIds={[]} onCourseIdSelected={setCourseId} /> }>
                    <Route index element={<ClassroomDashboard courseId={courseId} studentNames={props.studentNames} /> }/>
                    <Route path="attendancereport" element={<AttendanceReportDisplay courseId={courseId} attendanceCourseReport={exampleCourseAttendance} />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default CourseSupport;