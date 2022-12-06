import React from 'react';
import ActiveUsersChart from "./ActiveUsersChart";
import {Typography} from "@mui/material";
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import JumboCardQuick from "@jumbo/components/JumboCardQuick";
import {useTranslation} from "react-i18next";

const ActiveUsers = () => {
    const {t} = useTranslation();
    return (
        <JumboCardQuick
            title={<Typography variant={"h3"}>257</Typography>}
            subheader={t('widgets.subheader.activeUsers')}
            action={
                <Typography variant={"body1"} color={"success.main"}>
                    1.5% <TrendingUpIcon sx={{verticalAlign: 'middle', fontSize: '1rem', ml: .5, color: 'inherit'}}/>
                </Typography>
            }
            wrapperSx={{pt: 1}}
        >
            <ActiveUsersChart/>
        </JumboCardQuick>
    );
};

export default ActiveUsers;
