import React from 'react';
import Stack from "@mui/material/Stack";
import LabelsSelectControl from "../LabelsSelectControl";
import {useMutation} from "react-query";
import {contactService} from "../../../../../services/contact-services";
import useContactsApp from "../../hooks/useContactsApp";
import IconButton from "@mui/material/IconButton";
import {useJumboDialog} from "@jumbo/components/JumboDialog/hooks/useJumboDialog";
import {useSnackbar} from "notistack";
import {Tooltip} from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

const BulkActions = () => {
    const {selectedContacts, setContactsListRefresh} = useContactsApp();
    const {showDialog, hideDialog} = useJumboDialog();
    const {enqueueSnackbar} = useSnackbar();

    const assignLabelMutation = useMutation(contactService.assignLabel, {
        onSuccess: () => {
            hideDialog();
            setContactsListRefresh(true);
            enqueueSnackbar('Labels has been applied successfully.', {
                variant: "success"
            });
        }
    });
    const deleteContactsMutation = useMutation(contactService.deleteMultiple, {
        onSuccess: () => {
            hideDialog();
            setContactsListRefresh(true);
            enqueueSnackbar('Contacts has been deleted successfully.', {
                variant: "success"
            });
        }
    });
    const handleBulkDelete = React.useCallback(() => {
        showDialog({
            variant: "confirm",
            title: "Are you sure?",
            onYes: () => deleteContactsMutation.mutate(selectedContacts.map(contact => contact?.id)),
            onNo: hideDialog
        })
    }, [selectedContacts, deleteContactsMutation, hideDialog]);

    const applyLabels = React.useCallback((selectedLabels) => {
        assignLabelMutation.mutate({
            contactIDs: selectedContacts.map(contact => contact?.id),
            labelIDs: selectedLabels.map(label => label?.id),
        });
    }, [selectedContacts]);

    return (
        <Stack direction={"row"} sx={{ backgroundColor: 'transparent', ml: -2}}>
            <Tooltip title={"Delete"}>
                <IconButton onClick={handleBulkDelete}><DeleteOutlineIcon/></IconButton>
            </Tooltip>
            <LabelsSelectControl onDone={applyLabels}/>
        </Stack>
    );
};

export default BulkActions;
