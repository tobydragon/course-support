import { useState } from "react";
import { Button } from "react-bootstrap";


export const selectRandomOneFromList = (list) => {
    return list[Math.floor(Math.random() * list.length)];
}

export const SingleStudentSelector = (props) => {
    const [studentChosen, setStudentChosen] = useState("Click for first student");
    
    const onChooseClick = (e) => {
        setStudentChosen(selectRandomOneFromList(props.studentsPresent));
    }

    return (
        <div>
            <label> Choose Random student: </label>
            <Button onClick={onChooseClick}>Choose</Button>
            {studentChosen}
        </div>
    );
}
