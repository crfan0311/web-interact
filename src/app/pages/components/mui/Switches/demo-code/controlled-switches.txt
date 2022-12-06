import React from 'react';
import JumboDemoCard from "@jumbo/components/JumboDemoCard";
import {Switch} from "@mui/material";
import code from "../Switches/demo-code/controlled-switches.txt";

const ControlledSwitches = () => {
    const [checked, setChecked] = React.useState(true);
    return (
        <JumboDemoCard title={"Controlled"} demoCode={code} wrapperSx={{backgroundColor: 'background.paper', pt: 0}}>
            <Switch
                checked={checked}
                onChange={(event) => setChecked(event.target.value)}
                inputProps={{'aria-label': 'controlled'}}
            />
        </JumboDemoCard>
    );
};

export default ControlledSwitches;
