import React from 'react';
import JumboDemoCard from "@jumbo/components/JumboDemoCard";
import Badge from "@mui/material/Badge";
import MailIcon from '@mui/icons-material/Mail';
import code from "./demo-code/basic.txt";

const BasicBadge = () => {
    return (
        <JumboDemoCard
            title={"Basic Badge"}
            demoCode={code}
            wrapperSx={{backgroundColor: 'background.paper', pt: 0}}
        >
            <Badge badgeContent={4} color="primary">
                <MailIcon color="action"/>
            </Badge>
        </JumboDemoCard>
    );
};

export default BasicBadge;
