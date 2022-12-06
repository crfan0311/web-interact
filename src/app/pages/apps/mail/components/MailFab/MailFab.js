import React from 'react';
import {IconButton, SpeedDial, SpeedDialIcon} from "@mui/material";
import {SpeedDialAction} from "@mui/lab";
import {Edit, Label} from "@mui/icons-material";
import ComposeForm from "../ComposeForm";
import {useJumboDialog} from "@jumbo/components/JumboDialog/hooks/useJumboDialog";
import LabelForm from "../LabelForm";
import useMailsApp from "../../hooks/useMailsApp";

const MailFab = () => {

    const {setLabelsListRefresh, setMailsListRefresh} = useMailsApp();
    const {hideDialog, showDialog} = useJumboDialog();

    const handleMailSend = React.useCallback(() => {
        hideDialog();
        setMailsListRefresh(true);
    }, [hideDialog]);

    const handleComposeForm = () => {
        showDialog({
            title: "Compose Message",
            content: <ComposeForm onSave={handleMailSend}/>
        })
    };

    const refreshListAndCloseDialog = () => {
        setLabelsListRefresh(true);
        setMailsListRefresh(true);
        hideDialog();
    };

    const showAddLabelDialog = React.useCallback(() => {
        showDialog({
            title: "Add New Label",
            content: <LabelForm onSave={refreshListAndCloseDialog}/>
        })
    }, []);

    return (
        <SpeedDial
            ariaLabel="mail-fab"
            icon={<SpeedDialIcon/>}
            sx={{
                position: 'fixed',
                right: 30,
                bottom: 30,
            }}
        >
            <SpeedDialAction
                icon={
                    <IconButton onClick={handleComposeForm}>
                        <Edit/>
                    </IconButton>
                }
                tooltipTitle={"Compose Form"}
            />
            <SpeedDialAction
                icon={
                    <IconButton onClick={showAddLabelDialog}>
                        <Label/>
                    </IconButton>
                }
                tooltipTitle={"Add Label"}
            />
        </SpeedDial>
    );
};

export default MailFab;
