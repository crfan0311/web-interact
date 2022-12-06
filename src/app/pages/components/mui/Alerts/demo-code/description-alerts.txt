import React from 'react';
import JumboDemoCard from "@jumbo/components/JumboDemoCard";
import {Alert, AlertTitle, Stack} from "@mui/material";
import code from "../../mui/Alerts/demo-code/description-alerts.txt";

const DescriptionAlerts = () => {
    return (
        <JumboDemoCard
            title={"Description Alerts"}
            demoCode={code}
            wrapperSx={{backgroundColor: 'background.paper', pt: 0}}
        >
            <Stack sx={{width: '100%'}} spacing={2}>
                <Alert severity="error">
                    <AlertTitle>Error</AlertTitle>
                    This is an error alert — <strong>check it out!</strong>
                </Alert>
                <Alert severity="warning">
                    <AlertTitle>Warning</AlertTitle>
                    This is a warning alert — <strong>check it out!</strong>
                </Alert>
                <Alert severity="info">
                    <AlertTitle>Info</AlertTitle>
                    This is an info alert — <strong>check it out!</strong>
                </Alert>
                <Alert severity="success">
                    <AlertTitle>Success</AlertTitle>
                    This is a success alert — <strong>check it out!</strong>
                </Alert>
            </Stack>
        </JumboDemoCard>
    );
};

export default DescriptionAlerts;
