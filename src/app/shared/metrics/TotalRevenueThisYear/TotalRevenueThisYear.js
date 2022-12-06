import React from 'react';
import Typography from "@mui/material/Typography";
import JumboCardQuick from "@jumbo/components/JumboCardQuick";
import OnlineSignupChart from "../OnlineSignups/OnlineSignupChart";
import {useTranslation} from "react-i18next";
import Chip from "@mui/material/Chip";

const TotalRevenueThisYear = () => {
    const {t} = useTranslation();
    return (
        <JumboCardQuick
            title={<Typography fontWeight={"500"} variant={"h3"} color={"common.white"}>$235,659</Typography>}
            subheader={
                <Typography
                    variant={"h6"}
                    color={"common.white"}
                    mb={0}>{t('widgets.subheader.totalRevenueYear')}</Typography>
            }
            action={<Chip size={"small"} label={"2022"} sx={{bgcolor: '#F5F7FA'}}/>}
            reverse
            sx={{color: "common.white", borderTop: "4px solid #E73145"}}
            bgColor={["#f4a3ac", "#e73145"]}
            wrapperSx={{pb: 0}}
        >
            <OnlineSignupChart/>
        </JumboCardQuick>
    );
};

export default TotalRevenueThisYear;
