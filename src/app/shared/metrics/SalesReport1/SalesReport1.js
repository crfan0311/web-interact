import React from 'react';
import SalesReportChart1 from "./SalesReportChart1";
import {Chip, Typography} from "@mui/material";
import JumboCardQuick from "@jumbo/components/JumboCardQuick";
import {useTranslation} from "react-i18next";

const SalesReport1 = () => {
    const {t} = useTranslation();
    return (
        <JumboCardQuick
            title={<Typography variant={"h4"} mb={0}>{t('widgets.title.salesReport1')}</Typography>}
            action={<Chip label={"Today"} color={"primary"} size={"small"} />}
            wrapperSx={{pt: 0}}
        >
            <Typography variant={"h2"}>$685k+</Typography>
            <Typography variant={"body1"} color="text.secondary" mb={1.5}>Past 9 months data</Typography>
            <SalesReportChart1/>
        </JumboCardQuick>
    );
};

export default SalesReport1;
