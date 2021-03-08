import { useState } from "react";
import { Container, Row, Button } from "react-bootstrap";


export const selectRandomOneFromList = (list) => {
    return list[Math.floor(Math.random() * list.length)];
}

export const SingleStudentSelector = (props) => {
    const [studentChosen, setStudentChosen] = useState("-");
    
    const onChooseClick = (e) => {
        setStudentChosen(selectRandomOneFromList(props.studentsPresent)+", your turn!");
    }

    return (
        <Container className="border rounded m-2">
            <Row>
                <h6 className="px-2"> Choose Random student: </h6>
            </Row>
            <Row>
                <Button className="m-2" onClick={onChooseClick}>Choose Next</Button>
                <h4 className="p-2">{studentChosen}</h4>
            </Row>
            
        </Container>
    );
}
