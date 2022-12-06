import React from 'react';
import FolderOutlinedIcon from '@mui/icons-material/FolderOutlined';
import FolderOpenOutlinedIcon from '@mui/icons-material/FolderOpenOutlined';
import CardIconText from "@jumbo/shared/CardIconText";
import {useTranslation} from "react-i18next";

const Documents = () => {
    const {t} = useTranslation();
    return (
        <CardIconText
            icon={<FolderOutlinedIcon fontSize="large"/>}
            onHoverIcon={<FolderOpenOutlinedIcon fontSize="large"/>}
            title={"3,825"}
            subTitle={t('widgets.subheader.documents')}
            color={"secondary.main"}
        />
    );
};

export default Documents;
