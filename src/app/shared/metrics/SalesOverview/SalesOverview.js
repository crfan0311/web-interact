import React, {useState} from 'react';
import ChartSalesOverview from "./ChartSalesOverview";
import Typography from "@mui/material/Typography";
import {Button} from "@mui/material";
import {salesChartData} from "./data";
import Stack from "@mui/material/Stack";
import JumboCardQuick from "@jumbo/components/JumboCardQuick";
import {useTranslation} from "react-i18next";

const SalesOverview = () => {
    const {t} = useTranslation();
    const [chartData, setChartData] = useState(salesChartData.monthly);
    return (
        <JumboCardQuick
            noWrapper
            title={<Typography variant={"h4"}>{t('widgets.title.salesOverview')}</Typography>}
            action={
                <Stack direction={"row"} spacing={1}>
                    <Button
                        size={"small"}
                        variant={"contained"}
                        onClick={() => setChartData(salesChartData.monthly)}
                    >
                        Monthly
                    </Button>
                    <Button
                        size={"small"}
                        variant={"contained"}
                        onClick={() => setChartData(salesChartData.yearly)}
                    >
                        Yearly
                    </Button>
                </Stack>
            }
        >
            <ChartSalesOverview data={chartData}/>
        </JumboCardQuick>
    );
};

export default SalesOverview;
