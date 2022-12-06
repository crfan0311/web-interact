import React from 'react';
import JumboDemoCard from "@jumbo/components/JumboDemoCard";
import {Alert, Stack} from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import code from "../../mui/Alerts/demo-code/icon-alerts.txt";

const IconAlerts = () => {
    return (
        <JumboDemoCard
            title={"Alert with Icon"}
            demoCode={code}
            wrapperSx={{backgroundColor: 'background.paper', pt: 0}}
        >
            <Stack sx={{width: '100%'}} spacing={2}>
                <Alert icon={<CheckIcon fontSize="inherit"/>} severity="success">
                    This is a success alert — check it out!
                </Alert>
                <Alert
                    iconMapping={{
                        success: <CheckCircleOutlineIcon fontSize="inherit"/>,
                    }}
                >
                    This is a success alert — check it out!
                </Alert>
                <Alert icon={false} severity="success">
                    This is a success alert — check it out!
                </Alert>
            </Stack>
        </JumboDemoCard>
    );
};

export default IconAlerts;
