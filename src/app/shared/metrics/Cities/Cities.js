import React from 'react';
import JumboCardQuick from "@jumbo/components/JumboCardQuick";
import {Typography} from "@mui/material";
import Div from "@jumbo/shared/Div";
import CitiesGraph from "./CitiesGraph";
import {useTranslation} from "react-i18next";

const Cities = () => {
    const {t} = useTranslation();
    return (
        <JumboCardQuick
            title={
                <Typography
                    variant={"h6"}
                    mb={0}
                    sx={{fontSize: 12, color: "common.white", letterSpacing: 1.5}}
                >{t("widgets.title.cities")}</Typography>
            }
            sx={{color: "common.white"}}
            bgColor={"#EF5350"}
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
            <CitiesGraph/>
        </JumboCardQuick>
    );
};

export default Cities;
