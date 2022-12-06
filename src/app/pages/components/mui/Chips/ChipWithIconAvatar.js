import React from 'react';
import {Chip} from "@mui/material";
import FaceIcon from "@mui/icons-material/Face";
import JumboDemoCard from "@jumbo/components/JumboDemoCard";
import code from "../Chips/demo-code/chip-icon-avatar.txt";

const ChipWithIconAvatar = () => {
    return (
        <JumboDemoCard
            title={"Chip With Icon Avatar"}
            demoCode={code}
            wrapperSx={{backgroundColor: 'background.paper', pt: 0}}
        >
            <Chip icon={<FaceIcon/>} label={"Icon Avatar"}/>
        </JumboDemoCard>
    );
};

export default ChipWithIconAvatar;
