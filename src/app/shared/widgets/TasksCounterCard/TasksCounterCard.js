import React from 'react';
import JumboCardQuick from "@jumbo/components/JumboCardQuick";
import {Typography} from "@mui/material";
import Div from "@jumbo/shared/Div";
import {ASSET_IMAGES} from "../../../utils/constants/paths";
import {getAssetPath} from "../../../utils/appHelpers";

const TasksCounterCard = () => {
    return (
        <JumboCardQuick bgColor={'#E44A77'}>
            <Div sx={{display:"flex", alignItems: 'center'}}>
                <img alt={"Task Icon"} src={getAssetPath(`${ASSET_IMAGES}/dashboard/tasksIcon.svg`,"46x46")}/>
                <Div sx={{ml: 2, flex: 1}}>
                    <Typography color={'common.white'} variant={"h2"} mb={.5}>457</Typography>
                    <Typography color={'common.white'} variant={"h5"} mb={0}>Tasks</Typography>
                </Div>
            </Div>
        </JumboCardQuick>
    );
};

export default TasksCounterCard;
