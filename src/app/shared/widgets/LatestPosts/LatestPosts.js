import React from 'react';
import {menuItems} from "./data";
import PostsList from "./PostsList";
import JumboCardQuick from "@jumbo/components/JumboCardQuick";
import JumboScrollbar from "@jumbo/components/JumboScrollbar";
import JumboDdMenu from "@jumbo/components/JumboDdMenu";
import {useTranslation} from "react-i18next";
import PropTypes from "prop-types";

const LatestPosts = ({scrollHeight}) => {
    const {t} = useTranslation();
    return (
        <JumboCardQuick
            title={t('widgets.title.latestPosts')}
            subheader={t('widgets.subheader.latestPosts')}
            action={<JumboDdMenu menuItems={menuItems}/>}
            wrapperSx={{p: 0}}
        >
            <JumboScrollbar
                autoHeight autoHide
                autoHideDuration={200}
                autoHideTimeout={500}
                autoHeightMin={scrollHeight ? scrollHeight : 334}
            >
                <PostsList/>
            </JumboScrollbar>
        </JumboCardQuick>
    );
};
/* Todo scrollHeight prop define :- */
LatestPosts.propTypes = {
    scrollHeight: PropTypes.number
};

export default LatestPosts;
