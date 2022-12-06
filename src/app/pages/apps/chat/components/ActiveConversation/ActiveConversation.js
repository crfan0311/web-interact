import React from 'react';
import useChatApp from "../../hooks/useChatApp";
import ContentPlaceholder from "./ActiveConversationChat/ContentPlaceholder";
import JumboScrollbar from "@jumbo/components/JumboScrollbar";
import ActiveConversationHeader from "./ActiveConversationHeader";
import ActiveConversationFooter from "./ActiveConversationFooter";
import ConversationChatGroupByDate from "./ActiveConversationChat/ConversationChatGroupByDate";
import {useParams} from "react-router-dom";
import {useQuery, useQueryClient} from "react-query";
import {chatService} from "../../../../../services/chat-services";
import Div from "@jumbo/shared/Div";
import {CircularProgress, Typography} from "@mui/material";

const ActiveConversation = React.forwardRef(({onRefresh}, ref) => {
    const {setActiveConversation} = useChatApp();
    const [queryKey, setQueryKey] = React.useState(["active-conversation"]);
    const scrollbarRef = React.useRef();
    const {chatBy, id} = useParams();

    const {data: conversationQuery, isLoading} = useQuery(
        queryKey, chatBy === "contact" ?
            chatService.getConversationByContactID
            : chatService.getConversation
    );
    const queryClient = useQueryClient();

    React.useEffect(() => {
        setActiveConversation(conversationQuery?.conversation);
        if (scrollbarRef)
            scrollbarRef.current?.scrollToBottom();
    }, [conversationQuery, scrollbarRef]);

    React.useEffect(() => {
        if (id) {
            setQueryKey(["active-conversation", {id: id}]);
        } else
            setQueryKey(["active-conversation"]);
    }, [id]);

    React.useImperativeHandle(ref, () => ({
        async refresh() {
            await queryClient.invalidateQueries(["active-conversation"]);
            await conversationQuery.refetch();
            onRefresh();
        },
    }));
    if (isLoading) {
        return (
            <Div
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    p: theme => theme.spacing(3),
                    m: 'auto',
                }}
            >
                <CircularProgress/>
                <Typography variant={'h6'} color={'text.secondary'} mt={2}>Loading messages</Typography>
            </Div>
        )
    }
    if (!id) {
        return (
            <React.Fragment>
                <ContentPlaceholder/>
            </React.Fragment>
        )
    } else {
        return (
            <React.Fragment>
                <ActiveConversationHeader/>
                <JumboScrollbar
                    ref={scrollbarRef}
                    autoHide
                    autoHideDuration={200}
                    autoHideTimeout={500}
                    autoHeightMin={30}
                    style={{minHeight: 200}}
                >
                    <ConversationChatGroupByDate/>
                </JumboScrollbar>
                <ActiveConversationFooter/>
            </React.Fragment>
        );
    }

});

ActiveConversation.defaultProps = {
    onRefresh: () => {
    }
};
export default ActiveConversation;
