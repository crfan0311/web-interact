import React from 'react';
import StyledMenu from "../../../../../shared/StyledMenu";
import {foldersList} from "../../../../../services/mock-data/mails";
import {Typography} from "@mui/material";
import {useParams} from "react-router-dom";
import FolderItem from "./FolderItem";

const FoldersList = () => {
    const {category} = useParams();
    return (
        <React.Fragment>
            <Typography
                variant={"h6"}
                color={"text.secondary"}
                sx={{
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                    fontSize: '11px'
                }}
            >
                Folder
            </Typography>
            <StyledMenu sx={{mb: 2}}>
                {
                    foldersList.map((folder, index) => (
                        <FolderItem
                            key={index}
                            slug={folder.slug}
                            name={folder.name}
                            icon={folder.icon}
                            selected={folder.slug === category}
                        />
                    ))
                }
            </StyledMenu>
        </React.Fragment>
    );
};

export default FoldersList;
