import React from 'react';
import {useJumboDialog} from "./hooks/useJumboDialog";
import DialogDefault from "@jumbo/components/JumboDialog/components/DialogDefault";
import DialogConfirm from "@jumbo/components/JumboDialog/components/DialogConfirm";

const dialogVariants = {
    "default": DialogDefault,
    "confirm": DialogConfirm
};

const JumboDialog = () => {
    const {variant, showDialog, hideDialog, ...restDialogProps} = useJumboDialog();
    const DialogVariant = variant ? dialogVariants[variant] : dialogVariants["default"];

    return (
        <DialogVariant {...restDialogProps}/>
    );
};

export default JumboDialog;