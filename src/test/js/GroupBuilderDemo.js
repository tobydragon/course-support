import React from 'react';

import {exampleOf18Students} from "./examples/JsonExamples"
import GroupBuilder from '../../main/js/GroupBuilder';

export const GroupBuilderDemo = props => {
    return (
        <div>
            <GroupBuilder studentsPresent={exampleOf18Students} defaultGroupSize={3} />
        </div>
    );
};

export default GroupBuilderDemo;