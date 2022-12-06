import React from 'react';
import {Dialog, DialogActions, DialogContent, Zoom} from "@mui/material";
import CardHeader from "@mui/material/CardHeader";
import {useJumboDialog} from "@jumbo/components/JumboDialog/hooks/useJumboDialog";

const DialogBase = ({content, actions, title, subheader, contentProps, onClose, TransitionComponent, disableDefaultClose, ...restProps}) => {
    const {open, hideDialog} = useJumboDialog();

    const handleClose = () => {
        onClose();
        if(!disableDefaultClose)
            hideDialog();
    };

    return (
        <Dialog open={open} {...restProps} onClose={handleClose} TransitionComponent={TransitionComponent}>
            {
                title &&
                <CardHeader title={title} subheader={subheader} sx={{ pb: 0}}/>
            }
            <DialogContent {...contentProps}>
                {content}
            </DialogContent>
            {
                actions &&
                <DialogActions>
                    {actions}
                </DialogActions>
            }
        </Dialog>
    );
};

DialogBase.defaultProps = {
    onClose: () => {},
    TransitionComponent: Zoom,
    disableDefaultClose: false,
};

export default DialogBase;