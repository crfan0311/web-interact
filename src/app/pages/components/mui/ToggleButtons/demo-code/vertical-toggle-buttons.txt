import React from 'react';
import JumboDemoCard from "@jumbo/components/JumboDemoCard";
import {ToggleButtonGroup} from "@mui/material";
import ToggleButton from "@mui/material/ToggleButton";
import ViewListIcon from "@mui/icons-material/ViewList";
import ViewModuleIcon from "@mui/icons-material/ViewModule";
import ViewQuiltIcon from "@mui/icons-material/ViewQuilt";
import code from "../ToggleButtons/demo-code/vertical-toggle-buttons.txt";

const VerticalToggleButtons = () => {
    const [view, setView] = React.useState('list');

    const handleChange = (event, nextView) => {
        setView(nextView);
    };
    return (
        <JumboDemoCard title={"Vertical"} demoCode={code} wrapperSx={{backgroundColor: 'background.paper', pt: 0}}>
            <ToggleButtonGroup
                orientation="vertical"
                value={view}
                exclusive
                onChange={handleChange}
            >
                <ToggleButton value="list" aria-label="list">
                    <ViewListIcon/>
                </ToggleButton>
                <ToggleButton value="module" aria-label="module">
                    <ViewModuleIcon/>
                </ToggleButton>
                <ToggleButton value="quilt" aria-label="quilt">
                    <ViewQuiltIcon/>
                </ToggleButton>
            </ToggleButtonGroup>
        </JumboDemoCard>
    );
};

export default VerticalToggleButtons;
