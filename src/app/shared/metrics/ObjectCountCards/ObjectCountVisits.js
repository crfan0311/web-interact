import React from 'react';
import {Typography} from "@mui/material";
import TouchAppRoundedIcon from '@mui/icons-material/TouchAppRounded';
import CardIconText from "@jumbo/shared/CardIconText";
import {useTranslation} from "react-i18next";
import PropTypes from "prop-types";

const ObjectCountVisits = ({vertical}) => {
    const {t} = useTranslation();
    return (
        <CardIconText
            icon={<TouchAppRoundedIcon fontSize="large"/>}
            title={<Typography variant={"h4"} color={"success.main"}>2,870</Typography>}
            subTitle={<Typography variant={"h6"}
                                  color={"text.secondary"}>{t('widgets.subheader.objectCountVisits')}</Typography>}
            color={"success.main"}
            disableHoverEffect={true}
            hideArrow={true}
            variant={"outlined"}
        />
    );
};
/* Todo vertical prop define */
ObjectCountVisits.propTypes = {
    vertical: PropTypes.bool,
};
export default ObjectCountVisits;
