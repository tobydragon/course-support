import axiosInstance from "../../http-common"

class AttendanceDataService {

    getAllAttendanceMarks(){
        return axiosInstance.get("/attendanceMarks");
    }

    getRecentAttendanceMarks(courseId){
        return axiosInstance.get("/recentAttendanceMarks", {params: {courseId: courseId}});
    }

    getCourseIds(){
        return axiosInstance.get("/courseIds");
    }

    recordAttendance(attendanceMarks){
        return axiosInstance.post("/attendanceMarks", attendanceMarks);
    }

    createAttendanceReport(courseId){
        return axiosInstance.get("/attendanceReport", {params: {courseId: courseId}});
    }
}

export default new AttendanceDataService();