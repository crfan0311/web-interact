import React from 'react';
import JumboCardQuick from "@jumbo/components/JumboCardQuick";
import {Typography} from "@mui/material";
import Div from "@jumbo/shared/Div";
import VisitsGraph from "./VisitsGraph";
import {useTranslation} from "react-i18next";

const VisitsStatistics = () => {
    const {t} = useTranslation();
    return (
        <JumboCardQuick
            title={
                <Typography
                    variant={"h6"}
                    mb={0}
                    sx={{fontSize: 12, color: "common.white", letterSpacing: 1.5}}
                >{t("widgets.title.onlineVisits")}</Typography>
            }
            sx={{color: "common.white"}}
            bgColor={"#23BCBA"}
            wrapperSx={{p: 0, '&:last-child': {p: 0}}}
        >
            <Div
                sx={{
                    p: 3,
                    bottom: 0,
                    left: 0,
                    right: 0,
                    zIndex: 1,
                    position: 'absolute',
                }}
            >
                <Typography variant={"h2"} color={"common.white"}>26,873</Typography>
                <Typography variant={"h6"} color={"common.white"} mb={0}>{"03% This Week"}</Typography>
            </Div>
            <VisitsGraph/>
        </JumboCardQuick>
    );
};

export default VisitsStatistics;
