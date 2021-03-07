import { Button } from "react-bootstrap";


export const selectRandomOneFromList = (list) => {
    return list[Math.floor(Math.random() * list.length)];
}

export const SingleStudentSelector = (props) => {
    return (
        <div>
            <label> Choose Random student: </label>
            <Button onClick={selectRandomOneFromList(props.studentsPresent)}>Choose</Button>
        </div>
    );
}
