import React from 'react';
import ConnectionsList from "./ConnectionsList";
import Button from "@mui/material/Button";
import JumboCardQuick from "@jumbo/components/JumboCardQuick";
import JumboScrollbar from "@jumbo/components/JumboScrollbar";
import {useTranslation} from "react-i18next";

const NewConnections = ({scrollHeight}) => {
    const {t} = useTranslation();
    return (
        <JumboCardQuick
            title={t('widgets.title.newConnection')}
            subheader={t('widgets.subheader.newConnection')}
            action={<Button variant={"contained"} size={"small"}>See all</Button>}
            wrapperSx={{p: 0}}
        >
            <JumboScrollbar
                autoHeight
                autoHeightMin={scrollHeight ? scrollHeight : 278}
                autoHide
                autoHideDuration={200}
                autoHideTimeout={500}
            >
                <ConnectionsList/>
            </JumboScrollbar>
        </JumboCardQuick>
    )
};
/* Todo scrollHeight prop define */
export default NewConnections;
