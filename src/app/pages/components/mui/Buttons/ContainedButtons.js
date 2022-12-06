import React from 'react';
import JumboDemoCard from "@jumbo/components/JumboDemoCard";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import code from "./demo-code/contained-button.txt";
const ContainedButtons = () => {
    return (
        <JumboDemoCard
            title={"Contained button"}
            demoCode={code}
            wrapperSx={{backgroundColor: 'background.paper', pt: 0}}
        >
            <Stack direction="row" spacing={2}>
                <Button variant="contained">Contained</Button>
                <Button variant="contained" disabled>
                    Disabled
                </Button>
                <Button variant="contained" href="#contained-buttons">
                    Link
                </Button>
            </Stack>
        </JumboDemoCard>
    );
};

export default ContainedButtons;
