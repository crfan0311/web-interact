import React from 'react';
import JumboDemoCard from "@jumbo/components/JumboDemoCard";
import CheckIcon from "@mui/icons-material/Check";
import ToggleButton from "@mui/material/ToggleButton";
import code from "../ToggleButtons/demo-code/standalone-toggle-buttons.txt";

const StandaloneToggleButton = () => {
    const [selected, setSelected] = React.useState(false);
    return (
        <JumboDemoCard title={"Standalone Toggle Button"} demoCode={code}
                       wrapperSx={{backgroundColor: 'background.paper', pt: 0}}>
            <ToggleButton
                value="check"
                selected={selected}
                onChange={() => {
                    setSelected(!selected);
                }}
            >
                <CheckIcon/>
            </ToggleButton>
        </JumboDemoCard>
    );
};

export default StandaloneToggleButton;
