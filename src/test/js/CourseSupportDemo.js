import React from 'react';

import {exampleOf18Students} from "./examples/JsonExamples"
import CourseSupport from "../../main/js/CourseSupport"

export const CourseSupportDemo = (props) => {
    return (
        <div>
            <CourseSupport courseId="comp171" studentNames={[]} />
        </div>
    );
};

export default CourseSupportDemo;