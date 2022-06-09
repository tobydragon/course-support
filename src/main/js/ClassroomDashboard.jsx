import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";

import AttendanceChecker from "./AttendanceChecker";
import AttendanceDataService from "./AttendanceDataService";
import GroupBuilder from "./GroupBuilder";
import SingleStudentSelector from "./SingleStudentSelector";

export const presentListFromRosterMap = (rosterMap) => {
    return Array.from(rosterMap).filter( mapEntry => (mapEntry[1] === "present")).map(mapEntry=>mapEntry[0]);
}

export const rosterMapFromNameList = (nameList) => {
    let rosterMap = new Map();
    nameList.forEach(studentName=>(rosterMap.set(studentName, "present")));
    return rosterMap;
}

export const rosterMapFromAttendanceMarks = (attendanceMarks) => {
    if (attendanceMarks !== null && attendanceMarks !== 0){
        let rosterMap = new Map();
        attendanceMarks.forEach(attendanceMark=>(rosterMap.set(attendanceMark.studentId, attendanceMark.status)));
        return rosterMap;
    }
    else {
        return new Map();
    }   
}

export const dayNumberFromAttendanceMarks = (attendanceMarks) => {
    return attendanceMarks !== null && attendanceMarks.length > 0 ? attendanceMarks[0].dayNumber : 1;
}



export const ClassroomDashboard = (props) => {
    //Make the data structure that will track students marked absent or present
    const [roster, setRoster] = useState(rosterMapFromNameList(props.studentNames));
    const [dayNumber, setDayNumber] = useState(1);
    const [attendanceMode, setAttendanceMode] = useState("newDay"); //must be either "newDay" or "updateDay"
    
    useEffect(()=> {
        AttendanceDataService.getRecentAttendanceMarks(props.courseId).then((response) => updateFromAttendanceMarks(response.data, "newDay"));
    }, [props.courseId]);


    const updateFromAttendanceMarks = (attendanceMarks, attendanceMode) => {
        console.log(rosterMapFromAttendanceMarks(attendanceMarks));
        setDayNumber(dayNumberFromAttendanceMarks(attendanceMarks) + 1);
        setRoster(rosterMapFromAttendanceMarks(attendanceMarks));
        setAttendanceMode(attendanceMode);
    }

    //give this to other components that need to update attendanceMarks in the rosterMap
    const switchStudentStatus = (studentName) => {
        if(roster.get(studentName)==="present"){
            roster.set(studentName, "absent");
        }
        else{
            roster.set(studentName, "present");
        }
        setRoster(new Map(roster));
    }

    //give this to other components that need to record attendance to the server
    const recordAttendance = () => {
        const attendanceMarks =  Array.from (roster, ([studentName, status])=> (
            {
                "studentId": studentName,
                "courseId": props.courseId,
                "dayNumber": dayNumber,
                "status": status

            }));
        AttendanceDataService.recordAttendance(attendanceMarks);
    }
    
    return (
        <Container>
            <Row>
                <Col className="col-sm-4">
                    <SingleStudentSelector studentsPresent={presentListFromRosterMap(roster)} />
                </Col>
                <Col className="col-sm-8">
                    <GroupBuilder studentsPresent={presentListFromRosterMap(roster)} defaultGroupSize={3} />
                </Col>
            </Row>
            <Row>
                <AttendanceChecker attendanceMode={attendanceMode} roster={roster} dayNumber={dayNumber} switchStudentStatus={switchStudentStatus} setDayNumber={setDayNumber} recordAttendance={recordAttendance} />
            </Row>
        </Container>
    );
};

export default ClassroomDashboard;