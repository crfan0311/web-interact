import React from 'react';
import JumboDemoCard from "@jumbo/components/JumboDemoCard";
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';
import AlarmIcon from '@mui/icons-material/Alarm';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import code from "./demo-code/icon-button.txt";

const IconButtons = () => {
    return (
        <JumboDemoCard
            title={"Icon Buttons"}
            demoCode={code}
            wrapperSx={{backgroundColor: 'background.paper', pt: 0}}
        >
            <Stack direction="row" spacing={1}>
                <IconButton aria-label="delete">
                    <DeleteIcon/>
                </IconButton>
                <IconButton aria-label="delete" disabled color="primary">
                    <DeleteIcon/>
                </IconButton>
                <IconButton color="secondary" aria-label="add an alarm">
                    <AlarmIcon/>
                </IconButton>
                <IconButton color="primary" aria-label="add to shopping cart">
                    <AddShoppingCartIcon/>
                </IconButton>
            </Stack>
        </JumboDemoCard>
    );
};

export default IconButtons;
