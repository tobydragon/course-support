import './App.css';
import GroupBuilderDemo from './test/js/GroupBuilderDemo';
import AttendanceCheckerDemo from './test/js/AttendanceCheckerDemo';
import ClassroomDashboardDemo from './test/js/ClassroomDashboardDemo';
import SingleStudentSelectorDemo from './test/js/SingleStudentSelectorDemo';
import CourseSupportHeader from './main/js/CourseSupportHeader';
import CourseSupportDemo from './test/js/CourseSupportDemo';
import { AttendanceReportDisplayDemo } from './test/js/AttendanceReportDisplayDemo';

const App = () => {
  return (
    <div className="App">
      <AttendanceReportDisplayDemo />
    </div>
  );
};

export default App;
