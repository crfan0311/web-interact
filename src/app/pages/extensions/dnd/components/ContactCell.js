import React, {useState} from 'react';
import DragHandleIcon from '@mui/icons-material/DragHandle';
import {SortableElement, SortableHandle} from 'react-sortable-hoc';
import {IconButton, TableCell, TableRow} from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import StarBorderIcon from '@mui/icons-material/StarBorder';
import {Star} from "@mui/icons-material";
import JumboDdMenu from "@jumbo/components/JumboDdMenu";

const DragHandle = SortableHandle(() => <DragHandleIcon sx={{cursor: 'grab', verticalAlign: 'middle'}}/>);

const ContactCell = props => {

    const {contact} = props;
    const [starred, setStarred] = useState(contact.starred);


    const {name, thumb, email, phone, designation} = contact;

    return (

        <TableRow>
            <TableCell width={"3%"} sx={{pl: 3}}>
                <DragHandle/>
            </TableCell>
            <TableCell width={"3%"}>
                {thumb === null || thumb === '' ? (
                    <Avatar sx={{height: 44, width: 44}}>{name.charAt(0).toUpperCase()}</Avatar>
                ) : (
                    <Avatar sx={{height: 44, width: 44}} alt={name} src={thumb}/>
                )}
            </TableCell>
            <TableCell width={"15%"}>
                <Typography variant={"h6"} mb={0}>{name}</Typography>
            </TableCell>
            <TableCell width={"20%"}>
                <Typography variant={"h6"} mb={0}>{email}</Typography>
            </TableCell>
            <TableCell width={"15%"}>
                <Typography variant={"h6"} mb={0}>{phone}</Typography>
            </TableCell>
            <TableCell width={"15%"}>
                <Typography variant={"h6"} mb={0}>{designation}</Typography>
            </TableCell>
            <TableCell width={"4%"}>
                <IconButton variant="text" onClick={() => setStarred(!starred)}>
                    {starred ? <Star color={"warning"} size={20}/> : <StarBorderIcon size={20}/>}
                </IconButton>
            </TableCell>
            <TableCell width={"4%"}>
                <JumboDdMenu menuItems={menuItems}/>
            </TableCell>
        </TableRow>
    );
};

export default SortableElement(ContactCell);

const menuItems = [
    {
        title: "Edit",
        slug: "edit",
    },
    {
        title: "Delete",
        slug: "delete",
    }
]
