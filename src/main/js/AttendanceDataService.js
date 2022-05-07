import axiosInstance from "../../http-common"

class AttendanceDataService {

    getAllAttendanceMarks(){
        return axiosInstance.get("/attendanceMarks");
    }

    recordAttendance(attendanceMarks){
        console.log("In recordAttendance, marks:", attendanceMarks);
        return axiosInstance.post("/attendanceMarks", attendanceMarks);
    }

    createAttendanceReport(courseId){
        return axiosInstance.get("/attendanceReport", {params: {courseId: courseId}});
    }
}

export default new AttendanceDataService();