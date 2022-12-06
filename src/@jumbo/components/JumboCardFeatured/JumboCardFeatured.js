import React from 'react';
import PropTypes from 'prop-types';
import Stack from "@mui/material/Stack";
import Div from "@jumbo/shared/Div";
import JumboCardQuick from "@jumbo/components/JumboCardQuick";

const JumboCardFeatured = (
    {
        sx, tick, tickSx, direction, spacing,
        showTick, children, bgColor, bgImage,
        imgSrc, imgAlt, imgSx, imgFit,
        backdrop, backdropOpacity, backdropColor,
        ...restProps
    }) => {

    const tickAlign = ["column", "column-reverse"].includes(direction) ? {m: "0 auto 16px"} : {};

    return (
        <JumboCardQuick
            bgColor={bgColor}
            bgImage={bgImage}
            backdrop={backdrop}
            backdropOpacity={backdropOpacity}
            backdropColor={backdropColor}
            noWrapper
        >
            <Stack direction={direction} spacing={spacing} {...restProps}>
                <Div sx={{p: 3}}>
                    {
                        showTick && (
                            tick ? tick : (
                                <Div sx={{
                                    width: 24, height: 4, bgcolor: 'grey.500',
                                    borderRadius: 4, ...tickAlign, ...tickSx
                                }}/>
                            )
                        )
                    }
                    {children}
                </Div>
                {
                    imgSrc &&
                    <Div sx={{
                        position: "relative",
                        overflow: "hidden",
                        height: 175,
                        '& > img': {
                            ...(imgFit ?
                                {
                                    objectFit: "cover",
                                    height: "100%", width: "100%", objectPosition: "center"
                                } : {}),
                        },
                        ...imgSx
                    }}>
                        <img src={imgSrc} alt={imgAlt}/>
                    </Div>
                }
            </Stack>
        </JumboCardQuick>
    );
};

JumboCardFeatured.propTypes = {
    sx: PropTypes.object,
    tick: PropTypes.node,
    tickSx: PropTypes.object,
    direction: PropTypes.string,
    spacing: PropTypes.number,
    showTick: PropTypes.bool,
    children: PropTypes.node,
    bgColor: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
    bgImage: PropTypes.string,
    imgSrc: PropTypes.string,
    imgAlt: PropTypes.string,
    imgSx: PropTypes.object,
    imgFit: PropTypes.bool,
    backdropColor: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),
    backdropOpacity: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    backdrop: PropTypes.bool,
};

JumboCardFeatured.defaultProps = {
    imgFit: true,
    imgAlt: ""
};

export default JumboCardFeatured;
