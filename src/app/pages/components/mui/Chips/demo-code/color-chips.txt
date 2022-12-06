import React from 'react';
import Stack from "@mui/material/Stack";
import {Chip} from "@mui/material";
import JumboDemoCard from "@jumbo/components/JumboDemoCard";
import code from "../Checkboxes/demo-code/color-checkboxes.txt";

const ColorChips = () => {
    return (
        <JumboDemoCard
            title={"Color Chips"}
            demoCode={code}
            wrapperSx={{backgroundColor: 'background.paper', pt: 0, flexDirection: 'column'}}
        >
            <Stack direction="row" spacing={1}>
                <Chip label="primary" color="primary"/>
                <Chip label="success" color="success"/>
                <Chip label="primary" color="primary" variant="outlined"/>
                <Chip label="success" color="success" variant="outlined"/>
            </Stack>
        </JumboDemoCard>
    );
};

export default ColorChips;
