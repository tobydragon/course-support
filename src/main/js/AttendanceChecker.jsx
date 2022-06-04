import {Button, Container, Form} from "react-bootstrap"

export const AttendanceChecker = (props) => {

    const produceDayNumbers = (lastDayNumber) => {
        let dayNumbers = [];
        for (var dayNum= 1; dayNum <= lastDayNumber; dayNum++) {
            dayNumbers.push(dayNum);
        }
        return dayNumbers; 
    }

    const dayNumbers = produceDayNumbers(58);

    //when a checkbox is changed, whomever created this checker by calling the function they sent with the studentName
    const onCheckboxChange = (e) => {
        props.switchStudentStatus(e.target.name)
    }

    const onDayNumberSelected = (e) => {
        props.setDayNumber(e.target.value);
    }

    const onRecordAttendance = (e) => {
        props.recordAttendance(props.dayNumber);
    }

    //takes one key-value pair from the props.roster map and creates a single checkbox with listener from it
    const produceCheckbox = ([studentName, status]) => {
        if (status === "present"){
            return <Form.Check inline checked={true} onChange={onCheckboxChange} type="checkbox" label={studentName} key={studentName} name={studentName} id={studentName+"checkbox"}/>;
        } 
        else {
            return <Form.Check inline checked={false} onChange={onCheckboxChange} type="checkbox" label={studentName} key={studentName} name={studentName} id={studentName+"checkbox"}/>;
        }
    }

    return (
        <Container className="border rounded m-2">
            <h6> Attendance </h6>
            {Array.from (props.roster, produceCheckbox)}
            <Button className="m-2" onClick={onRecordAttendance}>Record Attendance</Button>
            for day
            <select value={props.dayNumber} onChange={onDayNumberSelected} >
                {dayNumbers.map((dayNum) => <option key={dayNum} value={dayNum}>{dayNum}</option>)}
            </select>
        </Container>
    );
};

export default AttendanceChecker;