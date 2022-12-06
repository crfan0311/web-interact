import React from 'react';
import {FormControl, InputLabel, MenuItem, Select} from "@mui/material";
import {foldersList} from "../../../../../services/mock-data/mails";
import {useNavigate} from "react-router-dom";

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
                    foldersList.map((folder, index) => (
                        <MenuItem
                            key={index}
                            value={folder}
                            onClick={() => navigate(`/app/mails/${folder.slug}`)}
                        >
                            {folder.name}
                        </MenuItem>
                    ))
                }
            </Select>
        </FormControl>
    );
};

export default FolderDropdown;
