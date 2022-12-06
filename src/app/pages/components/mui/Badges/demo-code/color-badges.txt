import React from 'react';
import JumboDemoCard from "@jumbo/components/JumboDemoCard";
import {Badge, Stack} from "@mui/material";
import code from "../Badges/demo-code/color-badges.txt";
import MailIcon from '@mui/icons-material/Mail';

const ColorBadges = () => {
    return (
        <JumboDemoCard
            title={"Color Badges"}
            demoCode={code}
            wrapperSx={{backgroundColor: 'background.paper', pt: 0}}
        >
            <Stack spacing={2} direction="row">
                <Badge badgeContent={4} color="secondary">
                    <MailIcon color="action"/>
                </Badge>
                <Badge badgeContent={4} color="success">
                    <MailIcon color="action"/>
                </Badge>
            </Stack>
        </JumboDemoCard>
    );
};

export default ColorBadges;
