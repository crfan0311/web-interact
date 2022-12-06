import React from 'react';
import JumboDemoCard from "@jumbo/components/JumboDemoCard";
import {Alert, Button, Collapse, IconButton} from "@mui/material";
import Div from "@jumbo/shared/Div";
import CloseIcon from "@mui/icons-material/Close";
import code from "../../mui/Alerts/demo-code/transition-alerts.txt";

const TransitionAlerts = () => {
    const [open, setOpen] = React.useState(true);
    return (
        <JumboDemoCard
            title={"Transition Alert"}
            demoCode={code}
            wrapperSx={{backgroundColor: 'background.paper', pt: 0}}
        >
            <Div sx={{width: '100%'}}>
                <Collapse in={open}>
                    <Alert
                        action={
                            <IconButton
                                aria-label="close"
                                color="inherit"
                                size="small"
                                onClick={() => {
                                    setOpen(false);
                                }}
                            >
                                <CloseIcon fontSize="inherit"/>
                            </IconButton>
                        }
                        sx={{mb: 2}}
                    >
                        Close me!
                    </Alert>
                </Collapse>
                <Button
                    disabled={open}
                    variant="outlined"
                    onClick={() => {
                        setOpen(true);
                    }}
                >
                    Re-open
                </Button>
            </Div>
        </JumboDemoCard>
    );
};

export default TransitionAlerts;
