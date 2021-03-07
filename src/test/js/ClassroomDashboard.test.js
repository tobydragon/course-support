import {presentListFromRosterMap} from "../../main/js/ClassroomDashboard"

describe('ClassroomDashboard', () => {
    test('presentListFromRosterMap', () => {
        const testMap = new Map();
        testMap.set("a", "present");
        testMap.set("b", "absent");
        testMap.set("c", "present");
        testMap.set("d", "absent");
        testMap.set("e", "absent");
        testMap.set("f", "present");
        testMap.set("g", "present");

        expect(presentListFromRosterMap(testMap)).toStrictEqual(["a", "c", "f", "g"]);
        expect(presentListFromRosterMap(new Map())).toStrictEqual([]);
    });
});