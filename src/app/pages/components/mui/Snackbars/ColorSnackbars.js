import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import JumboDemoCard from "@jumbo/components/JumboDemoCard";
import code from "../Snackbars/demo-code/color-snackbars.txt";

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const ColorSnackbars = () => {
    const [open, setOpen] = React.useState(false);

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    return (
        <JumboDemoCard title={"Color Snackbars"} demoCode={code}
                       wrapperSx={{backgroundColor: 'background.paper', pt: 0}}>
            <Stack spacing={2} sx={{width: '100%'}}>
                <Button variant="outlined" onClick={() => setOpen(true)}>
                    Open success snackbar
                </Button>
                <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
                    <Alert onClose={handleClose} severity="success" sx={{width: '100%'}}>
                        This is a success message!
                    </Alert>
                </Snackbar>
                <Alert severity="error">This is an error message!</Alert>
                <Alert severity="warning">This is a warning message!</Alert>
                <Alert severity="info">This is an information message!</Alert>
                <Alert severity="success">This is a success message!</Alert>
            </Stack>
        </JumboDemoCard>
    );
};
export default ColorSnackbars;
