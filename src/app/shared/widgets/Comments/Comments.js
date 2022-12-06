import React from 'react';
import JumboCardQuick from "@jumbo/components/JumboCardQuick";
import JumboScrollbar from "@jumbo/components/JumboScrollbar";
import CommentsList from "./CommentsList";
import {Chip} from "@mui/material";
import {useTranslation} from "react-i18next";

const Comments = ({scrollHeight}) => {
    const {t} = useTranslation();
    return (
        <JumboCardQuick
            title={t("widgets.title.comments")}
            action={<Chip label={"8 New Comments"} color={"primary"} size={"small"}/>}
            headerSx={{borderBottom: 1, borderBottomColor: 'divider'}}
            wrapperSx={{p: 0}}
        >

            <JumboScrollbar
                autoHeight
                autoHeightMin={scrollHeight ? scrollHeight : 460}
                autoHide autoHideDuration={200}
                autoHideTimeout={500}
            >
                <CommentsList/>
            </JumboScrollbar>
        </JumboCardQuick>
    );
};
/* Todo scrollHeight prop define */
export default Comments;
