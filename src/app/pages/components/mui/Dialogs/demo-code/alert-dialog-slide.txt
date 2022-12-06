import React from 'react';
import JumboDemoCard from "@jumbo/components/JumboDemoCard";
import {Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Slide} from "@mui/material";
import code from "../Dialogs/demo-code/alert-dialog-slide.txt";
import Div from "@jumbo/shared/Div";

const Transition = React.forwardRef((props, ref) => {
    return <Slide direction="down" ref={ref} {...props} />;
});
const AlertDialogSlide = () => {
    const [open, setOpen] = React.useState(false);

    return (
        <JumboDemoCard
            title={"Alert Dialog Slide"}
            demoCode={code}
            wrapperSx={{backgroundColor: 'background.paper', pt: 0}}
        >
            <Div>
                <Button variant="outlined" onClick={() => setOpen(true)}>
                    Slide in alert dialog
                </Button>

                <Dialog
                    open={open}
                    TransitionComponent={Transition}
                    keepMounted
                    onClose={() => setOpen(false)}
                    aria-describedby="alert-dialog-slide-description"
                >
                    <DialogTitle>{"Use Google's location service?"}</DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-slide-description">
                            Let Google help apps determine location. This means sending anonymous
                            location data to Google, even when no apps are running.
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={() => setOpen(false)}>Disagree</Button>
                        <Button onClick={() => setOpen(false)}>Agree</Button>
                    </DialogActions>
                </Dialog>
            </Div>
        </JumboDemoCard>
    );
};

export default AlertDialogSlide;
