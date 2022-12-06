import React from 'react';
import Typography from "@mui/material/Typography";
import CkEditorExample from "./components/CkEditorExample";
import {useTranslation} from "react-i18next";

const CkEditor = () => {
    const {t} = useTranslation();
    return (
        <React.Fragment>
            <Typography variant={"h1"} sx={{mb: 3}}>{t('pages.title.ckEditor')}</Typography>
            <CkEditorExample/>
        </React.Fragment>
    );
};

export default CkEditor;
