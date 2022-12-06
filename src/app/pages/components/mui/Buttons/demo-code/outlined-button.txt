import React from 'react';
import JumboDemoCard from "@jumbo/components/JumboDemoCard";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import code from "./demo-code/outlined-button.txt";

const OutlinedButtons = () => {
    return (
        <JumboDemoCard
            title={"Outlined button"}
            demoCode={code}
            wrapperSx={{backgroundColor: 'background.paper', pt: 0}}
        >
            <Stack direction="row" spacing={2}>
                <Button variant="outlined">Primary</Button>
                <Button variant="outlined" disabled>
                    Disabled
                </Button>
                <Button variant="outlined" href="#outlined-buttons">
                    Link
                </Button>
            </Stack>
        </JumboDemoCard>
    );
};

export default OutlinedButtons;
