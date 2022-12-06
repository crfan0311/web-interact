import React from 'react';
import CardHeader from "@mui/material/CardHeader";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

const MessagesHeader = ({settingMenuCallback}) => {
    return (
        <CardHeader
            title={"Messages"}
            subheader={"6 new messages"}
            action={
                <Stack direction="row" alignItems="center" sx={{mr: 1}}>
                    <IconButton aria-label="compose">
                        <ModeEditIcon fontSize={"small"}/>
                    </IconButton>
                    <IconButton aria-label="starred">
                        <StarBorderIcon fontSize={"small"}/>
                    </IconButton>
                    <IconButton edge={"end"} aria-label="starred" onClick={settingMenuCallback}>
                        <MoreHorizIcon fontSize={"small"}/>
                    </IconButton>
                </Stack>
            }
            sx={{
                '& .MuiCardHeader-action': {
                    alignSelf: 'center',
                }
            }}
        />
    );
};

export default MessagesHeader;
