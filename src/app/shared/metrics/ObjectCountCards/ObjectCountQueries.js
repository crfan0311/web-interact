import React from 'react';
import {Typography} from "@mui/material";
import ContactPhoneRoundedIcon from '@mui/icons-material/ContactPhoneRounded';
import CardIconText from "@jumbo/shared/CardIconText";
import {useTranslation} from "react-i18next";
import PropTypes from "prop-types";

const ObjectCountQueries = ({vertical}) => {
    const {t} = useTranslation();
    return (
        <CardIconText
            icon={<ContactPhoneRoundedIcon fontSize="large"/>}
            title={<Typography variant={"h4"} color={"warning.main"}>8,380</Typography>}
            subTitle={<Typography variant={"h6"}
                                  color={"text.secondary"}>{t('widgets.subheader.objectCountQueries')}</Typography>}
            color={"warning.main"}
            disableHoverEffect={true}
            hideArrow={true}
            variant={"outlined"}
        />
    );
};
/* Todo vertical prop define */
ObjectCountQueries.propTypes = {
    vertical: PropTypes.bool,
};
export default ObjectCountQueries;
