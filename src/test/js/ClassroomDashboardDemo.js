import React from 'react';

import {exampleOf18Students} from "../resources/examples"
import {ClassroomDashboard} from "../../main/js/ClassroomDashboard"

export const ClassroomDashboardDemo = props => {
    return (
        <div>
            <ClassroomDashboard studentNames={exampleOf18Students} />
        </div>
    )
}