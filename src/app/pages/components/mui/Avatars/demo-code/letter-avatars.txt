import React from 'react';
import JumboDemoCard from "@jumbo/components/JumboDemoCard";
import Stack from "@mui/material/Stack";
import {Avatar} from "@mui/material";
import {deepOrange, deepPurple} from "@mui/material/colors";
import code from "../Avatars/demo-code/letter-avatars.txt";

const LetterAvatars = () => {
    return (
        <JumboDemoCard title={"Letter Avatars"} demoCode={code} wrapperSx={{backgroundColor: 'background.paper', pt: 0}}>
            <Stack direction="row" spacing={2}>
                <Avatar>H</Avatar>
                <Avatar sx={{bgcolor: deepOrange[500]}}>N</Avatar>
                <Avatar sx={{bgcolor: deepPurple[500]}}>OP</Avatar>
            </Stack>
        </JumboDemoCard>
    );
};

export default LetterAvatars;
