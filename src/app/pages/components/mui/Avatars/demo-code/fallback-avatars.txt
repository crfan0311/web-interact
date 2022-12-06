import React from 'react';
import JumboDemoCard from "@jumbo/components/JumboDemoCard";
import {Avatar, Stack} from "@mui/material";
import {deepOrange} from "@mui/material/colors";
import code from '../Avatars/demo-code/fallback-avatars.txt';

const FallbackAvatars = () => {
    return (
        <JumboDemoCard title={"Fallback Avatars"} demoCode={code} wrapperSx={{backgroundColor: 'background.paper', pt: 0}}>
            <Stack direction="row" spacing={2}>
                <Avatar
                    sx={{bgcolor: deepOrange[500]}}
                    alt="Remy"
                    src="/broken-image.jpg"
                >
                    B
                </Avatar>
                <Avatar
                    sx={{bgcolor: deepOrange[500]}}
                    alt="John"
                    src="/broken-image.jpg"
                />
                <Avatar src="/broken-image.jpg"/>
            </Stack>
        </JumboDemoCard>
    );
};

export default FallbackAvatars;
