import { buildGroups } from "../../main/js/GroupBuilder";
import { exampleOf18Students } from "./examples/JsonExamples";

describe('GroupBuilder', () => {
    test('buildGroup', () => {
        const groups = buildGroups(exampleOf18Students, 3);
        
        expect(groups.length).toStrictEqual(6);
        
        let studentsNotAssigned = Array.from(exampleOf18Students);
        for(let group of groups){
            expect(groups.length).toStrictEqual(3);
            for(student of group){
                expect(studentsNotAssigned.includes(student)).toBeTruthy();
                studentsNotAssigned = studentsNotAssigned.filter(item => item !== student)
            }
        }
        expect(studentsNotAssigned).toStrictEqual([]);
    });
});