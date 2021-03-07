import {Form} from "react-bootstrap"

export const AttendanceChecker = (props) => {

    //when a checkbox is changed, whomever created this checker by calling the function they sent with the studentName
    const onCheckboxChange = (e) => {
        props.switchStudentStatus(e.target.name)
    }

    console.log(props.presentRoster);
    return (
        <div>
            <legend> Students </legend>
            {props.presentRoster.map(studentName=> <Form.Check defaultChecked onChange={onCheckboxChange} type="checkbox" label={studentName} key={studentName} name={studentName} id={studentName+"checkbox"}/>)}
            {props.absentRoster.map(studentName=> <Form.Check onChange={onCheckboxChange} type="checkbox" label={studentName} key={studentName} name={studentName} id={studentName+"checkbox"}/>)}
        </div>
    );
};