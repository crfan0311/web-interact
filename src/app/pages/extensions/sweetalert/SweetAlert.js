import React from 'react';
import Typography from "@mui/material/Typography";
import BasicAlert from "./components/BasicAlert";
import TitleWithText from "./components/TitleWithText";
import SuccessAlert from "./components/SuccessAlert";
import ErrorAlert from "./components/ErrorAlert";
import ImageWithMessage from "./components/ImageWithMessage";
import CustomHtmlMessage from "./components/CustomHtmlMessage";
import CustomPosition from "./components/CustomPosition";
import AutoCloseAlert from "./components/AutoCloseAlert";
import AdvancedAlert from "./components/AdvancedAlert";
import ToastAlerts from "./components/ToastAlerts";
import AlertsType from "./components/AlertsType";
import {useTranslation} from "react-i18next";
import Grid from "@mui/material/Grid";

const SweetAlerts = () => {
    const {t} = useTranslation();
    return (
        <React.Fragment>
            <Typography variant={"h1"} mb={3}>{t('pages.title.swal')}</Typography>
            <Grid container spacing={3.75}>
                <Grid item xs={12} lg={6}>
                    <BasicAlert/>
                </Grid>
                <Grid item xs={12} lg={6}>
                    <TitleWithText/>
                </Grid>
                <Grid item xs={12} lg={6}>
                    <SuccessAlert/>
                </Grid>
                <Grid item xs={12} lg={6}>
                    <ErrorAlert/>
                </Grid>
                <Grid item xs={12} lg={6}>
                    <ImageWithMessage/>
                </Grid>
                <Grid item xs={12} lg={6}>
                    <CustomHtmlMessage/>
                </Grid>
                <Grid item xs={12} lg={6}>
                    <CustomPosition/>
                </Grid>
                <Grid item xs={12} lg={6}>
                    <AutoCloseAlert/>
                </Grid>
                <Grid item xs={12}>
                    <AdvancedAlert/>
                </Grid>
                <Grid item xs={12}>
                    <ToastAlerts/>
                </Grid>
                <Grid item xs={12}>
                    <AlertsType/>
                </Grid>
            </Grid>
        </React.Fragment>
    );
};

export default SweetAlerts;
