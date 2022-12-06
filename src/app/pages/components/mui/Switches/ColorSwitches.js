import React from 'react';
import JumboDemoCard from "@jumbo/components/JumboDemoCard";
import {Switch} from "@mui/material";
import {pink} from "@mui/material/colors";
import {alpha, styled} from "@mui/material/styles";
import code from "../Switches/demo-code/color-switches.txt";

const GreenSwitch = styled(Switch)(({theme}) => ({
    '& .MuiSwitch-switchBase.Mui-checked': {
        color: pink[600],
        '&:hover': {
            backgroundColor: alpha(pink[600], theme.palette.action.hoverOpacity),
        },
    },
    '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
        backgroundColor: pink[600],
    },
}));
const label = {inputProps: {'aria-label': "Switch Demo"}}
const ColorSwitches = () => {
    return (
        <JumboDemoCard title={"Color"} demoCode={code} wrapperSx={{backgroundColor: 'background.paper', pt: 0}}>
            <Switch {...label} defaultChecked/>
            <Switch {...label} defaultChecked color="secondary"/>
            <Switch {...label} defaultChecked color="warning"/>
            <Switch {...label} defaultChecked color="default"/>
            <GreenSwitch {...label} defaultChecked/>
        </JumboDemoCard>
    );
};

export default ColorSwitches;
