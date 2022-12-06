import React from 'react';
import JumboDemoCard from "@jumbo/components/JumboDemoCard";
import {List, Radio} from "@mui/icons-material";
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    FormControlLabel,
    ListItem,
    ListItemText,
    RadioGroup
} from "@mui/material";
import code from "../Dialogs/demo-code/confirmation-dialog.txt";

const options = [
    'None',
    'Atria',
    'Callisto',
    'Dione',
    'Ganymede',
    'Hangouts Call',
    'Luna',
    'Oberon',
    'Phobos',
    'Pyxis',
    'Sedna',
    'Titania',
    'Triton',
    'Umbriel',
];
const ConfirmationDialog = () => {
    const [open, setOpen] = React.useState(false);
    const [value, setValue] = React.useState('Dione');

    const handleClickListItem = () => {
        setOpen(true);
    };

    const handleClose = (newValue) => {
        setOpen(false);

        if (newValue) {
            setValue(newValue);
        }
    };
    return (
        <JumboDemoCard
            title={"Confirmation Dialog"}
            demoCode={code}
            wrapperSx={{backgroundColor: 'background.paper', pt: 0}}
        >
            <List component="div" role="group">
                <ListItem button divider disabled>
                    <ListItemText primary="Interruptions"/>
                </ListItem>
                <ListItem
                    button
                    divider
                    aria-haspopup="true"
                    aria-controls="ringtone-menu"
                    aria-label="phone ringtone"
                    onClick={handleClickListItem}
                >
                    <ListItemText primary="Phone ringtone" secondary={value}/>
                </ListItem>
                <ListItem button divider disabled>
                    <ListItemText primary="Default notification ringtone" secondary="Tethys"/>
                </ListItem>
                <ConfirmationDialogRaw
                    id="ringtone-menu"
                    keepMounted
                    open={open}
                    onClose={handleClose}
                    value={value}
                />
            </List>
        </JumboDemoCard>
    );
};

const ConfirmationDialogRaw = ({onClose, value: valueProp, open, ...other}) => {

    const [value, setValue] = React.useState(valueProp);
    const radioGroupRef = React.useRef(null);

    React.useEffect(() => {
        if (!open) {
            setValue(valueProp);
        }
    }, [valueProp, open]);

    const handleEntering = () => {
        if (radioGroupRef.current != null) {
            radioGroupRef.current.focus();
        }
    };

    const handleCancel = () => {
        onClose();
    };

    const handleOk = () => {
        onClose(value);
    };

    const handleChange = (event) => {
        setValue(event.target.value);
    };
    return (
        <Dialog
            sx={{'& .MuiDialog-paper': {width: '80%', maxHeight: 435}}}
            maxWidth="xs"
            TransitionProps={{onEntering: handleEntering}}
            open={open}
            {...other}
        >
            <DialogTitle>Phone Ringtone</DialogTitle>
            <DialogContent dividers>
                <RadioGroup
                    ref={radioGroupRef}
                    aria-label="ringtone"
                    name="ringtone"
                    value={value}
                    onChange={handleChange}
                >
                    {options.map((option) => (
                        <FormControlLabel
                            value={option}
                            key={option}
                            control={<Radio/>}
                            label={option}
                        />
                    ))}
                </RadioGroup>
            </DialogContent>
            <DialogActions>
                <Button autoFocus onClick={handleCancel}>
                    Cancel
                </Button>
                <Button onClick={handleOk}>Ok</Button>
            </DialogActions>
        </Dialog>
    );
}

export default ConfirmationDialog;
