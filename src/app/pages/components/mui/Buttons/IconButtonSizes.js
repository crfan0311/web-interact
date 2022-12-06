import React from 'react';
import JumboDemoCard from "@jumbo/components/JumboDemoCard";
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import code from "./demo-code/icon-button-size.txt";

const IconButtonSizes = () => {
    return (
        <JumboDemoCard
            title={"Icon Button Sizes"}
            demoCode={code}
            wrapperSx={{backgroundColor: 'background.paper', pt: 0}}
        >
            <Stack direction="row" alignItems="center" spacing={1}>
                <IconButton aria-label="delete" size="small">
                    <DeleteIcon fontSize="inherit"/>
                </IconButton>
                <IconButton aria-label="delete" size="small">
                    <DeleteIcon fontSize="small"/>
                </IconButton>
                <IconButton aria-label="delete" size="large">
                    <DeleteIcon/>
                </IconButton>
                <IconButton aria-label="delete" size="large">
                    <DeleteIcon fontSize="inherit"/>
                </IconButton>
            </Stack>
        </JumboDemoCard>
    );
};

export default IconButtonSizes;
