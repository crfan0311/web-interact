import React from 'react';
import JumboDemoCard from "@jumbo/components/JumboDemoCard";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import code from "./demo-code/icon-label-button.txt";

const IconLabelButtons = () => {
    return (
        <JumboDemoCard
            title={"Buttons with icons and label"}
            demoCode={code}
            wrapperSx={{backgroundColor: 'background.paper', pt: 0}}
        >
            <Stack direction="row" spacing={2}>
                <Button variant="outlined" startIcon={<DeleteIcon/>}>
                    Delete
                </Button>
                <Button variant="contained" endIcon={<SendIcon/>}>
                    Send
                </Button>
            </Stack>
        </JumboDemoCard>
    );
};

export default IconLabelButtons;
