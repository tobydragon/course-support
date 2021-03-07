import { useState } from "react";
import { AttendanceChecker } from "./AttendanceChecker";

export const ClassroomDashboard = (props) => {
    //Make the data structure that will track students marked absent or present
    let rosterMapStart = new Map();
    props.studentNames.forEach(studentName=>(rosterMapStart.set(studentName, "present")));
    const [roster, setRoster] = useState(rosterMapStart);

    //a function to give to others than need to be able to effect change on the data structure
    const switchStudentStatus = (studentName) => {
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
            {Array.from (roster, ([studentName, status])=>(studentName+":" +status + " "))}
        </div>
    );
};