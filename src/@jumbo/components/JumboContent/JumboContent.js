import React from 'react';
import PropTypes from "prop-types";

import {getBgColorStyle, getBgImageStyle} from "@jumbo/utils";
import {CardHeader, Typography} from "@mui/material";
import Div from "@jumbo/shared/Div";
import JumboBackdrop from "@jumbo/components/JumboBackdrop";

const renderTitle = (title) => {
    if(typeof title === "string") {
        return <Typography component={"h4"} color={"#fff"}>{title}</Typography>;
    }
    return title;
};

const JumboContent = (
    {
        avatar, title, subheader, action,
        bgColor, bgImage,
        backdrop, backdropColor, backdropOpacity,
        sx, children
    }) => {

    const bgStyle = React.useMemo(() => {
        if (bgImage) {
            return getBgImageStyle(bgImage);
        } else if (bgColor) {
            return getBgColorStyle(bgColor);
        }
        return {}
    }, [bgColor, bgImage]);

    return (
        <Div sx={{...sx, position: "relative", ...bgStyle}}>
            {
                (avatar || title || action) &&
                <CardHeader
                    avatar={avatar}
                    title={renderTitle(title)}
                    subheader={subheader}
                    action={action}
                    sx={{
                        position: "relative",
                        zIndex: 3
                    }}
                />
            }
            {
                backdrop &&
                <JumboBackdrop
                    color={backdropColor}
                    opacity={backdropOpacity}
                    open={backdrop}
                />
            }
            <Div sx={{zIndex: 2, position: "relative"}}>
                {children}
            </Div>
        </Div>
    );
};

JumboContent.propTypes = {
    avatar: PropTypes.node,
    title: PropTypes.node,
    subheader: PropTypes.node,
    action: PropTypes.node,
    bgColor: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),
    bgImage: PropTypes.string,
    backdropColor: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),
    backdropOpacity: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    backdrop: PropTypes.bool,
    sx: PropTypes.object
};

export default JumboContent;
