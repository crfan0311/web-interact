import React from 'react';
import ChartAppUsers from "./ChartAppUsers";
import {Typography} from "@mui/material";
import JumboCardQuick from "@jumbo/components/JumboCardQuick";
import {useTranslation} from "react-i18next";

const AppUsers = () => {
    const {t} = useTranslation();
    return (
        <JumboCardQuick
            title={<Typography variant={"h3"}>{t('widgets.title.appUsers')}</Typography>}
            subheader={<Typography variant={"h6"} color={"text.secondary"}
                                   mb={0}>{t('widgets.subheader.appUsers')}</Typography>}
            wrapperSx={{pt: 0}}
        >
            <ChartAppUsers/>
        </JumboCardQuick>
    );
};

export default AppUsers;
