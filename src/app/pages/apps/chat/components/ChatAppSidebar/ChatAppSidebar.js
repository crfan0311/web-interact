import React from 'react';
import Div from "@jumbo/shared/Div";
import AuthUserSummary from "../AuthUserSummary";
import ChatGlobalSearch from "../ChatGlobalSearch";
import TabList from "@mui/lab/TabList";
import Tab from "@mui/material/Tab";
import JumboScrollbar from "@jumbo/components/JumboScrollbar";
import {TabContext, TabPanel} from "@mui/lab";
import FavoriteConversationsList from "../FavoriteConverstionsList";
import RecentConversationsList from "../RecentConversationsList";
import ContactsList from "../ContactsList";

const ChatAppSidebar = () => {
    const [activeTab, setActiveTab] = React.useState("chat");
    return (
        <React.Fragment>
            <Div sx={{p: 2, pb: 1.25}}>
                <AuthUserSummary/>
                <ChatGlobalSearch/>
            </Div>
            <TabContext value={activeTab}>
                <Div sx={{borderBottom: 1, borderColor: 'divider'}}>
                    <TabList
                        variant="fullWidth"
                        onChange={(event, newTab) => setActiveTab(newTab)}
                    >
                        <Tab label="Chats" value={"chat"}/>
                        <Tab label="Contacts" value={'contact'}/>
                    </TabList>
                </Div>
                <JumboScrollbar
                    style={{minHeight: 200}}
                    autoHide
                    autoHideDuration={200}
                    autoHideTimeout={500}
                    autoHeightMin={30}
                >
                    <TabPanel value={"chat"} sx={{p: 0}}>
                        <FavoriteConversationsList/>
                        <RecentConversationsList/>
                    </TabPanel>
                    <TabPanel value={"contact"} sx={{p: 0}}>
                        <ContactsList/>
                    </TabPanel>
                </JumboScrollbar>
            </TabContext>
        </React.Fragment>
    );
};

export default ChatAppSidebar;
