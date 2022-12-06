import React from 'react';
import Stack from "@mui/material/Stack";
import {Avatar} from "@mui/material";
import JumboDemoCard from "@jumbo/components/JumboDemoCard";
import code from "../Avatars/demo-code/image-avatars.txt"
import {ASSET_AVATARS} from "../../../../utils/constants/paths";
import {getAssetPath} from "../../../../utils/appHelpers";

const ImageAvatars = () => {
    return (
        <JumboDemoCard title={"Image Avatars"} demoCode={code} wrapperSx={{backgroundColor: 'background.paper', pt: 0}}>
            <Stack direction="row" spacing={2}>
                <Avatar alt="Remy Sharp" src={getAssetPath(`${ASSET_AVATARS}/avatar7.jpg`,"40x40")}/>
                <Avatar alt="Travis Howard" src={getAssetPath(`${ASSET_AVATARS}/avatar10.jpg`,"40x40")}/>
                <Avatar alt="Cindy Baker" src={getAssetPath(`${ASSET_AVATARS}/avatar3.jpg`,"40x40")}/>
            </Stack>
        </JumboDemoCard>
    );
};

export default ImageAvatars;
