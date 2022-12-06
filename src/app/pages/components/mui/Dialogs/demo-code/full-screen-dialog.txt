import React from 'react';
import {AppBar, Button, Dialog, IconButton, ListItem, ListItemText, Slide, Toolbar, Typography} from "@mui/material";
import {List} from "@mui/icons-material";
import Divider from "@mui/material/Divider";
import CloseIcon from "@mui/icons-material/Close";
import code from "../Dialogs/demo-code/full-screen-dialog.txt";
import JumboDemoCard from "@jumbo/components/JumboDemoCard";

const Transition = React.forwardRef((props, ref) => {
    return <Slide direction={"up"} ref={ref} {...props}/>
})
const FullScreenDialog = () => {
    const [open, setOpen] = React.useState(false);
    return (
        <JumboDemoCard demoCode={code}>
            <Button variant="outlined" onClick={() => setOpen(true)}>
                Open full-screen dialog
            </Button>
            <Dialog
                fullScreen
                open={open}
                onClose={() => setOpen(false)}
                TransitionComponent={Transition}
            >
                <AppBar sx={{position: 'relative'}}>
                    <Toolbar>
                        <IconButton
                            edge="start"
                            color="inherit"
                            onClick={() => setOpen(false)}
                            aria-label="close"
                        >
                            <CloseIcon/>
                        </IconButton>
                        <Typography sx={{ml: 2, flex: 1}} variant="h6" component="div">
                            Sound
                        </Typography>
                        <Button autoFocus color="inherit" onClick={() => setOpen(false)}>
                            save
                        </Button>
                    </Toolbar>
                </AppBar>
                <List>
                    <ListItem button>
                        <ListItemText primary="Phone ringtone" secondary="Titania"/>
                    </ListItem>
                    <Divider/>
                    <ListItem button>
                        <ListItemText
                            primary="Default notification ringtone"
                            secondary="Tethys"
                        />
                    </ListItem>
                </List>
            </Dialog>
        </JumboDemoCard>
    );
};

export default FullScreenDialog;
