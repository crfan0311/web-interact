import React from 'react';
import ColorBadges from "./ColorBadges";
import BadgesVisibility from "./BadgesVisibility";
import BadgeMax from "./BadgeMax";
import DotBadge from "./DotBadge";
import BasicBadge from "./BasicBadge";
import CustomizedBadge from "./CustomizedBadge";
import BadgeOverlap from "./BadgeOverlap";
import AccessibleBadges from "./AccessibleBadges";
import Masonry from "@mui/lab/Masonry";

const Badges = () => {
    return (
        <Masonry
            spacing={3.75}
            columns={{xs: 1, lg: 2}}
            sx={{minWidth: '100%', width: 'auto'}}
        >
            <BasicBadge/>
            <ColorBadges/>
            <CustomizedBadge/>
            <BadgesVisibility/>
            <BadgeMax/>
            <DotBadge/>
            <BadgeOverlap/>
            <AccessibleBadges/>
        </Masonry>
    );
};

export default Badges;
