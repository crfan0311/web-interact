import React from 'react';
import PropTypes from 'prop-types';
import {
    Dialog, DialogTitle, DialogContent, DialogActions,
    Button, Zoom
} from "@mui/material";

const JumboConfirmDialog = (
    {
        icon,
        title,
        subheader,
        message,
        open,
        onConfirm,
        onClose,
        maxWidth
    }) => {
    //todo: need to work on icon, subheader, maxWidth props
    return (
        <Dialog
            open={open}
            TransitionComponent={Zoom}
            keepMounted
            onClose={onClose}
            maxWidth={"xs"}
            aria-describedby="alert-dialog-slide-description"
        >
            <DialogTitle sx={{paddingTop: "22px", paddingBottom: "8px", fontSize: 18}}>{title}</DialogTitle>
            <DialogContent sx={{pb: 1, my: 0}}>
                {message}
            </DialogContent>
            <DialogActions>
                <Button onClick={() => {
                    if (typeof onConfirm === "function")
                        onConfirm();
                    onClose();
                }}>Yes</Button>
                <Button onClick={onClose}>No</Button>
            </DialogActions>
        </Dialog>
    );
};

JumboConfirmDialog.propTypes = {
    icon: PropTypes.node,
    title: PropTypes.node,
    subheader: PropTypes.node,
    message: PropTypes.node,
    open: PropTypes.bool,
    onConfirm: PropTypes.func,
    onClose: PropTypes.func,
    maxWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
};

export default JumboConfirmDialog;
