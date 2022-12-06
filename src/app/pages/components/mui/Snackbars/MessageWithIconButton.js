import * as React from 'react';
import SnackbarContent from '@mui/material/SnackbarContent';
import JumboDemoCard from "@jumbo/components/JumboDemoCard";
import {IconButton} from "@mui/material";
import SnoozeIcon from '@mui/icons-material/Snooze';
import code from "../Snackbars/demo-code/message-with-icon-button.txt";

const MessageWithIconButton = () => {
    return (
        <JumboDemoCard title={"Message With IconButton"} demoCode={code}
                       wrapperSx={{backgroundColor: 'background.paper', pt: 0}}>
            <SnackbarContent
                message={"All the Lorem Ipsum generators."}
                sx={{width: 600, maxWidth: '100%'}}
                action={
                    <IconButton color={"secondary"} size={"small"}>
                        <SnoozeIcon/>
                    </IconButton>
                }
            />
        </JumboDemoCard>
    );
};
export default MessageWithIconButton;
