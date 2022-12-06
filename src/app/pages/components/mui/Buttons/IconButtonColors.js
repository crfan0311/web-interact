import React from 'react';
import JumboDemoCard from "@jumbo/components/JumboDemoCard";
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import Fingerprint from '@mui/icons-material/Fingerprint';
import code from "./demo-code/icon-button-color.txt";

const IconButtonColors = () => {
    return (
        <JumboDemoCard
            title={"Icon Button Colors"}
            demoCode={code}
            wrapperSx={{backgroundColor: 'background.paper', pt: 0}}
        >
            <Stack direction="row" spacing={1}>
                <IconButton aria-label="fingerprint" color="secondary">
                    <Fingerprint/>
                </IconButton>
                <IconButton aria-label="fingerprint" color="success">
                    <Fingerprint/>
                </IconButton>
            </Stack>
        </JumboDemoCard>
    );
};

export default IconButtonColors;
