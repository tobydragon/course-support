import {Form} from "react-bootstrap"

export const AttendanceChecker = (props) => {

    function onCheckboxChange(e){
        props.switchStudentStatus(e.target.name)
    }

    function produceCheckbox([studentName, status]){
        if (status === "present"){
            return <Form.Check defaultChecked onChange={onCheckboxChange} type="checkbox" label={studentName} name={studentName} id={studentName+"checkbox"}/>;
        } 
        else {
            return <Form.Check onChange={onCheckboxChange} type="checkbox" label={studentName} name={studentName} id={studentName+"checkbox"}/>;
        }
    }

    return (
        <Form>
            <fieldset>
                <legend> Students </legend>
                {Array.from (props.roster, produceCheckbox)}
            </fieldset>
        </Form>
    );
};