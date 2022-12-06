import React from 'react';
import OfflineBoltOutlinedIcon from '@mui/icons-material/OfflineBoltOutlined';
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import CardIconText from "@jumbo/shared/CardIconText";
import {useTranslation} from "react-i18next";

const Ideas = () => {
    const {t} = useTranslation();
    return (
        <CardIconText
            icon={<LightbulbOutlinedIcon fontSize={"large"}/>}
            onHoverIcon={<OfflineBoltOutlinedIcon fontSize={"large"}/>}
            title={"2,371"}
            subTitle={t('widgets.subheader.ideas')}
        />
    );
};

export default Ideas;
