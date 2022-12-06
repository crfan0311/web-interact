import React from 'react';
import PropTypes from 'prop-types';
import DialogBase from "@jumbo/components/JumboDialog/components/DialogBase";

const DialogDefault = (props) => {
    return (
        <DialogBase
            sx={{'& .MuiPaper-root': {borderRadius: 2}}}
            fullWidth
            maxWidth={"xs"}
            {...props}
        />
    );
};

DialogDefault.defaultProps = {
    open: false,
    onClose: () => {
    }
};

DialogDefault.propTypes = {
    open: PropTypes.bool,
    title: PropTypes.node,
    subheader: PropTypes.node,
    content: PropTypes.node,
    actions: PropTypes.node,
    onClose: PropTypes.func,
};

export default DialogDefault;