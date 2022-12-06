import React from 'react';
import NewAuthorsChart from "./NewAuthorsChart";
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import {Grid, Typography} from "@mui/material";
import JumboCardQuick from "@jumbo/components/JumboCardQuick";
import Div from "@jumbo/shared/Div";
import {useTranslation} from "react-i18next";

const NewAuthors = () => {
    const {t} = useTranslation();
    return (
        <JumboCardQuick
            title={<SupervisorAccountIcon sx={{color: 'common.white'}}/>}
            bgColor={"#20c997"}
            sx={{color: "common.white"}}
            wrapperSx={{pt: 0}}
        >
            <Grid container columnSpacing={2} alignItems={"flex-end"}>
                <Grid item xs={5}>
                    <Typography variant={"h2"} color={"common.white"}>232</Typography>
                    <Typography
                        variant={"h6"}
                        color={"common.white"}
                        mb={0}
                        sx={{whiteSpace: 'nowrap'}}
                    >
                        {t('widgets.subheader.newAuthors')}
                    </Typography>
                </Grid>
                <Grid item xs={7}>
                    <Div sx={{mt: -1.25}}>
                        <NewAuthorsChart/>
                    </Div>
                </Grid>
            </Grid>
        </JumboCardQuick>
    );
};

export default NewAuthors;
