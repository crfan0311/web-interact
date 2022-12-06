import React from 'react';
import JumboDemoCard from "@jumbo/components/JumboDemoCard";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import code from "./demo-code/color-button.txt";

const ColorButtons = () => {
    return (
        <JumboDemoCard
            title={"Color"}
            demoCode={code}
            wrapperSx={{backgroundColor: 'background.paper', pt: 0}}
        >
            <Stack direction="row" spacing={2}>
                <Button color="secondary">Secondary</Button>
                <Button variant="contained" color="success">
                    Success
                </Button>
                <Button variant="outlined" color="error">
                    Error
                </Button>
            </Stack>
        </JumboDemoCard>
    );
};

export default ColorButtons;
