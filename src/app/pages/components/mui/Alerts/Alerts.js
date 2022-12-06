import React from 'react';
import BasicAlerts from "./BasicAlerts";
import DescriptionAlerts from "./DescriptionAlerts";
import ActionAlerts from "./ActionAlerts";
import TransitionAlerts from "./TransitionAlerts";
import IconAlerts from "./IconAlerts";
import OutlinedAlerts from "./OutlinedAlerts";
import FilledAlerts from "./FilledAlerts";
import Masonry from "@mui/lab/Masonry";

const Alerts = () => {
    return (
        <Masonry
            spacing={3.75}
            columns={{ xs: 1, lg: 2 }}
            sx={{minWidth: '100%', width: 'auto'}}
        >
           <BasicAlerts/>
           <DescriptionAlerts/>
           <ActionAlerts/>
           <TransitionAlerts/>
           <IconAlerts/>
           <OutlinedAlerts/>
           <FilledAlerts/>
        </Masonry>
    );
};

export default Alerts;
