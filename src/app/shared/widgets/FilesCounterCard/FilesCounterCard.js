import React from 'react';
import JumboCardQuick from "@jumbo/components/JumboCardQuick";
import {Typography} from "@mui/material";
import Div from "@jumbo/shared/Div";
import {ASSET_IMAGES} from "../../../utils/constants/paths";
import {getAssetPath} from "../../../utils/appHelpers";

const FilesCounterCard = () => {
    return (
        <JumboCardQuick bgColor={'#23BCBA'}>
            <Div sx={{display: "flex", alignItems: 'center'}}>
                <img alt={""} src={getAssetPath(`${ASSET_IMAGES}/dashboard/filesIcon.svg`,"46x46")}/>
                <Div sx={{ml: 2, flex: 1}}>
                    <Typography color={'common.white'} variant={"h2"} mb={.5}>42</Typography>
                    <Typography color={'common.white'} variant={"h5"} mb={0}>Files</Typography>
                </Div>
            </Div>
        </JumboCardQuick>
    );
};

export default FilesCounterCard;
