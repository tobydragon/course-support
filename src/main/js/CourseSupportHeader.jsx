import { Col, Row, Jumbotron, Image } from "react-bootstrap";

export const CourseSupportHeader = (props) => {
    return (
        <Jumbotron>
            <Row>
                <Col className="align-items-center">
                    <Row className="justify-content-center align-items-center">
                            <Image src="./teacherIcon128.png" alt="" />
                            <h1>Course Support </h1>
                    </Row>
                </Col>
            </Row>
        </Jumbotron>
    );
};

export default CourseSupportHeader;