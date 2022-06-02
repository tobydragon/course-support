import { useEffect, useState } from "react";
import {Button, Container, Row, Table } from "react-bootstrap"
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

    const [allCourseIds, setAllCourseIds] = useState(props.allCourseIds);
    const [courseId, setCourseId] = useState(props.attendanceCourseReport.courseId);
    const [attendanceCourseReport, setAttendanceCourseReport] = useState(props.attendanceCourseReport);

    useEffect(()=> {
        AttendanceDataService.getCourseIds().then((response) => setAllCourseIds(response.data));
        AttendanceDataService.createAttendanceReport(courseId).then( (response) => setAttendanceCourseReport(response.data));
    }, [courseId]);

    const onCourseIdSelected = (e) => {
        setCourseId(e.target.value);
    }

    return (
        
        <Container className="border rounded m-2">
            <Row>
                <h6> Attendance report for: </h6>
                <select value={courseId} onChange={onCourseIdSelected} >
                {allCourseIds.map((aCourseId) => <option value={aCourseId}>{aCourseId}</option>)}
            </select>
            </Row>
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