import {Form} from "react-bootstrap"

export const AttendanceChecker = (props) => {

    //when a checkbox is changed, whomever created this checker by calling the function they sent with the studentName
    const onCheckboxChange = (e) => {
        props.switchStudentStatus(e.target.name)
    }

    //takes one key-value pair from the props.roster map and creates a single checkbox with listener from it
    const produceCheckbox = ([studentName, status]) => {
        if (status === "present"){
            return <Form.Check defaultChecked onChange={onCheckboxChange} type="checkbox" label={studentName} key={studentName} name={studentName} id={studentName+"checkbox"}/>;
        } 
        else {
            return <Form.Check onChange={onCheckboxChange} type="checkbox" label={studentName} key={studentName} name={studentName} id={studentName+"checkbox"}/>;
        }
    }

    return (
        <div>
            <legend> Students </legend>
            {Array.from (props.roster, produceCheckbox)}
        </div>
    );
};