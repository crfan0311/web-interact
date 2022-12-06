import React from 'react';
import OrdersReportChart from "./OrdersReportChart";
import {Typography} from "@mui/material";
import JumboCardQuick from "@jumbo/components/JumboCardQuick";
import {useTranslation} from "react-i18next";

const OrdersReport = ({chartHeight, subTitle}) => {
    const {t} = useTranslation();
    return (
        <JumboCardQuick
            title={<Typography variant={"h4"} mb={0}>{t('widgets.title.orderReports')}</Typography>}
            subheader={subTitle === null ? subTitle : t(`widgets.subheader.orderReports`)}
            sx={{textAlign: 'center'}}
            wrapperSx={{pt: 0}}
        >
            <OrdersReportChart height={chartHeight}/>
        </JumboCardQuick>
    );
};
/* Todo prop define */
export default OrdersReport;
