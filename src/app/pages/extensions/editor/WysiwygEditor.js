import React from 'react';
import WysiwygEditorExample from "./components/WysiwygEditorExample";
import Typography from "@mui/material/Typography";
import {useTranslation} from "react-i18next";

const WysiwygEditor = () => {
    const {t} = useTranslation();
    return (
        <React.Fragment>
            <Typography variant={"h1"} sx={{mb: 3}}>{t('pages.title.wysiwygEditor')}</Typography>
            <WysiwygEditorExample/>
        </React.Fragment>

    );
};

export default WysiwygEditor;
