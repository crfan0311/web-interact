import React from 'react';
import {Typography} from "@mui/material";
import AccountBalanceWalletRoundedIcon from '@mui/icons-material/AccountBalanceWalletRounded';
import CardIconText from "@jumbo/shared/CardIconText";
import {useTranslation} from "react-i18next";
import PropTypes from "prop-types";

const ObjectCountRevenue = ({vertical}) => {
    const {t} = useTranslation();
    return (
        <CardIconText
            icon={<AccountBalanceWalletRoundedIcon fontSize="large"/>}
            title={<Typography variant={"h4"} color={"secondary.main"}>29,380</Typography>}
            subTitle={<Typography variant={"h6"}
                                  color={"text.secondary"}>{t('widgets.subheader.objectCountRevenues')}</Typography>}
            color={"secondary.main"}
            disableHoverEffect={true}
            hideArrow={true}
            variant={"outlined"}
        />
    );
};
/* Todo vertical prop define */
ObjectCountRevenue.propTypes = {
    vertical: PropTypes.bool,
};
export default ObjectCountRevenue;
