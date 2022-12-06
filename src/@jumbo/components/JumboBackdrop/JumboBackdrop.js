import React from 'react';
import PropTypes from 'prop-types';
import Div from "@jumbo/shared/Div";

const JumboBackdrop = ({color, opacity, open, sx, children}) => {
    return (
        open ? <Div sx={{
            inset: 0,
            ...(sx ? sx : {}),
            position: "absolute",
            bgcolor: color,
            opacity: opacity,
        }}>{children}</Div> : null
    );
};

JumboBackdrop.propTypes = {
    color: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
    opacity: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    open: PropTypes.bool,
    sx: PropTypes.object,
    children: PropTypes.node,
};

JumboBackdrop.defaultProps = {
    color: "#000000",
    opacity: 0.7,
};

export default JumboBackdrop;
