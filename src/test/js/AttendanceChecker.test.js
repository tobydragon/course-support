import { render, screen } from '@testing-library/react';
import AttendanceChecker from '../../main/js/AttendanceChecker';

const stubFunction = ()=> { };

test('AtteandanceCheckerOld', () => {
    render(
        <AttendanceChecker 
            attendanceMode={"updateDay"} 
            roster={[]} 
            dayNumber={1} 
            switchStudentStatus={stubFunction} 
            setDayNumber={stubFunction} 
            recordAttendance={stubFunction} 
        />
    );
    expect(screen.getByRole("button")).toHaveTextContent("Record Attendance");

});

test('AttendanceCheckerNewDay', () => {
    render(
        <AttendanceChecker 
            attendanceMode={"newDay"} 
            roster={[]} 
            dayNumber={1} 
            switchStudentStatus={stubFunction} 
            setDayNumber={stubFunction} 
            recordAttendance={stubFunction} 
        />
    );
    expect(screen.getByRole("button")).toHaveTextContent("Record New for Day 1");
});

test('AttendanceCheckerUpdateDay', () => {
    render(
        <AttendanceChecker 
            attendanceMode={"updateDay"} 
            roster={[]} 
            dayNumber={1} 
            switchStudentStatus={stubFunction} 
            setDayNumber={stubFunction} 
            recordAttendance={stubFunction} 
        />
    );
    expect(screen.getByRole("button")).toHaveTextContent("Update for Day 1");
});
