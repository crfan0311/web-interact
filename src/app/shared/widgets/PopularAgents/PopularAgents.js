import React from 'react';
import {agents} from './data'
import AgentDetail from "./AgentDetail";
import {Typography} from "@mui/material";
import Grid from "@mui/material/Grid";
import {useTranslation} from "react-i18next";

const PopularAgents = () => {
    const {t} = useTranslation();
    return (
        <React.Fragment>
            <Typography variant={"h4"} sx={{mb: 2}}>{t("widgets.title.popularAgents")}</Typography>
            <Grid container spacing={3.75}>
                {
                    agents.map((agent, index) => (
                        <Grid item xs={12} sm={6} lg={3} key={index}>
                            <AgentDetail agentDetail={agent}/>
                        </Grid>
                    ))
                }
            </Grid>
        </React.Fragment>
    );
};
export default PopularAgents;
