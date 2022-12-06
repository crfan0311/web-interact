import React from 'react';
import JumboCardQuick from "@jumbo/components/JumboCardQuick";
import {Typography} from "@mui/material";
import Div from "@jumbo/shared/Div";
import {ASSET_IMAGES} from "../../../utils/constants/paths";
import {getAssetPath} from "../../../utils/appHelpers";

const TeamsCounterCard = () => {
    return (
        <JumboCardQuick bgColor={'#E73145'}>
            <Div sx={{display:"flex", alignItems: 'center'}}>
                <img alt={""} src={getAssetPath(`${ASSET_IMAGES}/dashboard/teamsIcon.svg`, "46x46")}/>
                <Div sx={{ml: 2, flex: 1}}>
                    <Typography color={'common.white'} variant={"h2"} mb={.5}>13</Typography>
                    <Typography color={'common.white'} variant={"h5"} mb={0}>Teams</Typography>
                </Div>
            </Div>
        </JumboCardQuick>
    );
};

export default TeamsCounterCard;
