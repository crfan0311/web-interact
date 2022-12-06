import React from 'react';
import Avatar from "@mui/material/Avatar";
import {Typography} from "@mui/material";
import Button from "@mui/material/Button";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import FoldersList from "../FoldersList";
import LabelsList from "../LabelsList";
import Div from "@jumbo/shared/Div";
import {useJumboDialog} from "@jumbo/components/JumboDialog/hooks/useJumboDialog";
import ContactForm from "../ContactForm";
import useContactsApp from "../../hooks/useContactsApp";
import {ASSET_AVATARS} from "../../../../../utils/constants/paths";
import {getAssetPath} from "../../../../../utils/appHelpers";

const ContactsAppSidebar = () => {
    const {showDialog, hideDialog} = useJumboDialog();
    const {setContactsListRefresh} = useContactsApp();

    const handleContactAdd = React.useCallback(() => {
        hideDialog();
        setContactsListRefresh(true);
    }, [hideDialog, setContactsListRefresh]);

    const showAddContactDialog = React.useCallback(() => {
        showDialog({
            title: "Add new contact",
            content: <ContactForm onSave={handleContactAdd} />
        });
    }, [handleContactAdd, showDialog]);

    return (
        <React.Fragment>
            <Div
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    mb: 3,
                }}
            >
                <Avatar sx={{width: 60, height: 60, mr: 2}} alt="Cory Smith" src={getAssetPath(`${ASSET_AVATARS}/avatar6.jpg`, "60x60")}/>
                <Div sx={{flex: '1 1 auto'}}>
                    <Typography variant={"h5"} mb={.35}>Cory Smith</Typography>
                    <Typography variant={"body1"} color={"text.secondary"}>@royal.cory</Typography>
                </Div>
            </Div>
            <Button
                fullWidth
                disableElevation
                variant={"contained"}
                startIcon={<PersonAddIcon/>}
                sx={{
                    mb: 2,
                    '& .MuiSvgIcon-root': {
                        fontSize: '1.5rem'
                    }
                }}
                onClick={showAddContactDialog}
            >Add Contact</Button>
            <FoldersList/>
            <LabelsList/>
        </React.Fragment>
    );
};
export default React.memo(ContactsAppSidebar);
