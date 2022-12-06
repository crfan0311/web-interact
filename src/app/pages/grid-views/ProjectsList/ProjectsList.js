import React from 'react';
import {users} from "../UsersList/data";
import Grid from "@mui/material/Grid";
import projectData from "./data";
import ProjectItemCard from "./ProjectItemCard";
import {Typography} from "@mui/material";

const ProjectsList = () => {
    return (
        users.length > 0 &&
        <React.Fragment>
            <Typography variant={'h2'} mb={3}>Projects</Typography>
            <Grid container spacing={3.75}>
                {
                    projectData.map((project, index) => (
                        <Grid item key={index} xs={12} sm={6} lg={4}>
                            <ProjectItemCard item={project}/>
                        </Grid>
                    ))
                }
            </Grid>
        </React.Fragment>
    );
};

export default ProjectsList;
