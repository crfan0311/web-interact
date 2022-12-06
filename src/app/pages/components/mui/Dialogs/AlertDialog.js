import React from 'react';
import JumboDemoCard from "@jumbo/components/JumboDemoCard";
import {Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from "@mui/material";
import code from "../Dialogs/demo-code/alert-dialog.txt";
import Div from "@jumbo/shared/Div";

const AlertDialog = () => {
    const [open, setOpen] = React.useState(false);

    return (
        <JumboDemoCard title={"Alert Dialog"} demoCode={code} wrapperSx={{backgroundColor: 'background.paper', pt: 0}}>
            <Div sx={{py: {lg: 2}}}>
                <Button variant="outlined" onClick={() => setOpen(true)}>
                    Open alert dialog
                </Button>

                <Dialog
                    open={open}
                    onClose={() => setOpen(false)}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">
                        {"Use Google's location service?"}
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            Let Google help apps determine location. This means sending anonymous
                            location data to Google, even when no apps are running.
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={() => setOpen(false)}>Disagree</Button>
                        <Button onClick={() => setOpen(false)} autoFocus>
                            Agree
                        </Button>
                    </DialogActions>
                </Dialog>
            </Div>
        </JumboDemoCard>
    );
};

export default AlertDialog;
