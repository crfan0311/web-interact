import React from 'react';
import Typography from "@mui/material/Typography";
import JumboCardQuick from "@jumbo/components/JumboCardQuick";
import {useTranslation} from "react-i18next";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import EmailCampaignChart from "../EmailCampaign/EmailCampaignChart";

const NewVisitorsThisMonth = () => {
    const {t} = useTranslation();
    return (
        <JumboCardQuick
            title={<Typography fontWeight={"500"} variant={"h3"} color={"common.white"}>24,569</Typography>}
            subheader={
                <Typography
                    variant={"h6"}
                    color={"common.white"}
                    mb={0}>{t('widgets.subheader.newVisitors')}</Typography>
            }
            action={<TrendingUpIcon fontSize={"small"}/>}
            reverse
            sx={{color: "common.white", borderTop: "4px solid #F39711"}}
            bgColor={["#f9cc8a", "#f39711"]}
            wrapperSx={{pb: 0}}
        >
            <EmailCampaignChart/>
        </JumboCardQuick>
    );
};

export default NewVisitorsThisMonth;
