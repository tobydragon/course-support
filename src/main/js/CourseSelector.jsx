export const CourseSelector = (props) => {

    const [allCourseIds, setAllCourseIds] = useState(props.allCourseIds);

    const onCourseIdSelected = (e) => {
        props.onCourseIdSelected(e.target.value);
    }
   
    useEffect(()=> {
        AttendanceDataService.getCourseIds().then((response) => setAllCourseIds(response.data));
    }, []);

    return (
        <select value={props.courseId} onChange={onCourseIdSelected} >
            {allCourseIds.map((aCourseId) => <option value={aCourseId}>{aCourseId}</option>)}
        </select>
    );
                
};

export default CourseSupportHeader;