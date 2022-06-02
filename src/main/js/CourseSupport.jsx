import { Container } from "react-bootstrap";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { exampleCourseAttendance } from "../../test/js/examples/AttendanceCourseReportExample";
import AttendanceReportDisplay from "./AttendanceReportDisplay";
import ClassroomDashboard from "./ClassroomDashboard"
import CourseSupportHeader from "./CourseSupportHeader"

const CourseSupport = (props) => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<CourseSupportHeader />}>
                    <Route index element={<ClassroomDashboard courseId={props.courseId} studentNames={props.studentNames} />} />
                    <Route path="attendancereport" element={<AttendanceReportDisplay attendanceCourseReport={exampleCourseAttendance} allCourseIds={[]} />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default CourseSupport;