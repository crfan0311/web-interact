import React from 'react';
import BasicTabs from "./BasicTabs";
import FullWidthTabs from "./FullWidthTabs";
import IconTabs from "./IconTabs";
import DisabledTabs from "./DisabledTabs";
import WrappedLabelTabs from "./WrappedLabelTabs";
import IconLabelTabs from "./IconLabelTabs";
import ScrollableTabsButtonAuto from "./ScrollableTabsButtonAuto";
import ScrollableTabsButtonForce from "./ScrollableTabsButtonForce";
import Masonry from "@mui/lab/Masonry";

const Tabs = () => {
    return (
        <Masonry
            spacing={3.75}
            columns={{xs: 1, lg: 2}}
            sx={{minWidth: '100%', width: 'auto'}}
        >
            <BasicTabs/>
            <FullWidthTabs/>
            <IconTabs/>
            <DisabledTabs/>
            <WrappedLabelTabs/>
            <IconLabelTabs/>
            <ScrollableTabsButtonAuto/>
            <ScrollableTabsButtonForce/>
        </Masonry>
    );
};

export default Tabs;
