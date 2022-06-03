import { useEffect, useState } from "react";
import {Container, Row, Table } from "react-bootstrap"
import AttendanceDataService from "./AttendanceDataService";


const chooseBootstrapClassByStatus = (status) => {
    if (status === "present"){
        return "bg-success";
    }
    else if (status === "absent"){
        return "bg-danger";
    }
    else {
        return "bg-light";
    }
}

const createAttendanceRow = (studentAttendanceReport) => {
    return (
        <tr key={studentAttendanceReport.name}>
            <th>{studentAttendanceReport.name} </th>
            {studentAttendanceReport.marks.map( (mark, index) =><td key={index} className={chooseBootstrapClassByStatus(mark.status)}>{mark.status}</td>)}
        </tr>
        //<ListGroupItem key={studentAttendanceReport.name}> {studentAttendanceReport.name + ": "+ studentAttendanceReport.marks.map(mark=>mark.status+", ")} </ListGroupItem>
    );
}

export const AttendanceReportDisplay = (props) => {

    const [attendanceCourseReport, setAttendanceCourseReport] = useState(props.attendanceCourseReport);

    useEffect(()=> {
        AttendanceDataService.createAttendanceReport(props.courseId).then( (response) => setAttendanceCourseReport(response.data));
    }, [props.courseId]);

    return (
        
        <Container className="border rounded m-2">
            <Row>
                <Table>
                    <tbody>
                        {attendanceCourseReport.studentReports.map((studentReport) =>(createAttendanceRow(studentReport)))}
                    </tbody>
                </Table>
            </Row>
            
        </Container>
    );
}

export default AttendanceReportDisplay;