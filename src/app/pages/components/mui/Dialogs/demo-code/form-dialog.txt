import React from 'react';
import JumboDemoCard from "@jumbo/components/JumboDemoCard";
import {Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField} from "@mui/material";
import code from "../Dialogs/demo-code/form-dialog.txt";
import Div from "@jumbo/shared/Div";

const FormDialog = () => {
    const [open, setOpen] = React.useState(false);
    return (
        <JumboDemoCard
            title={"Form Dialog"}
            demoCode={code}
            wrapperSx={{backgroundColor: 'background.paper', pt: 0}}
        >
            <Div>
                <Button variant="outlined" onClick={() => setOpen(true)}>
                    Open form dialog
                </Button>
                <Dialog open={open} onClose={() => setOpen(false)}>
                    <DialogTitle>Subscribe</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            To subscribe to this website, please enter your email address here. We
                            will send updates occasionally.
                        </DialogContentText>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            label="Email Address"
                            type="email"
                            fullWidth
                            variant="standard"
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={() => setOpen(false)}>Cancel</Button>
                        <Button onClick={() => setOpen(false)}>Subscribe</Button>
                    </DialogActions>
                </Dialog>
            </Div>
        </JumboDemoCard>
    );
};

export default FormDialog;
