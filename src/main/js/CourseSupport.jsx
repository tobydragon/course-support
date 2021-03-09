import { Container } from "react-bootstrap";
import ClassroomDashboard from "./ClassroomDashboard"
import CourseSupportHeader from "./CourseSupportHeader"


const CourseSupport = (props) => {
    return (
        <Container>
            <CourseSupportHeader />
            <ClassroomDashboard studentNames={props.studentNames} />
        </Container>
    );
};

export default CourseSupport;