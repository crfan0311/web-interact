import React from 'react';
import BasicToggleButtons from "./BasicToggleButtons";
import ToggleButtonsMultiple from "./ToggleButtonsMultiple";
import ToggleButtonSizes from "./ToggleButtonSizes";
import ColorToggleButtons from "./ColorToggleButtons";
import VerticalToggleButtons from "./VerticalToggleButtons";
import ToggleButtonNotEmpty from "./ToggleButtonNotEmpty";
import StandaloneToggleButton from "./StandaloneToggleButton";
import Masonry from "@mui/lab/Masonry";

const ToggleButtons = () => {
    return (
        <Masonry
            spacing={3.75}
            columns={{xs: 1, lg: 2}}
            sx={{minWidth: '100%', width: 'auto'}}
        >
            <BasicToggleButtons/>
            <ToggleButtonsMultiple/>
            <ToggleButtonSizes/>
            <ColorToggleButtons/>
            <VerticalToggleButtons/>
            <ToggleButtonNotEmpty/>
            <StandaloneToggleButton/>
        </Masonry>
    );
};

export default ToggleButtons;
