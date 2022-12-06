import React from 'react';
import NewSubscribersChart from "./NewSubscribersChart";
import StarIcon from '@mui/icons-material/Star';
import {Grid, Typography} from "@mui/material";
import JumboCardQuick from "@jumbo/components/JumboCardQuick";
import {useTranslation} from "react-i18next";

const NewSubscribers = () => {
    const {t} = useTranslation();
    return (
        <JumboCardQuick
            title={<StarIcon sx={{color: 'common.white'}}/>}
            bgColor={"#E44A77"}
            sx={{color: "common.white"}}
            wrapperSx={{pt: .5}}
        >
            <Grid container columnSpacing={2} alignItems={"flex-end"}>
                <Grid item xs={6}>
                    <Typography variant={"h2"} color={"common.white"}>85k+</Typography>
                    <Typography variant={"h6"} color={"common.white"}
                                mb={0}>{t('widgets.subheader.newSubscribers')}</Typography>
                </Grid>
                <Grid item xs={6}>
                    <NewSubscribersChart/>
                </Grid>
            </Grid>
        </JumboCardQuick>
    );
};

export default NewSubscribers;
