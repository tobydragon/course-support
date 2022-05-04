import { useState } from "react";
import {Button, Container, Form} from "react-bootstrap"

export const AttendanceChecker = (props) => {

    const produceDayNumbers = (lastDayNumber) => {
        let dayNumbers = [];
        for (var dayNum= 1; dayNum <= lastDayNumber; dayNum++) {
            dayNumbers.push(dayNum);
        }
        return dayNumbers; 
    }

    //defaults for now
    const [dayNumber, setDayNumber] = useState(6);
    const dayNumbers = produceDayNumbers(58);

    //when a checkbox is changed, whomever created this checker by calling the function they sent with the studentName
    const onCheckboxChange = (e) => {
        props.switchStudentStatus(e.target.name)
    }

    const onDayNumberSelected = (e) => {
        setDayNumber(e.target.value);
    }

    const onRecordAttendance = (e) => {
        props.recordAttendance(dayNumber);
    }

    //takes one key-value pair from the props.roster map and creates a single checkbox with listener from it
    const produceCheckbox = ([studentName, status]) => {
        if (status === "present"){
            return <Form.Check inline defaultChecked onChange={onCheckboxChange} type="checkbox" label={studentName} key={studentName} name={studentName} id={studentName+"checkbox"}/>;
        } 
        else {
            return <Form.Check inline onChange={onCheckboxChange} type="checkbox" label={studentName} key={studentName} name={studentName} id={studentName+"checkbox"}/>;
        }
    }

    return (
        <Container className="border rounded m-2">
            <h6> Attendance </h6>
            {Array.from (props.roster, produceCheckbox)}
            <Button className="m-2" onClick={onRecordAttendance}>Record Attendance</Button>
            for day
            <select value={dayNumber} onChange={onDayNumberSelected} >
                {dayNumbers.map((dayNum) => <option value={dayNum}>{dayNum}</option>)}
            </select>
        </Container>
    );
};

export default AttendanceChecker;