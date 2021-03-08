import React from 'react';

import {exampleOf18Students} from "./examples/JsonExamples"
import { GroupSelector } from '../../main/js/GroupSelector';

export const GroupSelectorDemo = props => {
    return (
        <div>
            <GroupSelector studentsPresent={exampleOf18Students} defaultGroupSize={3} />
        </div>
    )
}