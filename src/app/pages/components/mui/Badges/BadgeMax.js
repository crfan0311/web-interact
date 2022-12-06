import React from 'react';
import JumboDemoCard from "@jumbo/components/JumboDemoCard";
import {Badge, Stack} from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";
import code from "../Badges/demo-code/badge-max.txt";

const BadgeMax = () => {
    return (
        <JumboDemoCard title={"Maximum Value"} demoCode={code} wrapperSx={{backgroundColor: 'background.paper', pt: 0}}>
            <Stack spacing={4} direction="row" sx={{color: 'action.active'}}>
                <Badge color="primary" badgeContent={99}>
                    <MailIcon/>
                </Badge>
                <Badge color="primary" badgeContent={100}>
                    <MailIcon/>
                </Badge>
                <Badge color="primary" badgeContent={1000} max={999}>
                    <MailIcon/>
                </Badge>
            </Stack>
        </JumboDemoCard>
    );
};

export default BadgeMax;
