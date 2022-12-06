import React from 'react';
import JumboDemoCard from "@jumbo/components/JumboDemoCard";
import {ButtonGroup} from "@mui/material";
import Button from "@mui/material/Button";
import code from "./demo-code/disable-elevation.txt";

const DisableElevation = () => {
    return (
        <JumboDemoCard
            title={"Disable Elevation"}
            demoCode={code}
            wrapperSx={{backgroundColor: 'background.paper', pt: 0}}
        >
            <ButtonGroup disableElevation variant="contained">
                <Button>One</Button>
                <Button>Two</Button>
            </ButtonGroup>
        </JumboDemoCard>
    );
};

export default DisableElevation;
