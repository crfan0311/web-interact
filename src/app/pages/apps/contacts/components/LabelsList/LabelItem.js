import React from 'react';
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import JumboListItem from "@jumbo/components/JumboList/components/JumboListItem";
import {ListItemIcon, ListItemText, MenuItem} from "@mui/material";
import LabelIcon from "@mui/icons-material/Label";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import JumboDdMenu from "@jumbo/components/JumboDdMenu";
import {useNavigate} from "react-router-dom";
import {useJumboDialog} from "@jumbo/components/JumboDialog/hooks/useJumboDialog";
import LabelForm from "../LabelForm";
import {useMutation} from "react-query";
import {contactService} from "../../../../../services/contact-services";

const labelMenuItems = [
    {icon: <EditIcon/>, title: "Edit", action: "edit"},
    {icon: <DeleteIcon/>, title: "Delete", action: "delete"}
];

const LabelItem = ({label, onLabelSave}) => {
    const navigate = useNavigate();
    const {showDialog, hideDialog} = useJumboDialog();
    const deleteLabelMutation = useMutation(contactService.deleteLabel, {
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
            case 'delete':
                showDialog({
                    variant: "confirm",
                    title: "Are you sure?",
                    content: "Once you delete a label that cannot be reversed.",
                    onYes: () => deleteLabelMutation.mutate(label),
                    onNo: () => hideDialog(),
                })
        }
    }, [label, showDialog, onLabelSave, deleteLabelMutation.mutate]);

    return (
        <JumboListItem
            component={MenuItem}
            componentElement={"div"}
            disableRipple
            sx={{p: 0, my: 0}}
            itemData={label}
        >
            <ListItemIcon sx={{color: label.color}} onClick={() =>
                navigate(`/app/contacts/label/${label.id}`)
            }>
                <LabelIcon fontSize={"small"}/>
            </ListItemIcon>
            <ListItemText onClick={() =>
                navigate(`/app/contacts/label/${label.id}`)
            }>
                {label.name}
            </ListItemText>
            <JumboDdMenu
                icon={<MoreHorizIcon/>}
                menuItems={labelMenuItems}
                onClickCallback={handleMoreAction}
            />
        </JumboListItem>
    );
};
/* Todo label, onLabelSave prop define */
export default LabelItem;
