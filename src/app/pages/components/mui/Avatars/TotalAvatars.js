import React from 'react';
import JumboDemoCard from "@jumbo/components/JumboDemoCard";
import {Avatar, AvatarGroup} from "@mui/material";
import code from "../Avatars/demo-code/total-avatars.txt";
import {ASSET_AVATARS} from "../../../../utils/constants/paths";
import {getAssetPath} from "../../../../utils/appHelpers";

const TotalAvatars = () => {
    return (
        <JumboDemoCard title={"Total Avatars"} demoCode={code} wrapperSx={{backgroundColor: 'background.paper', pt: 0}}>
            <AvatarGroup total={24}>
                <Avatar alt="Remy Sharp" src={getAssetPath(`${ASSET_AVATARS}/avatar11.jpg`, "44x44")}/>
                <Avatar alt="Travis Howard" src={getAssetPath(`${ASSET_AVATARS}/avatar9.jpg`, "44x44")}/>
                <Avatar alt="Agnes Walker" src={getAssetPath(`${ASSET_AVATARS}/avatar4.jpg`, "44x44")}/>
                <Avatar alt="Trevor Henderson" src={getAssetPath(`${ASSET_AVATARS}/avatar5.jpg`, "44x44")}/>
            </AvatarGroup>
        </JumboDemoCard>
    );
};

export default TotalAvatars;
