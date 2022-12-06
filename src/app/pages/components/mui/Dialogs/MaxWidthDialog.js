import React from 'react';
import JumboDemoCard from "@jumbo/components/JumboDemoCard";
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    FormControlLabel,
    InputLabel,
    Select,
    Switch
} from "@mui/material";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import Div from "@jumbo/shared/Div";
import code from "../Dialogs/demo-code/max-width-dialog.txt";

const MaxWidthDialog = () => {
    const [open, setOpen] = React.useState(false);
    const [fullWidth, setFullWidth] = React.useState(true);
    const [maxWidth, setMaxWidth] = React.useState("sm");
    return (
        <JumboDemoCard
            title={"Max Width Dialog"}
            demoCode={code}
            wrapperSx={{backgroundColor: 'background.paper', pt: 0}}
        >
            <Div>
                <Button variant="outlined" onClick={() => setOpen(true)}>
                    Open max-width dialog
                </Button>
                <Dialog
                    fullWidth={fullWidth}
                    maxWidth={maxWidth}
                    open={open}
                    onClose={() => setOpen(false)}
                >
                    <DialogTitle>Optional sizes</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            You can set my maximum width and whether to adapt or not.
                        </DialogContentText>
                        <Div
                            // noValidate
                            // component="form"
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                m: 'auto',
                                width: 'fit-content',
                            }}
                        >
                            <FormControl sx={{mt: 2, minWidth: 120}}>
                                <InputLabel htmlFor="max-width">maxWidth</InputLabel>
                                <Select
                                    autoFocus
                                    value={maxWidth}
                                    onChange={(event) => setMaxWidth(event.target.value)}
                                    label="maxWidth"
                                    inputProps={{
                                        name: 'max-width',
                                        id: 'max-width',
                                    }}
                                >
                                    <MenuItem value={false}>false</MenuItem>
                                    <MenuItem value="xs">xs</MenuItem>
                                    <MenuItem value="sm">sm</MenuItem>
                                    <MenuItem value="md">md</MenuItem>
                                    <MenuItem value="lg">lg</MenuItem>
                                    <MenuItem value="xl">xl</MenuItem>
                                </Select>
                            </FormControl>
                            <FormControlLabel
                                sx={{mt: 1}}
                                control={
                                    <Switch checked={fullWidth}
                                            onChange={(event) => setFullWidth(event.target.checked)}/>
                                }
                                label="Full width"
                            />
                        </Div>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={() => setOpen(false)}>Close</Button>
                    </DialogActions>
                </Dialog>
            </Div>
        </JumboDemoCard>
    );
};

export default MaxWidthDialog;
