import React from 'react';
import JumboCardQuick from "@jumbo/components/JumboCardQuick";
import {Grid, ListItemText, Typography} from "@mui/material";
import RevenueGraph from "./RevenueGraph";
import {useTranslation} from "react-i18next";

const RevenueHistory = () => {
    const {t} = useTranslation();
    return (
        <JumboCardQuick
            title={t("widgets.title.revenueHistory")}
            wrapperSx={{pt: 1}}
        >
            <Grid container spacing={3.75}>
                <Grid item xs={6}>
                    <ListItemText
                        primary={<Typography variant={"h3"} mb={.5}>$216,759</Typography>}
                        secondary={<Typography variant={'body1'} color={'text.secondary'}>YTD Revenue</Typography>}
                    />
                </Grid>
                <Grid item xs={6}>
                    <RevenueGraph/>
                </Grid>
            </Grid>
        </JumboCardQuick>

    );
};
export default RevenueHistory;
