import React from 'react';
import {MenuItem} from "@mui/material";
import JumboDdMenu from "@jumbo/components/JumboDdMenu/JumboDdMenu";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import {useNavigate} from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import {mailServices} from "../../../../../services/mail-services";
import {useMutation} from "react-query";
import {useJumboDialog} from "@jumbo/components/JumboDialog/hooks/useJumboDialog";
import LabelForm from "../LabelForm";

const labelMenuItems = [
    {icon: <EditIcon/>, title: "Edit", action: "edit"},
    {icon: <DeleteIcon/>, title: "Delete", action: "delete"}
];

const LabelItem = ({label, onLabelSave}) => {
    const navigate = useNavigate();
    const {showDialog, hideDialog} = useJumboDialog();

    const deleteLabelMutation = useMutation(mailServices.deleteLabel, {
        onSuccess: () => {
            onLabelSave();
        }
    });
    const handleMoreAction = React.useCallback((menuItem) => {
        switch (menuItem.action) {
            case 'edit':
                showDialog({
                    title: "Edit label",
                    content: <LabelForm label={label} onSave={onLabelSave}/>
                });
                break;
            case 'delete' :
                showDialog({
                    variant: "confirm",
                    title: "Are you sure?",
                    content: "Once you delete a label that cannot be reversed.",
                    onYes: () => deleteLabelMutation.mutate(label),
                    onNo: () => hideDialog(),
                })
        }
    }, [label, showDialog, onLabelSave, deleteLabelMutation.mutate])
    return (
        <MenuItem
            value={label}
            onClick={() => navigate(`/app/mails/label/${label.id}`)}
        >
            {label.name}
            <JumboDdMenu
                icon={<MoreHorizIcon/>}
                menuItems={labelMenuItems}
                onClickCallback={handleMoreAction}
            />
        </MenuItem>
    );
};

export default LabelItem;
