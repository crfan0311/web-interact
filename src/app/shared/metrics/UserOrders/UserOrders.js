import React from 'react';
import ChartOrders from "./ChartOrders";
import {Typography} from "@mui/material";
import {orders} from "./data";
import JumboCardQuick from "@jumbo/components/JumboCardQuick";
import Div from "@jumbo/shared/Div";
import {useTranslation} from "react-i18next";

const UserOrders = () => {
    const {t} = useTranslation();
    return (
        <JumboCardQuick
            noWrapper
            title={<Typography variant={"h5"} mb={.5}>{t('widgets.title.userOrders')}</Typography>}
            subheader={<Typography variant={"h6"} color={"text.secondary"} mb={0}>293</Typography>}
            headerSx={{pb: 0}}
        >
            <Div sx={{mt: -2.5}}>
                <ChartOrders chartData={orders}/>
            </Div>
        </JumboCardQuick>
    );
};

export default UserOrders;
