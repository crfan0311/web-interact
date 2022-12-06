import React from 'react';
import JumboDemoCard from "@jumbo/components/JumboDemoCard";
import {Avatar, AvatarGroup} from "@mui/material";
import code from "../Avatars/demo-code/group-avatars.txt";
import {ASSET_AVATARS} from "../../../../utils/constants/paths";
import {getAssetPath} from "../../../../utils/appHelpers";

const GroupAvatars = () => {
    return (
        <JumboDemoCard title={"Group Avatars"} demoCode={code} wrapperSx={{backgroundColor: 'background.paper', pt: 0}}>
            <AvatarGroup max={4}>
                <Avatar alt="Remy Sharp" src={getAssetPath(`${ASSET_AVATARS}/avatar9.jpg`, "44x44")}/>
                <Avatar alt="Travis Howard" src={getAssetPath(`${ASSET_AVATARS}/avatar13.jpg`, "44x44")}/>
                <Avatar alt="Cindy Baker" src={getAssetPath(`${ASSET_AVATARS}/avatar7.jpg`, "44x44")}/>
                <Avatar alt="Agnes Walker" src={getAssetPath(`${ASSET_AVATARS}/avatar11.jpg`, "44x44")}/>
                <Avatar alt="Trevor Henderson" src={getAssetPath(`${ASSET_AVATARS}/avatar3.jpg`, "44x44")}/>
            </AvatarGroup>
        </JumboDemoCard>
    );
};

export default GroupAvatars;
