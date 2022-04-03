import axiosInstance from "../../http-common"

class AttendanceDataService {

    getAllAttendanceMarks(){
        return axiosInstance.get("/attendanceMarks");
    }

    recordAttendance(attendanceMarks){
        console.log("In recordAttendance, marks:", attendanceMarks);
        return axiosInstance.post("/attendanceMarks", attendanceMarks);
    }
}

export default new AttendanceDataService();