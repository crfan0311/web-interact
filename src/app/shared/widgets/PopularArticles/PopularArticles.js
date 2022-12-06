import React from 'react';
import ArticlesList from "./ArticlesList";
import JumboCardQuick from "@jumbo/components/JumboCardQuick";
import JumboDdMenu from "@jumbo/components/JumboDdMenu";
import {menuItems} from "./data";
import JumboScrollbar from "@jumbo/components/JumboScrollbar";
import {useTranslation} from "react-i18next";

const PopularArticles = ({scrollHeight}) => {
    const {t} = useTranslation();
    return (
        <JumboCardQuick
            title={t("widgets.title.popularArticles")}
            action={<JumboDdMenu menuItems={menuItems}/>}
            headerSx={{
                pb: 1,

                '& .MuiCardHeader-action': {
                    my: -.75
                }
            }}
            wrapperSx={{p: 0}}
        >
            <JumboScrollbar
                autoHeight
                autoHeightMin={scrollHeight ? scrollHeight : 395}
                autoHide autoHideDuration={200}
                autoHideTimeout={500}
            >
                <ArticlesList/>
            </JumboScrollbar>
        </JumboCardQuick>
    );
};
/* Todo scrollHeight prop define */
export default PopularArticles;
