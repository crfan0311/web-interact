import React from 'react';
import JumboDemoCard from "@jumbo/components/JumboDemoCard";
import {ToggleButtonGroup} from "@mui/material";
import ToggleButton from "@mui/material/ToggleButton";
import FormatAlignLeftIcon from "@mui/icons-material/FormatAlignLeft";
import FormatAlignCenterIcon from "@mui/icons-material/FormatAlignCenter";
import FormatAlignRightIcon from "@mui/icons-material/FormatAlignRight";
import FormatAlignJustifyIcon from "@mui/icons-material/FormatAlignJustify";
import code from "../ToggleButtons/demo-code/basic-toggle-buttons.txt";

const BasicToggleButtons = () => {
    const [alignment, setAlignment] = React.useState('left');

    const handleAlignment = (event, newAlignment) => {
        setAlignment(newAlignment);
    };
    return (
        <JumboDemoCard title={"Toggle Buttons"} demoCode={code}
                       wrapperSx={{backgroundColor: 'background.paper', pt: 0}}>
            <ToggleButtonGroup
                value={alignment}
                exclusive
                onChange={handleAlignment}
                aria-label="text alignment"
            >
                <ToggleButton value="left" aria-label="left aligned">
                    <FormatAlignLeftIcon/>
                </ToggleButton>
                <ToggleButton value="center" aria-label="centered">
                    <FormatAlignCenterIcon/>
                </ToggleButton>
                <ToggleButton value="right" aria-label="right aligned">
                    <FormatAlignRightIcon/>
                </ToggleButton>
                <ToggleButton value="justify" aria-label="justified" disabled>
                    <FormatAlignJustifyIcon/>
                </ToggleButton>
            </ToggleButtonGroup>
        </JumboDemoCard>
    );
};

export default BasicToggleButtons;
