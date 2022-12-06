import React from 'react'
import Typography from "@mui/material/Typography";
import JumboCardQuick from "@jumbo/components/JumboCardQuick";
import {useTranslation} from "react-i18next";
import {TrendingDown} from "@mui/icons-material";
import ChartNewVisitors from "./ChartNewVisitors";

const EthereumPrice = () => {
    const {t} = useTranslation();
    return (
        <JumboCardQuick
            noWrapper
            title={<Typography variant={"h2"} color={"common.white"}>$6,725</Typography>}
            subheader={
                <Typography
                    variant={"h6"}
                    color={"common.white"}
                    mb={0}
                >{t('widgets.subheader.ethereumPrice')}</Typography>
            }
            action={
                <Typography variant={"body1"}>
                    -3.6% <TrendingDown sx={{verticalAlign: 'middle', fontSize: '1rem', ml: .5}}/>
                </Typography>
            }
            bgColor={"#E73145"}
            sx={{color: "common.white"}}
            headerSx={{pb: 0}}
        >
            <ChartNewVisitors/>
        </JumboCardQuick>
    );
};

export default EthereumPrice;
