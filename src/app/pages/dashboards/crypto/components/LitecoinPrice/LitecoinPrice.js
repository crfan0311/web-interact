import React from 'react';
import Typography from "@mui/material/Typography";
import JumboCardQuick from "@jumbo/components/JumboCardQuick";
import {useTranslation} from "react-i18next";
import {TrendingUp} from "@mui/icons-material";
import ChartTotalRevenue from "./ChartTotalRevenue";

const LitecoinPrice = () => {
    const {t} = useTranslation();
    return (
        <JumboCardQuick
            title={<Typography variant={"h3"} color={"common.white"}>$8,726</Typography>}
            subheader={
                <Typography
                    variant={"h6"}
                    color={"common.white"}
                    mb={0}
                >{t('widgets.subheader.litecoinPrice')}</Typography>
            }
            action={
                <Typography variant={"body1"} color={"common.white"}>
                    2% <TrendingUp sx={{verticalAlign: 'middle', fontSize: '1rem', ml: .5}}/>
                </Typography>
            }
            bgColor={["#23BCBA", "#45E994"]}
            wrapperSx={{pt: 0}}
        >
            <ChartTotalRevenue/>
        </JumboCardQuick>
    );
};

export default LitecoinPrice;
