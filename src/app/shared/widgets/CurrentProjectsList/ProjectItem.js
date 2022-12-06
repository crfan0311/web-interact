import React from 'react';
import {Avatar, LinearProgress, ListItemAvatar, ListItemText, Typography} from "@mui/material";
import {menuItems} from "./data";
import ListItemButton from "@mui/material/ListItemButton";
import JumboDdMenu from "@jumbo/components/JumboDdMenu";

const ProjectItem = ({project}) => {
    return (
        <React.Fragment>
            <ListItemButton
                component={"li"}
                sx={{
                     p: theme => theme.spacing(1, 3),
                     borderBottom: 1,
                     borderBottomColor: 'divider',

                     '&:last-child': {
                         borderBottomColor: 'transparent'
                     }
                    }}
                >
                <ListItemAvatar>
                    <Avatar alt={project.name} src={project.logo}/>
                </ListItemAvatar>
                <ListItemText
                    sx={{width: '50%'}}
                    primary={<Typography variant='h5' mb={.5}>{project.name}</Typography>}
                    secondary={<Typography variant={'body1'} fontSize={12} color={'text.secondary'}>{project.dueDate}</Typography>}
                />
                <ListItemText sx={{width: '40%', px: 2}}>
                    <LinearProgress variant="determinate" color={"success"} value={project.progress}/>
                </ListItemText>
                <ListItemText>
                    <JumboDdMenu menuItems={menuItems}/>
                </ListItemText>
            </ListItemButton>
        </React.Fragment>
    );
};
/* Todo project props */
export default ProjectItem;
