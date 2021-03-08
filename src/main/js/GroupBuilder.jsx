import { useState } from "react";
import { Button } from "react-bootstrap";



export const GroupBuilder = (props) => {
    const [groupSize, setGroupSize] = useState(props.defaultGroupSize);

    const onGroupSizeChange = (e) => {
        setGroupSize(e.target.value);
    }

    return(
        <div> 
            <label> Make Random Groups: </label>
            <label for="price">Choose the maximum group size: </label>
            <input onChange={onGroupSizeChange} type="range" name="Number In Group" id="groupSizeSlider" min="2" max="5" step="1" value={groupSize} />
            <output for="groupSizeSlider">{groupSize}</output>
            <Button>Create Group</Button>
        </div>
    );
}