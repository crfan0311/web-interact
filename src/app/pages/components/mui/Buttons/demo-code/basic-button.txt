import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import JumboDemoCard from "@jumbo/components/JumboDemoCard";
import code from "./demo-code/basic-button.txt";

const DemoBasicButtons = () => {
    return (
        <JumboDemoCard
            title={"Basic Button"}
            demoCode={code}
            wrapperSx={{backgroundColor: 'background.paper', pt: 0}}
        >
            <Stack spacing={2} direction="row">
                <Button variant="text">Text</Button>
                <Button variant="contained">Contained</Button>
                <Button variant="outlined">Outlined</Button>
            </Stack>
        </JumboDemoCard>
    );
}
export default DemoBasicButtons;
