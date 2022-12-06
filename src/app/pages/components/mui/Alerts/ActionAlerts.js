import React from 'react';
import JumboDemoCard from "@jumbo/components/JumboDemoCard";
import {Alert, Button, Stack} from "@mui/material";
import code from "../../mui/Alerts/demo-code/action-alerts.txt";
const ActionAlerts = () => {
    return (
        <JumboDemoCard
            title={"Action Alerts"}
            demoCode={code}
            wrapperSx={{backgroundColor: 'background.paper', pt: 0}}
        >
            <Stack sx={{ width: '100%' }} spacing={2}>
                <Alert onClose={() => {}}>This is a success alert — check it out!</Alert>
                <Alert
                    action={
                        <Button color="inherit" size="small">
                            UNDO
                        </Button>
                    }
                >
                    This is a success alert — check it out!
                </Alert>
            </Stack>
        </JumboDemoCard>
    );
};

export default ActionAlerts;
