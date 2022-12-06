import React from 'react';
import JumboCardQuick from "@jumbo/components/JumboCardQuick";
import {Typography} from "@mui/material";
import Div from "@jumbo/shared/Div";
import {ASSET_IMAGES} from "../../../utils/constants/paths";
import {getAssetPath} from "../../../utils/appHelpers";

const ProjectCounterCard = () => {
    return (
        <JumboCardQuick bgColor={'#6f42c1'}>
            <Div sx={{display: "flex", alignItems: 'center'}}>
                <img alt={"Properties Icon"} src={getAssetPath(`${ASSET_IMAGES}/dashboard/projectIcon.svg`,"46x46")}/>
                <Div sx={{ml: 2, flex: 1}}>
                    <Typography color={'common.white'} variant={"h2"} mb={.5}>09</Typography>
                    <Typography color={'common.white'} variant={"h5"} mb={0}>Projects</Typography>
                </Div>
            </Div>
        </JumboCardQuick>
    );
};

export default ProjectCounterCard;
