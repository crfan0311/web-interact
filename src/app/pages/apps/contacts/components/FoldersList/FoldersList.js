import React from 'react';
import ContactsIcon from "@mui/icons-material/Contacts";
import StarsIcon from "@mui/icons-material/Stars";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import DeleteIcon from "@mui/icons-material/Delete";
import FolderItem from "./FolderItem";
import {useParams} from "react-router-dom";
import StyledMenu from "../../../../../shared/StyledMenu";

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

const FoldersList = () => {
    const params = useParams();
    return (
        <StyledMenu sx={{mb: 2}}>
            {
                folders.map(folder => (
                    <FolderItem
                        key={folder.slug}
                        path={folder.path}
                        label={folder.label}
                        icon={folder.icon}
                        selected={folder.slug === params?.category}
                    />
                ))
            }
        </StyledMenu>
    );
};

export default React.memo(FoldersList);
