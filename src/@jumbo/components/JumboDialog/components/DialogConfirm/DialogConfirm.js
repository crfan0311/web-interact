import React from 'react';
import PropTypes from 'prop-types';
import DialogBase from "../DialogBase";
import Button from "@mui/material/Button";
import {useJumboDialog} from "@jumbo/components/JumboDialog/hooks/useJumboDialog";

const DialogConfirm = ({onYes, onNo, ...restProps}) => {
    const {hideDialog} = useJumboDialog();

    const handleClose = () => {
        onNo();
        hideDialog();
    };

    return (
        <DialogBase
            sx={{'& .MuiPaper-root': {borderRadius: 2}}}
            fullWidth
            maxWidth={"xs"}
            actions={
                <>
                    <Button variant={"contained"} onClick={onYes}>Yes</Button>
                    <Button onClick={handleClose}>No</Button>
                </>
            }
            {...restProps}
        />
    );
};

DialogConfirm.defaultProps = {
    open: false,
    onClose: () => {
    },
    onYes: () => {
    },
    onNo: () => {
    }
};

DialogConfirm.propTypes = {
    open: PropTypes.bool,
    title: PropTypes.node,
    subheader: PropTypes.node,
    content: PropTypes.node,
    actions: PropTypes.node,
    onClose: PropTypes.func,
};

export default DialogConfirm;