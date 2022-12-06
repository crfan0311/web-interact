import React from "react";
import {IconButton, SpeedDial, SpeedDialAction, SpeedDialIcon} from "@mui/material";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import {Label} from "@mui/icons-material";
import ContactForm from "../ContactForm";
import useContactsApp from "../../hooks/useContactsApp";
import {useJumboDialog} from "@jumbo/components/JumboDialog/hooks/useJumboDialog";
import LabelForm from "../LabelForm";

const ContactFab = () => {

    const {hideDialog, showDialog} = useJumboDialog();
    const {setContactsListRefresh, setLabelsListRefresh} = useContactsApp();

    const refreshListAndCloseDialog = () => {
        setContactsListRefresh(true);
        setLabelsListRefresh(true);
        hideDialog();
    };

    const showAddLabelDialog = React.useCallback(() => {
        showDialog({
            title: "Add New Label",
            content: <LabelForm onSave={refreshListAndCloseDialog}/>
        })
    }, []);

    const handleContactAdd = React.useCallback(() => {
        hideDialog();
        setContactsListRefresh(true);
    }, [hideDialog, setContactsListRefresh]);

    const showAddContactDialog = React.useCallback(() => {
        showDialog({
            title: "Add New contact",
            content: <ContactForm onSave={handleContactAdd}/>
        });
    }, [handleContactAdd, showDialog]);

    return (
        <SpeedDial
            ariaLabel={"contact-fab"}
            icon={<SpeedDialIcon/>}
            sx={{
                position: "fixed",
                right: 30,
                bottom: 30
            }}
        >
            <SpeedDialAction
                icon={
                    <IconButton onClick={showAddContactDialog}>
                        <PersonAddIcon/>
                    </IconButton>
                }
                tooltipTitle={"Add Contact"}
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
export default ContactFab;
