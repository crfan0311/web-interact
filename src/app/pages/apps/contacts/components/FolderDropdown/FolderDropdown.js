import React from 'react';
import {FormControl, InputLabel, MenuItem, Select} from "@mui/material";
import {useNavigate} from "react-router-dom";
import ContactsIcon from "@mui/icons-material/Contacts";
import StarsIcon from "@mui/icons-material/Stars";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import DeleteIcon from "@mui/icons-material/Delete";

const folders = [
    {
        icon: <ContactsIcon fontSize={"small"} />,
        label: "All Contacts",
        slug: "all",
        path: "/app/contacts/all"
    },
    {
        icon: <StarsIcon fontSize={"small"} />,
        label: "Starred",
        slug: "starred",
        path: "/app/contacts/starred"
    },
    {
        icon: <AccessTimeIcon fontSize={"small"} />,
        label: "Frequently Used",
        slug: "frequent",
        path: "/app/contacts/frequent"
    },
    {
        icon: <DeleteIcon fontSize={"small"} />,
        label: "Trash",
        slug: "trash",
        path: "/app/contacts/trash"
    },
];
const FolderDropdown = () => {
    const navigate = useNavigate();
    const [folder, setFolder] = React.useState("");
    return (
        <FormControl sx={{width: 120}} size={"small"}>
            <InputLabel>Folder</InputLabel>
            <Select
                value={folder}
                label="Folder"
                onChange={(event) => setFolder(event.target.value)}
            >
                <MenuItem value="">
                    <em>Select Folder</em>
                </MenuItem>
                {
                    folders.map((folder, index) => (
                        <MenuItem
                            key={index}
                            value={folder}
                            onClick={() => navigate(`/app/contacts/${folder.slug}`)}
                        >
                            {folder.label}
                        </MenuItem>
                    ))
                }
            </Select>
        </FormControl>
    );
};
export default FolderDropdown;
