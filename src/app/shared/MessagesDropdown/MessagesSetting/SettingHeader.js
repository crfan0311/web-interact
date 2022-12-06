import React from 'react';
import CardHeader from "@mui/material/CardHeader";
import IconButton from "@mui/material/IconButton";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

const SettingHeader = ({backClickCallback}) => {
    return (
        <CardHeader
            avatar={
                <IconButton sx={{ ml: -1.5}} aria-label="back" onClick={backClickCallback}>
                    <ArrowBackIosNewIcon fontSize={"small"}/>
                </IconButton>
            }
            title={"Setting"}
            subheader={"Select your preferences"}
        />
    );
};

export default SettingHeader;