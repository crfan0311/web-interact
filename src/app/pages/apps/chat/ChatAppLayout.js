import React from 'react';
import ChatAppSidebar from "./components/ChatAppSidebar";
import ChatAppContent from "./components/ChatAppContent";
import JumboContentLayout from "@jumbo/components/JumboContentLayout";
import {useJumboTheme} from "@jumbo/hooks";
import {Card, useMediaQuery} from "@mui/material";
import useChatApp from "./hooks/useChatApp";

const ChatAppLayout = () => {
    const {theme} = useJumboTheme();
    const {activeConversation} = useChatApp();
    const md = useMediaQuery(theme.breakpoints.down('md'));

    const layoutOptions = React.useMemo(() => ({
        sidebar: {
            sx: (md && activeConversation) ? {display: 'none'} : {
                width: 280,
                marginRight: 0,
                borderRight: 1,
                borderRightColor: theme => theme.palette.divider,
                [theme.breakpoints.down('md')]: {
                    width: 'auto',
                    border: 'none',
                },
            }
        },
        wrapper: {
            component: Card,
            sx: {
                [theme.breakpoints.down('md')]: {
                    flexDirection: 'column'
                },
            }
        },
    }), [theme, md, activeConversation]);

    return (
        <JumboContentLayout
            sidebar={
                <ChatAppSidebar/>
            }
            layoutOptions={layoutOptions}
        >
            <ChatAppContent/>
        </JumboContentLayout>
    );
};

export default ChatAppLayout;
