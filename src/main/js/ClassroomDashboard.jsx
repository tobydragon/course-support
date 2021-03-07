import { useState } from "react";
import { AttendanceChecker } from "./AttendanceChecker";
import { SingleStudentSelector } from "./SingleStudentSelector";

export const ClassroomDashboard = (props) => {
    //Make the data structure that will track students marked absent or present
    const [presentRoster, setPresentRoster] = useState(props.studentNames);
    const [absentRoster, setAbsentRoster] = useState([]);

    //a function to give to others than need to be able to effect change on the data structure
    const switchStudentStatus = (studentToSwitch) => {
        if(presentRoster.includes(studentToSwitch)){
            setPresentRoster(presentRoster.filter(aStudent=>aStudent!==studentToSwitch));
            //pass a function that says how to make a new list from the old list 
            setAbsentRoster(oldRoster => [...oldRoster, studentToSwitch]);
        }
        else if(absentRoster.includes(studentToSwitch)){
            setAbsentRoster(absentRoster.filter(aStudent=>aStudent!==studentToSwitch));
            setPresentRoster(oldRoster => [...oldRoster, studentToSwitch]);
        }
        else {
            throw new Error("student not found in either roster");
        }
    }
    
    return (
        <div>
            <AttendanceChecker presentRoster={presentRoster} absentRoster={absentRoster} switchStudentStatus={switchStudentStatus}/>
        </div>
    );
};