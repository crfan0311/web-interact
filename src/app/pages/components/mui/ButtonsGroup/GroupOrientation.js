import React from 'react';
import JumboDemoCard from "@jumbo/components/JumboDemoCard";
import Button from "@mui/material/Button";
import {ButtonGroup} from "@mui/material";
import Div from "@jumbo/shared/Div";
import code from "./demo-code/group-orientation.txt";

const buttons = [
    <Button key="one">One</Button>,
    <Button key="two">Two</Button>,
    <Button key="three">Three</Button>,
];
const GroupOrientation = () => {
    return (
        <JumboDemoCard
            title={"Vertical Group"}
            demoCode={code}
            wrapperSx={{backgroundColor: 'background.paper', pt: 0}}
        >
            <Div
                sx={{
                    display: 'flex',
                    '& > *': {
                        m: 1,
                    },
                }}
            >
                <ButtonGroup
                    orientation="vertical"
                    aria-label="vertical outlined button group"
                >
                    {buttons}
                </ButtonGroup>
                <ButtonGroup
                    orientation="vertical"
                    aria-label="vertical contained button group"
                    variant="contained"
                >
                    {buttons}
                </ButtonGroup>
                <ButtonGroup
                    orientation="vertical"
                    aria-label="vertical contained button group"
                    variant="text"
                >
                    {buttons}
                </ButtonGroup>
            </Div>
        </JumboDemoCard>
    );
};

export default GroupOrientation;
