import React from 'react';
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import DzBasic from "./components/DzBasic";
import DzPreviews from "./components/DzPreviews";
import DzStyled from "./components/DzStyled";
import DzWithoutClick from "./components/DzWithoutClick";
import DzWithoutDrag from "./components/DzWithoutDrag";
import DzDisabled from "./components/DzDisabled";
import {useTranslation} from "react-i18next";

const ReactDropzone = () => {
    const {t} = useTranslation();
    return (
        <React.Fragment>
            <Typography variant={"h1"} mb={3}>{t('pages.title.dropzone')}</Typography>
            <Stack spacing={3}>
                <DzBasic/>
                <DzPreviews/>
                <DzStyled/>
                <DzWithoutClick/>
                <DzWithoutDrag/>
                <DzDisabled/>
            </Stack>
        </React.Fragment>
    );
};

export default ReactDropzone;
