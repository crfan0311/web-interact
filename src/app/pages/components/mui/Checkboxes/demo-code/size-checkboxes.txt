import React from 'react';
import JumboDemoCard from "@jumbo/components/JumboDemoCard";
import {Checkbox} from "@mui/material";
import Div from "@jumbo/shared/Div";
import code from "../Checkboxes/demo-code/size-checkboxes.txt";

const label = {inputProps: {'aria-label': 'Checkbox demo'}};
const SizeCheckboxes = () => {
    return (
        <JumboDemoCard title={"Size"} demoCode={code} wrapperSx={{backgroundColor: 'background.paper', pt: 0}}>
            <Div>
                <Checkbox {...label} defaultChecked size="small"/>
                <Checkbox {...label} defaultChecked/>
                <Checkbox
                    {...label}
                    defaultChecked
                    sx={{'& .MuiSvgIcon-root': {fontSize: 28}}}
                />
            </Div>
        </JumboDemoCard>
    );
};

export default SizeCheckboxes;
