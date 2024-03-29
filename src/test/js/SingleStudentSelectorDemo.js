import React from 'react';

import {exampleOf18Students} from "./examples/JsonExamples"
import SingleStudentSelector from '../../main/js/SingleStudentSelector';

export const SingleStudentSelectorDemo = (props) => {
    return (
        <SingleStudentSelector studentsPresent={exampleOf18Students} />
    );
};

export default SingleStudentSelectorDemo;