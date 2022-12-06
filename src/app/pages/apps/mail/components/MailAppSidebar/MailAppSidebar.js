import React from 'react';
import LabelsList from "../LabelsList";
import Button from "@mui/material/Button";
import {Edit} from "@mui/icons-material";
import FoldersList from "../FoldersList";
import FiltersList from "../FiltersList";
import {useJumboDialog} from "@jumbo/components/JumboDialog/hooks/useJumboDialog";
import ComposeForm from "../ComposeForm";
import useMailsApp from "../../hooks/useMailsApp";

const MailAppSidebar = () => {
    const {hideDialog, showDialog} = useJumboDialog();
    const {setMailsListRefresh} = useMailsApp();
    const handleMailSent = React.useCallback(() => {
        hideDialog();
        setMailsListRefresh(true);
    }, [hideDialog, setMailsListRefresh]);
    const handleComposeForm = React.useCallback(() => {
        showDialog({
            title: "Compose Message",
            content: <ComposeForm onSave={handleMailSent}/>
        })
    }, [showDialog]);
    return (
        <React.Fragment>
            <Button
                fullWidth
                disableElevation
                variant={"contained"}
                startIcon={<Edit/>}
                sx={{
                    mb: 4,
                    '& .MuiSvgIcon-root': {
                        fontSize: '1.5rem'
                    }
                }}
                onClick={handleComposeForm}
            >Compose</Button>
            <FoldersList/>
            <FiltersList/>
            <LabelsList/>
        </React.Fragment>
    );
};

export default MailAppSidebar;
