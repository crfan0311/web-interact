import React from 'react';
import JumboDemoCard from "@jumbo/components/JumboDemoCard";
import {ButtonGroup} from "@mui/material";
import Button from "@mui/material/Button";
import code from "./demo-code/basic-button-group.txt";

const BasicButtonGroup = () => {
    return (
        <JumboDemoCard
            title={"Basic Button Group"}
            demoCode={code}
            wrapperSx={{backgroundColor: 'background.paper', pt: 0}}
        >
            <ButtonGroup variant="contained" aria-label="outlined primary button group">
                <Button>One</Button>
                <Button>Two</Button>
                <Button>Three</Button>
            </ButtonGroup>
        </JumboDemoCard>
    );
};

export default BasicButtonGroup;
