import React from 'react';
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import LabelsSelectControl from "../LabelsSelectControl";
import {useMutation} from "react-query";
import {mailServices} from "../../../../../services/mail-services";
import useMailsApp from "../../hooks/useMailsApp";
import {useJumboDialog} from "@jumbo/components/JumboDialog/hooks/useJumboDialog";
import {useSnackbar} from "notistack";
import {Tooltip} from "@mui/material";
import ReportGmailerrorredIcon from '@mui/icons-material/ReportGmailerrorred';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

const BulkActions = () => {
    const {selectedMails, setMailsListRefresh} = useMailsApp();
    const {showDialog, hideDialog} = useJumboDialog();
    const {enqueueSnackbar} = useSnackbar();

    const moveSpamMutation = useMutation(mailServices.multipleMoveSpam, {
        onSuccess: () => {
            hideDialog();
            setMailsListRefresh(true);
            enqueueSnackbar("Mail have move to spam successfully.", {
                variant: "success"
            })
        }
    })
    const handleBulkMoveSpam = React.useCallback(() => {
        showDialog({
            variant: "confirm",
            title: "Are you sure?",
            onYes: () => moveSpamMutation.mutate(selectedMails.map(mail => mail?.id)),
            onNo: hideDialog
        })
    }, [selectedMails, moveSpamMutation, hideDialog]);

    const deleteMailsMutation = useMutation(mailServices.deleteMultiple, {
        onSuccess: () => {
            hideDialog();
            setMailsListRefresh(true);
            enqueueSnackbar('Mails have been deleted successfully.', {
                variant: "success"
            });
        }
    });
    const handleBulkDelete = React.useCallback(() => {
        showDialog({
            variant: "confirm",
            title: "Are you sure?",
            onYes: () => deleteMailsMutation.mutate(selectedMails.map(mail => mail?.id)),
            onNo: hideDialog
        })
    }, [selectedMails, deleteMailsMutation, hideDialog]);

    const assignLabelMutation = useMutation(mailServices.assignLabel, {
        onSuccess: () => {
            hideDialog();
            setMailsListRefresh(true);
            enqueueSnackbar('Labels have been applied successfully.', {
                variant: "success"
            });
        }
    });
    const applyLabels = React.useCallback((selectedLabels) => {
        assignLabelMutation.mutate({
            mailIDs: selectedMails.map(mail => mail?.id),
            labelIDs: selectedLabels.map(label => label?.id)
        });
    }, [selectedMails]);

    return (
        <Stack direction={"row"} sx={{ backgroundColor: 'transparent', ml: -2}}>
            <Tooltip title={"Report Spam"}>
                <IconButton onClick={handleBulkMoveSpam}>
                    <ReportGmailerrorredIcon/>
                </IconButton>
            </Tooltip>
            <Tooltip title={"Archive"}>
                <IconButton onClick={handleBulkDelete}>
                    <ArchiveOutlinedIcon/>
                </IconButton>
            </Tooltip>
            <LabelsSelectControl onDone={applyLabels}/>
            <Tooltip title={"Delete"}>
                <IconButton onClick={handleBulkDelete}>
                    <DeleteOutlineIcon/>
                </IconButton>
            </Tooltip>
        </Stack>
    );
};

export default BulkActions;
