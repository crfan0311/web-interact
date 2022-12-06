import React from 'react';
import JumboDemoCard from "@jumbo/components/JumboDemoCard";
import Button from "@mui/material/Button";
import code from "../Selects/demo-code/dialog-select.txt";
import {
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    FormControl,
    InputLabel,
    MenuItem,
    OutlinedInput,
    Select
} from "@mui/material";
import Box from "@mui/material/Box";

const DialogSelect = () => {
    const [open, setOpen] = React.useState(false);
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(Number(event.target.value) || '');
    };
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason !== 'backdropClick') {
            setOpen(false);
        }
    };
    return (
        <JumboDemoCard title={"Dialog Select"} demoCode={code} wrapperSx={{backgroundColor: 'background.paper', pt: 0}}>
            <Button onClick={handleClickOpen}>Open select dialog</Button>
            <Dialog disableEscapeKeyDown open={open} onClose={handleClose}>
                <DialogTitle>Fill the form</DialogTitle>
                <DialogContent>
                    <Box component="form" sx={{display: 'flex', flexWrap: 'wrap'}}>
                        <FormControl sx={{m: 1, minWidth: 120}}>
                            <InputLabel htmlFor="demo-dialog-native">Age</InputLabel>
                            <Select
                                native
                                value={age}
                                onChange={handleChange}
                                input={<OutlinedInput label="Age" id="demo-dialog-native"/>}
                            >
                                <option aria-label="None" value=""/>
                                <option value={10}>Ten</option>
                                <option value={20}>Twenty</option>
                                <option value={30}>Thirty</option>
                            </Select>
                        </FormControl>
                        <FormControl sx={{m: 1, minWidth: 120}}>
                            <InputLabel id="demo-dialog-select-label">Age</InputLabel>
                            <Select
                                labelId="demo-dialog-select-label"
                                id="demo-dialog-select"
                                value={age}
                                onChange={handleChange}
                                input={<OutlinedInput label="Age"/>}
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleClose}>Ok</Button>
                </DialogActions>
            </Dialog>
        </JumboDemoCard>
    );
};

export default DialogSelect;
