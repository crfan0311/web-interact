import React from 'react';
import JumboDemoCard from "@jumbo/components/JumboDemoCard";
import Stack from "@mui/material/Stack";
import {Avatar} from "@mui/material";
import code from "../Avatars/demo-code/size-avatars.txt";
import {ASSET_AVATARS} from "../../../../utils/constants/paths";
import {getAssetPath} from "../../../../utils/appHelpers";

const SizeAvatars = () => {
    return (
        <JumboDemoCard title={"Size Avatars"} demoCode={code} wrapperSx={{backgroundColor: 'background.paper', pt: 0}}>
            <Stack direction="row" spacing={2}>
                <Avatar
                    alt="Remy Sharp"
                    src={getAssetPath(`${ASSET_AVATARS}/domnic-harris.jpg`, "56x56")}
                    sx={{width: 56, height: 56}}
                />
                <Avatar alt="Remy Sharp" src={getAssetPath(`${ASSET_AVATARS}/avatar6.jpg`, "40x40")}/>
                <Avatar
                    alt="Remy Sharp"
                    src={getAssetPath(`${ASSET_AVATARS}/avatar9.jpg`, "24x24")}
                    sx={{width: 24, height: 24}}
                />
            </Stack>
        </JumboDemoCard>
    );
};

export default SizeAvatars;
