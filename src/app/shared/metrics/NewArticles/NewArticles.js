import React from 'react';
import NewArticlesChart from "./NewArticlesChart";
import {Typography} from "@mui/material";
import BookmarkIcon from '@mui/icons-material/Bookmark';
import JumboCardQuick from "@jumbo/components/JumboCardQuick";
import {useTranslation} from "react-i18next";

const NewArticles = ({headerSx}) => {
    const {t} = useTranslation();
    return (
        <JumboCardQuick
            noWrapper
            title={<Typography variant={"h2"}>526+</Typography>}
            subheader={
                <Typography
                    variant={"h6"}
                    color={"text.secondary"}>{t('widgets.subheader.newArticles')}</Typography>
            }
            action={<BookmarkIcon/>}
            headerSx={headerSx}
        >
            <NewArticlesChart/>
        </JumboCardQuick>
    );
};

export default NewArticles;
