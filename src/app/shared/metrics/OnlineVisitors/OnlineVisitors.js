import React from 'react';
import ChartOnlineVisitors from "./ChartOnlineVisitors";
import {Typography} from "@mui/material";
import JumboCardQuick from "@jumbo/components/JumboCardQuick";
import Div from "@jumbo/shared/Div";
import {useTranslation} from "react-i18next";

const OnlineVisitors = () => {
    const {t} = useTranslation();
    return (
        <JumboCardQuick
            title={<Typography variant={"h3"}>{t('widgets.title.onlineVisitors')}</Typography>}
            subheader={
                <Typography
                    variant={"h6"}
                    color={"text.secondary"}
                    mb={0}
                >{t('widgets.subheader.onlineVisitors')}</Typography>
            }
            noWrapper
        >
            <Div sx={{p: theme => theme.spacing(0, 3, 3)}}>
                <Typography variant={"h5"}>2,855 users online</Typography>
            </Div>
            <ChartOnlineVisitors/>
        </JumboCardQuick>
    );
};

export default OnlineVisitors;
