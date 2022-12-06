import * as React from 'react';
import SnackbarContent from '@mui/material/SnackbarContent';
import JumboDemoCard from "@jumbo/components/JumboDemoCard";
import code from "../Snackbars/demo-code/message-snackbar.txt";

const MessageSnackbar = () => {
    return (
        <JumboDemoCard title={"Only Message"} demoCode={code} wrapperSx={{backgroundColor: 'background.paper', pt: 0}}>
            <SnackbarContent
                message={"Various versions have evolved over the years."}
                sx={{width: 600, maxWidth: '100%'}}

            />
        </JumboDemoCard>
    );
};
export default MessageSnackbar;
