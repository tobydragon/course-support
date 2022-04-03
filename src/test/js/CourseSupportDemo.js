import React from 'react';

import {exampleOf18Students} from "./examples/JsonExamples"
import CourseSupport from "../../main/js/CourseSupport"

export const CourseSupportDemo = (props) => {
    return (
        <div>
            <CourseSupport courseId="220" studentNames={exampleOf18Students} />
        </div>
    );
};

export default CourseSupportDemo;