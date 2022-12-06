import React from 'react';
import {List} from "@mui/material";
import {projects} from "./data";
import ProjectItem from "./ProjectItem";

const ProjectsList = () => {
    return (
            <List disablePadding>
                {
                    projects.map((project, index) => (
                        <ProjectItem project={project} key={index}/>
                    ))
                }
            </List>
    );
};

export default ProjectsList;
