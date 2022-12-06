import React from 'react';
import ProjectList from "./ProjectList";
import {Typography} from "@mui/material";
import JumboCardQuick from "@jumbo/components/JumboCardQuick";
import JumboScrollbar from "@jumbo/components/JumboScrollbar";
import {useTranslation} from "react-i18next";

const ProjectsListCard = ({scrollHeight}) => {
    const {t} = useTranslation();
    return (
        <JumboCardQuick
            title={<Typography variant={"h4"} mb={0}>{t('widgets.title.projectsList')}</Typography>}
            wrapperSx={{p: 0}}
        >
            <JumboScrollbar
                autoHeight
                autoHeightMin={392}
                autoHide autoHideDuration={200}
                autoHideTimeout={500}
            >
                <ProjectList/>
            </JumboScrollbar>
        </JumboCardQuick>
    );
};
/* Todo scrollHeight prop define */
export default ProjectsListCard;
