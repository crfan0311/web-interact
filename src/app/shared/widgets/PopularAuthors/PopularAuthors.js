import React from 'react';
import AuthorsList from "./AuthorsList";
import JumboScrollbar from "@jumbo/components/JumboScrollbar";
import JumboCardQuick from "@jumbo/components/JumboCardQuick";
import {useTranslation} from "react-i18next";

const PopularAuthors = ({scrollHeight}) => {
    const {t} = useTranslation();
    return (
        <JumboCardQuick
            title={t("widgets.title.popularAuthors")}
            subheader={t("widgets.subheader.popularAuthors")}
            wrapperSx={{p: 0}}
            headerSx={{borderBottom: 1, borderBottomColor: 'divider'}}
        >
            <JumboScrollbar
                autoHeight
                autoHeightMin={scrollHeight ? scrollHeight : 366}
                autoHide
                autoHideDuration={200}
                autoHideTimeout={500}
            >
                <AuthorsList/>
            </JumboScrollbar>
        </JumboCardQuick>
    );
};

export default PopularAuthors;
