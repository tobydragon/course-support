import {dayNumberFromAttendanceMarks, presentListFromRosterMap, rosterMapFromAttendanceMarks, rosterMapFromNameList} from "../../main/js/ClassroomDashboard"
import {testRoster} from "./examples/InternalObjectExamples"
import {attendanceMarksExample} from "./examples/AttendanceMarksExample"


describe('ClassroomDashboard', () => {
    
    test('presentListFromRosterMap', () => {
        expect(presentListFromRosterMap(testRoster)).toStrictEqual(["a", "c", "f", "g"]);
        expect(presentListFromRosterMap(new Map())).toStrictEqual([]);
    });
    
    test('rosterMapFromNameList', () => {
        const nameList = ["a", "c", "f", "g"];
        const result = rosterMapFromNameList(nameList);
        for (const name of nameList){
            expect(result.get(name)).toBe("present");
        }
        expect(rosterMapFromNameList([]).size).toBe(0);
    });

    test('rosterMapFromAttendanceMarks', () => {
        const result = rosterMapFromAttendanceMarks(attendanceMarksExample);
        expect(result.size).toBe(5);
        for (const attendanceMark of attendanceMarksExample){
            expect(result.get(attendanceMark.studentId)).toBe(attendanceMark.status);
        }
        expect(rosterMapFromAttendanceMarks([]).size).toBe(0);
    });

    test('dayNumberFromAttendanceMarks', () => {
        expect(dayNumberFromAttendanceMarks(attendanceMarksExample)).toStrictEqual(6);
        expect(dayNumberFromAttendanceMarks(new Map())).toStrictEqual(1);
    });

});