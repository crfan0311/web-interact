import React from 'react';
import ProjectsList from "./ProjectsList";
import {Chip} from "@mui/material";
import JumboCardQuick from "@jumbo/components/JumboCardQuick";
import {useTranslation} from "react-i18next";
import JumboScrollbar from "@jumbo/components/JumboScrollbar";

const CurrentProjectsList = ({scrollHeight}) => {
    const {t} = useTranslation();
    return (
        <JumboCardQuick
            title={t('widgets.title.currentProjects')}
            subheader={t('widgets.subheader.currentProjects')}
            action={
                <Chip color={"warning"} label={"This week"} size={"small"}/>
            }
            headerSx={{borderBottom: 1, borderBottomColor: 'divider'}}
            wrapperSx={{p: 0}}
        >
            <JumboScrollbar
                autoHeight autoHeightMin={scrollHeight ? scrollHeight : 356}
                autoHide
                autoHideDuration={200}
                autoHideTimeout={500}
            >
                <ProjectsList/>
            </JumboScrollbar>
        </JumboCardQuick>

    );
};
/* Todo scrollHeight props define */
export default CurrentProjectsList;
