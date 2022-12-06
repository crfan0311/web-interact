import React from 'react';
import {Avatar, AvatarGroup, Chip, LinearProgress, ListItem, ListItemText, Typography} from "@mui/material";
import {projectUsers} from "../ProjectCard/data";

const ProjectItem = ({project}) => {

    return (
        <ListItem alignItems={"flex-start"} sx={{flexDirection: 'column', px: 3}}>
            <Chip size="small" sx={{bgcolor: project.category.color, color: "common.white"}} label={project.category.name}/>
            <ListItemText
                primary={<Typography variant="h5">{project.name}</Typography>}
                secondary={`${project.progress}% completed`}
            />
            <ListItemText sx={{alignSelf: 'stretch', mb: 2}}>
                <LinearProgress
                    variant="determinate"
                    color={"success"}
                    value={project.progress}
                    sx={{
                        borderRadius: 4,
                        height: 5,
                        backgroundColor: '#E9EEEF'
                    }}
                />
            </ListItemText>
            <AvatarGroup
                max={5}
                sx={{
                    mb: 1.5,

                    '.MuiAvatar-root': {
                        fontSize: 14,
                        background: theme => theme.palette.grey[600]
                    }
                }}
            >
                {
                    projectUsers.map((item,index) => (
                        <Avatar src={item.profilePic} key={index} alt={`${item.firstName} ${item.lastName}`}/>
                    ))
                }
            </AvatarGroup>
        </ListItem>
    );
};

export default ProjectItem;
