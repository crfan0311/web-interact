import React from 'react';
import code from './demo-code/overlap-badge';
import JumboDemoCard from "@jumbo/components/JumboDemoCard";
import Stack from "@mui/material/Stack";
import Badge from "@mui/material/Badge";
import Box from "@mui/material/Box";

const shapeStyles = { bgcolor: 'primary.main', width: 40, height: 40 };
const shapeCircleStyles = { borderRadius: '50%' };
const rectangle = <Box component="span" sx={shapeStyles} />;
const circle = (
    <Box component="span" sx={{ ...shapeStyles, ...shapeCircleStyles }} />
);

const BadgeOverlap = () => {
    return (
        <JumboDemoCard
            title={"Badge overlap"}
            demoCode={code}
            wrapperSx={{backgroundColor: 'background.paper', pt: 0}}
        >
            <Stack spacing={3} direction="row">
                <Badge color="secondary" badgeContent=" ">
                    {rectangle}
                </Badge>
                <Badge color="secondary" badgeContent=" " variant="dot">
                    {rectangle}
                </Badge>
                <Badge color="secondary" overlap="circular" badgeContent=" ">
                    {circle}
                </Badge>
                <Badge color="secondary" overlap="circular" badgeContent=" " variant="dot">
                    {circle}
                </Badge>
            </Stack>
        </JumboDemoCard>
    );
};

export default BadgeOverlap;
