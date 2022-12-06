import React from 'react';
import {Avatar, Chip} from "@mui/material";
import JumboDemoCard from "@jumbo/components/JumboDemoCard";
import code from "../Chips/demo-code/chip-text-avatar.txt";

const ChipWithTextAvatar = () => {
    return (
        <JumboDemoCard
            title={"Chip With Text Avatar"}
            demoCode={code}
            wrapperSx={{backgroundColor: 'background.paper', pt: 0}}
        >
            <Chip avatar={<Avatar>MS</Avatar>} label="Text Avatar"/>
        </JumboDemoCard>
    );
};

export default ChipWithTextAvatar;
