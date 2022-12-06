import React from 'react';
import ProjectItem from "./ProjectItem";
import {projects} from "./data";
import {Typography} from "@mui/material";

const ProjectsList = () => {

    return (
        <React.Fragment>
            <Typography variant={'h2'} mb={3}>Projects</Typography>
            {
                projects.map((project, key) => (
                    <ProjectItem item={project}/>
                ))
            }
        </React.Fragment>
    );
};

export default ProjectsList;
