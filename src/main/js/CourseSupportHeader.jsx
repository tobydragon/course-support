import { Col, Row, Jumbotron, Image } from "react-bootstrap";

export const CourseSupportHeader = (props) => {
    return (
        <Jumbotron> 
            <Row className="justify-content-center align-items-center">
                    <Image src="./teacherIcon128.png" alt="" />
                    <h1>DragonLab's Course Support </h1>
            </Row>
        </Jumbotron>
    );
};

export default CourseSupportHeader;