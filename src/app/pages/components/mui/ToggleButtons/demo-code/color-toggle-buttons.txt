import React from 'react';
import JumboDemoCard from "@jumbo/components/JumboDemoCard";
import {ToggleButtonGroup} from "@mui/material";
import ToggleButton from "@mui/material/ToggleButton";
import code from "../ToggleButtons/demo-code/color-toggle-buttons.txt";

const ColorToggleButtons = () => {
    const [alignment, setAlignment] = React.useState('web');

    const handleChange = (event, newAlignment) => {
        setAlignment(newAlignment);
    };
    return (
        <JumboDemoCard title={"Color"} demoCode={code} wrapperSx={{backgroundColor: 'background.paper', pt: 0}}>
            <ToggleButtonGroup
                color="primary"
                value={alignment}
                exclusive
                onChange={handleChange}
            >
                <ToggleButton value="web">Web</ToggleButton>
                <ToggleButton value="android">Android</ToggleButton>
                <ToggleButton value="ios">iOS</ToggleButton>
            </ToggleButtonGroup>
        </JumboDemoCard>
    );
};

export default ColorToggleButtons;
