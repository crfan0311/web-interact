import React from 'react';
import BasicMenu from "./BasicMenu";
import IconMenu from "./IconMenu";
import DenseMenu from "./DenseMenu";
import SimpleSelectedMenu from "./SimpleSelectedMenu";
import PositionedMenu from "./PositionedMenu";
import MenuListComposition from "./MenuListComposition";
import AccountMenu from "./AccountMenu";
import LongMenu from "./LongMenu";
import TypographyMenu from "./TypographyMenu";
import FadeMenu from "./FadeMenu";
import ContextMenu from "./ContextMenu";
import MenuPopupState from "./MenuPopupState";
import Masonry from "@mui/lab/Masonry";

const Menus = () => {
    return (
        <Masonry
            spacing={3.75}
            columns={{xs: 1, lg: 2}}
            sx={{minWidth: '100%', width: 'auto'}}
        >
            <BasicMenu/>
            <IconMenu/>
            <DenseMenu/>
            <SimpleSelectedMenu/>
            <PositionedMenu/>
            <MenuListComposition/>
            <AccountMenu/>
            <LongMenu/>
            <TypographyMenu/>
            <FadeMenu/>
            <ContextMenu/>
            <MenuPopupState/>
        </Masonry>
    );
};

export default Menus;
