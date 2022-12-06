import React from 'react';
import JumboDemoCard from "@jumbo/components/JumboDemoCard";
import {Tooltip} from "@mui/material";
import Box from "@mui/material/Box";
import code from "../Tooltips/demo-code/anchor-tooltips.txt";

const AnchorElTooltips = () => {
    const positionRef = React.useRef({x: 0, y: 0});

    const popperRef = React.useRef(null);
    const areaRef = React.useRef(null);

    const handleMouseMove = (event) => {
        positionRef.current = {x: event.clientX, y: event.clientY};

        if (popperRef.current != null) {
            popperRef.current.update();
        }
    };
    return (
        <JumboDemoCard title={"Anchor Tooltip"} demoCode={code}
                       wrapperSx={{backgroundColor: 'background.paper', pt: 0}}>
            <Tooltip
                title="Add"
                placement="top"
                arrow
                PopperProps={{
                    popperRef,
                    anchorEl: {
                        getBoundingClientRect: () => {
                            return new DOMRect(
                                positionRef.current.x,
                                areaRef.current.getBoundingClientRect().y,
                                0,
                                0,
                            );
                        },
                    },
                }}
            >
                <Box
                    ref={areaRef}
                    onMouseMove={handleMouseMove}
                    sx={{
                        bgcolor: 'primary.main',
                        color: 'primary.contrastText',
                        p: 2,
                    }}
                >
                    Hover
                </Box>
            </Tooltip>
        </JumboDemoCard>
    );
};

export default AnchorElTooltips;
