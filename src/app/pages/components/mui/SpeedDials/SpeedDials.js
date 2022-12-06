import React from 'react';
import BasicSpeedDial from "./BasicSpeedDial";
import PlaygroundSpeedDial from "./PlaygroundSpeedDial";
import ControlledOpenSpeedDial from "./ControlledOpenSpeedDial";
import OpenIconSpeedDial from "./OpenIconSpeedDial";
import SpeedDialTooltipOpen from "./SpeedDialTooltipOpen";
import Masonry from "@mui/lab/Masonry";

const SpeedDials = () => {
    return (
        <Masonry
            spacing={3.75}
            columns={{xs: 1, lg: 2}}
            sx={{minWidth: '100%', width: 'auto'}}
        >
            <BasicSpeedDial/>
            <PlaygroundSpeedDial/>
            <ControlledOpenSpeedDial/>
            <OpenIconSpeedDial/>
            <SpeedDialTooltipOpen/>
        </Masonry>
    );
};

export default SpeedDials;
