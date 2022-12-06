import React from 'react';
import JumboRqList from "@jumbo/components/JumboReactQuery/JumboRqList";
import {mailServices} from "../../../../../services/mail-services";
import ConversationMessage from "./ConversationMessage";
import {useMutation} from "react-query";
import {TextField} from "@mui/material";
import Button from "@mui/material/Button";
import useMailsApp from "../../hooks/useMailsApp";
import Div from "@jumbo/shared/Div";

const ConversationDetail = ({conversation}) => {
    const [message, setMessage] = React.useState("");
    const {activeConversation} = useMailsApp();
    const renderConversationMessage = React.useCallback((conversation) => {
        return (
            <ConversationMessage reply={conversation}/>
        )
    }, []);
    const mailConversationMutation = useMutation(mailServices.mailConversation, {
        onSuccess: () => {
            activeConversation?.current?.refresh();
            setMessage("");
        }
    });
    const handleConversationMail = React.useCallback(() => {
        mailConversationMutation.mutate({mailID: conversation.id, message: message});
    });
    return (
        <React.Fragment>
            <JumboRqList
                componentElement={'div'}
                ref={activeConversation}
                service={mailServices.getConversationMessages}
                primaryKey={"id"}
                renderItem={renderConversationMessage}
                queryOptions={{
                    queryKey: "reply-thread",
                    dataKey: "replyThread",
                    queryParams: {id: conversation.id}
                }}
                noDataPlaceholder={<React.Fragment></React.Fragment>}
            />
            <Div
                sx={{
                    display: 'flex',
                    minWidth: 0,
                    alignItems: 'center'
                }}
            >
                <TextField
                    placeholder={"Send a reply...."}
                    size={"small"}
                    sx={{ flex: 1,}}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
                <Button variant={"contained"} sx={{ml: 2}} onClick={handleConversationMail}>Send</Button>
            </Div>
        </React.Fragment>
    );
};

export default ConversationDetail;
