import React from 'react';
import JumboDemoCard from "@jumbo/components/JumboDemoCard";
import {Alert, Stack} from "@mui/material";
import code from "../../mui/Alerts/demo-code/filled-alerts.txt";

const FilledAlerts = () => {
    return (
        <JumboDemoCard
            title={"Filled Alerts"}
            demoCode={code}
            wrapperSx={{backgroundColor: 'background.paper', pt: 0}}
        >
            <Stack sx={{width: '100%'}} spacing={2}>
                <Alert variant="filled" severity="error">
                    This is an error alert — check it out!
                </Alert>
                <Alert variant="filled" severity="warning">
                    This is a warning alert — check it out!
                </Alert>
                <Alert variant="filled" severity="info">
                    This is an info alert — check it out!
                </Alert>
                <Alert variant="filled" severity="success">
                    This is a success alert — check it out!
                </Alert>
            </Stack>
        </JumboDemoCard>
    );
};

export default FilledAlerts;
