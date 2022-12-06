import React from 'react';
import JumboDemoCard from "@jumbo/components/JumboDemoCard";
import Div from "@jumbo/shared/Div";
import {ButtonGroup} from "@mui/material";
import code from "./demo-code/button-size-color.txt";
import Button from "@mui/material/Button";

const buttons = [
    <Button key="one">One</Button>,
    <Button key="two">Two</Button>,
    <Button key="three">Three</Button>,
];
const GroupSizesColors = () => {
    return (
        <JumboDemoCard
            title={"Button Sizes & Colors"}
            demoCode={code}
            wrapperSx={{backgroundColor: 'background.paper', pt: 0}}
        >
            <Div
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    '& > *': {
                        m: 1,
                    },
                }}
            >
                <ButtonGroup size="small" aria-label="small button group">
                    {buttons}
                </ButtonGroup>
                <ButtonGroup color="secondary" aria-label="medium secondary button group">
                    {buttons}
                </ButtonGroup>
                <ButtonGroup size="large" aria-label="large button group">
                    {buttons}
                </ButtonGroup>
            </Div>
        </JumboDemoCard>
    );
};

export default GroupSizesColors;
