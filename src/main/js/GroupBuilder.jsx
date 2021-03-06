import { useState } from "react";
import { Button } from "react-bootstrap";


export const buildGroups = (student_list, group_size) => {
    // console.log("here");
    let list_to_group = student_list.slice();
    const groups = [];
    let current_group = [];
    groups.push(current_group);
    while (list_to_group.length !== 0){
        if(current_group.length >= group_size){
            current_group = [];
            groups.push(current_group);
        }
        const ridx = Math.floor(Math.random() * list_to_group.length);
        const student = list_to_group[ridx];
        list_to_group = list_to_group.filter(item=>(item !== student));
        current_group.push(student);
        // console.log(list_to_group);
    }
    let index_of_group_to_remove_from = groups.length-2;
    
    //last group will end up with an arbirary amount of people
    //take one from each group second to last down and add to last, until last has enough
    while (groups[groups.length-1].length < group_size-1 && index_of_group_to_remove_from >= 0){
        const groupToRemoveFrom = groups[index_of_group_to_remove_from];
        groups[groups.length-1].push(groupToRemoveFrom.pop());
        index_of_group_to_remove_from -= 1;
    }
    return groups;
}

export const GroupBuilder = (props) => {
    const [groupSize, setGroupSize] = useState(props.defaultGroupSize);
    const [groups, setGroups] = useState([]);

    const onGroupSizeChange = (e) => {
        setGroupSize(e.target.value);
    }

    const onCreateGroupClick = (e) => {
        setGroups(buildGroups(props.studentsPresent, groupSize));
    }

    return(
        <div> 
            <label> Make Random Groups: </label>
            <label>Choose the maximum group size: </label>
            <input onChange={onGroupSizeChange} type="range" name="Number In Group" id="groupSizeSlider" min="2" max="5" step="1" value={groupSize} />
            <output>{groupSize}</output>
            <Button onClick={onCreateGroupClick}> Create Group </Button>
            <ul>
                {groups.map(group=>(<li key={group}> {group} </li>))}
            </ul>
        </div>
    );
}