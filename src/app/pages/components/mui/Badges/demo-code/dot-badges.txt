import React from 'react';
import JumboDemoCard from "@jumbo/components/JumboDemoCard";
import {Badge} from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";
import code from "../Badges/demo-code/dot-badges.txt";

const DotBadge = () => {
    return (
        <JumboDemoCard title={"Dot Badge"} demoCode={code} wrapperSx={{backgroundColor: 'background.paper', pt: 0}}>
            <Badge color={"secondary"} variant={"dot"}>
                <MailIcon/>
            </Badge>
        </JumboDemoCard>
    );
};

export default DotBadge;
