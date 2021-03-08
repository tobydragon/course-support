import { useState } from "react";
import { Container, Row, Button } from "react-bootstrap";


export const selectRandomOneFromList = (list) => {
    return list[Math.floor(Math.random() * list.length)];
}

export const SingleStudentSelector = (props) => {
    const [studentChosen, setStudentChosen] = useState("-");
    
    const onChooseClick = (e) => {
        setStudentChosen(selectRandomOneFromList(props.studentsPresent)+", you're turn!");
    }

    return (
        <Container className="border rounded m-2">
            <Row>
                <label className="px-2"> Choose Random student: </label>
            </Row>
            <Row>
                <Button className="m-2" onClick={onChooseClick}>Choose Next</Button>
                <label className="p-2">{studentChosen}</label>
            </Row>
            
        </Container>
    );
}
