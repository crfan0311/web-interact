import React from 'react';
import CampaignsList from "./CampaignsList";
import {menuItems} from "./data";
import {Chip} from "@mui/material";
import JumboScrollbar from "@jumbo/components/JumboScrollbar";
import JumboDdMenu from "@jumbo/components/JumboDdMenu";
import JumboCardQuick from "@jumbo/components/JumboCardQuick";
import {useTranslation} from "react-i18next";
import PropTypes from "prop-types";
import LatestPosts from "../LatestPosts";

const MarketingCampaign = ({scrollHeight}) => {
    const {t} = useTranslation();
    return (
        <JumboCardQuick
            title={t('widgets.title.marketingCampaign')}
            subheader={t('widgets.subheader.marketingCampaign')}
            action={
                <React.Fragment>
                    <Chip label={"Today"} size={"small"} sx={{mr: 1}}/>
                    <JumboDdMenu menuItems={menuItems}/>
                </React.Fragment>
            }
            wrapperSx={{p: 0}}
        >
            <JumboScrollbar
                autoHeight
                autoHide
                autoHideDuration={200}
                autoHideTimeout={500}
                autoHeightMin={scrollHeight ? scrollHeight : 356}
            >
                <CampaignsList/>
            </JumboScrollbar>
        </JumboCardQuick>
    );
};
/* Todo scrollHeight prop define :- */
LatestPosts.propTypes = {
    scrollHeight: PropTypes.number
};
export default MarketingCampaign;
