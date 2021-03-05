import { useState } from "react";
import { AttendanceChecker } from "./AttendanceChecker";

export const ClassroomDashboard = (props) => {
    let rosterMapStart = new Map();
    props.studentNames.forEach(studentName=>(rosterMapStart.set(studentName, "present")));
    const [roster, setRoster] = useState(rosterMapStart)

    function switchStudentStatus(studentName){
        console.log("switch student:" + studentName);
        if(roster.get(studentName)==="present"){
            roster.set(studentName, "absent");
        }
        else{
            roster.set(studentName, "present");
        }
        setRoster(new Map(roster));
    }
    
    return (
        <div>
            <AttendanceChecker roster={roster} switchStudentStatus={switchStudentStatus}/>
            {Array.from (roster, ([studentName, status])=>(studentName+":" +status))}
        </div>
    );
};