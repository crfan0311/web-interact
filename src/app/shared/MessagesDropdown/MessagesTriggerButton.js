import React from 'react';
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import JumboIconButton from "@jumbo/components/JumboIconButton";
import {useJumboHeaderTheme} from "@jumbo/hooks";
import {ThemeProvider} from "@mui/material";


const MessagesTriggerButton = () => {
    const {headerTheme} = useJumboHeaderTheme();
    return (
        <ThemeProvider theme={headerTheme}>
            <JumboIconButton badge={{variant: "dot"}} elevation={25}>
                <ChatBubbleOutlineOutlinedIcon sx={{fontSize: '1rem'}}/>
            </JumboIconButton>
        </ThemeProvider>
    );
};

export default MessagesTriggerButton;
