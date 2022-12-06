import React from 'react';
import PropTypes from 'prop-types';
import {getMarginStyle} from "@jumbo/utils";
import Div from "@jumbo/shared/Div";
import JumboBackdrop from "@jumbo/components/JumboBackdrop";

const JumboOverlay = ({opacity, margin, show, color, children, sx, hAlign, vAlign}) => {
    return (
        <Div sx={{
            ...getMarginStyle(margin),
            zIndex: 3,
            position: "absolute",
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
            alignItems: hAlign ? hAlign : "stretch",
            justifyContent: vAlign ? vAlign : "stretch",
            ...sx,
        }}>
            <JumboBackdrop
                color={color}
                opacity={opacity}
                open={show}
            />
            <Div sx={{zIndex: 2, position: "relative"}}>
                {children}
            </Div>
        </Div>
    );
};

JumboOverlay.defaultProps = {
    color: "#000000",
    opacity: .7,
    show: true
};

JumboOverlay.propTypes = {
    opacity: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    margin: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.array]),
    show: PropTypes.bool,
    color: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
    children: PropTypes.node,
    sx: PropTypes.object,
    hAlign: PropTypes.string,
    vAlign: PropTypes.string,
};
export default JumboOverlay;
