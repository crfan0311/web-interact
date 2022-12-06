import React from 'react';
import {Typography} from "@mui/material";
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import CardIconText from "@jumbo/shared/CardIconText";
import {useTranslation} from "react-i18next";
import PropTypes from "prop-types";

const ObjectCountOrders = ({vertical}) => {
    const {t} = useTranslation();
    return (
        <CardIconText
            icon={<ShoppingCartRoundedIcon fontSize="large"/>}
            title={<Typography variant={"h4"} color={"primary.main"}>2,380</Typography>}
            subTitle={<Typography variant={"h6"}
                                  color={"text.secondary"}>{t('widgets.subheader.objectCountOrders')}</Typography>}
            color={"primary.main"}
            disableHoverEffect={true}
            hideArrow={true}
            variant={"outlined"}
        />
    );
};
/* Todo vertical prop define */
ObjectCountOrders.propTypes = {
    vertical: PropTypes.bool,
};
export default ObjectCountOrders;
