import { Container } from "react-bootstrap";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { exampleCourseAttendance } from "../../test/js/examples/AttendanceCourseReportExample";
import AttendanceReportDisplay from "./AttendanceReportDisplay";
import ClassroomDashboard from "./ClassroomDashboard"
import CourseSupportHeader from "./CourseSupportHeader"

const CourseSupport = (props) => {

    const [courseId, setCourseId] = useState(props.courseId);
    
    setCourseId = (newCourseId) => {
        setCourseId(newCourseId);
    }

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<CourseSupportHeader courseId={courseId} allCourseIds={[]} onCourseIdSelected={setCourseId} /> }>
                    <Route index element={<ClassroomDashboard courseId={courseId} studentNames={props.studentNames} /> }/>
                    <Route path="attendancereport" element={<AttendanceReportDisplay attendanceCourseReport={exampleCourseAttendance} />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default CourseSupport;