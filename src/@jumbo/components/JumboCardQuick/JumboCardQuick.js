import React from 'react';
import PropTypes from "prop-types";
import {Card, CardHeader, CardContent} from "@mui/material";

import {getBgColorStyle, getBgImageStyle} from "@jumbo/utils";
import JumboBackdrop from "@jumbo/components/JumboBackdrop";


const JumboCardQuick = (
    {
        title, subheader, avatar, action,
        bgColor, bgImage, bgGradientDir,
        headerSx, footerProps, noWrapper, wrapperSx,
        backdrop, backdropColor, backdropOpacity,
        reverse, divider, sx, children,
        ...restProps
    }) => {
    const [bgStyle, setBgStyle] = React.useState({});

    React.useEffect(() => {
        if (bgImage) {
            setBgStyle(getBgImageStyle(bgImage));
        } else if (bgColor) {
            setBgStyle(getBgColorStyle(bgColor, bgGradientDir));
        } else {
            setBgStyle({});
        }
    }, [bgColor, bgImage, bgGradientDir]);

    return (
        <Card sx={{...bgStyle, position: "relative", ...sx}} {...restProps}>
            <JumboBackdrop
                color={backdropColor}
                opacity={backdropOpacity}
                open={backdrop}
            />
            {
                (action || title || avatar) && !reverse &&
                <CardHeader
                    title={title}
                    subheader={subheader}
                    action={action}
                    avatar={avatar}
                    sx={{
                        zIndex: 2,
                        position: "relative",
                        ...headerSx
                    }}
                />
            }
            {
                noWrapper ? children :
                    <CardContent sx={{...wrapperSx, zIndex: 2, position: "relative",height:'100%'}}>{children}</CardContent>
            }
            {
                (action || title || avatar) && reverse &&
                <CardHeader
                    title={title}
                    subheader={subheader}
                    action={action}
                    avatar={avatar}
                    sx={{
                        zIndex: 2,
                        position: "relative",
                        borderBottomColor: (theme) => theme.palette.divider,
                        ...headerSx
                    }}
                />
            }
        </Card>
    );
};

JumboCardQuick.defaultProps = {
    backdropColor: "#000000",
    backdropOpacity: "0.7",
    backdrop: false,
    reverse: false,
    divider: false,
    noWrapper: false,
    headerSx: {},
};

JumboCardQuick.propTypes = {
    avatar: PropTypes.node,
    title: PropTypes.node,
    subheader: PropTypes.node,
    action: PropTypes.node,
    reverse: PropTypes.bool,
    variant: PropTypes.oneOf(["primary", "secondary"]),
    bgColor: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),
    bgImage: PropTypes.string,
    divider: PropTypes.bool,
    backdropColor: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),
    backdropOpacity: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    backdrop: PropTypes.bool,
    noWrapper: PropTypes.bool,
};

export default JumboCardQuick;
