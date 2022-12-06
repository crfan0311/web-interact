import React from 'react';
import JumboDemoCard from "@jumbo/components/JumboDemoCard";
import {IconButton} from "@mui/material";
import Badge from "@mui/material/Badge";
import MailIcon from '@mui/icons-material/Mail';
import code from "./demo-code/accessible-badge.txt"

const notificationsLabel = (count) => {
    if (count === 0) {
        return 'no notifications';
    }
    if (count > 99) {
        return 'more than 99 notifications';
    }
    return `${count} notifications`;
};

const AccessibleBadges = () => {
    return (
        <JumboDemoCard
            title={"Accessibility"}
            demoCode={code}
            wrapperSx={{backgroundColor: 'background.paper', pt: 0}}
        >
            <IconButton aria-label={notificationsLabel(100)}>
                <Badge badgeContent={100} color="secondary">
                    <MailIcon/>
                </Badge>
            </IconButton>
        </JumboDemoCard>
    );
};

export default AccessibleBadges;
