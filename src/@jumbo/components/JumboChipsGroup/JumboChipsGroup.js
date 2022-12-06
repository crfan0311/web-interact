import React from 'react';
import PropTypes from "prop-types";
import {Stack, Chip} from "@mui/material";

import {colorForBgColor, getArrayElementFromKey} from "@jumbo/utils";

const JumboChipsGroup = ({chips, max, onClick, sx, mapKeys, defaultColor, spacing, ...restProps}) => {

    const handleClick = React.useCallback((event, label) => {
        event.target.value = label;
        if(typeof onClick === "function")
            onClick(event);
    }, [onClick]);

    const chipsToShow = max !== -1 ? chips.slice(0, max) : chips;
    return (
        <Stack direction={"row"} spacing={spacing}>
            {
                chipsToShow.map((chip, index) => {
                    const label = chip?.label ? chip.label : getArrayElementFromKey(chip, mapKeys.label);
                    const bgColor = chip?.color ? chip.color : defaultColor;
                    const color = colorForBgColor(bgColor);
                    return (
                        <Chip
                            key={index}
                            label={label}
                            sx={{
                                bgcolor: bgColor,
                                color: color,
                                ...sx,
                            }}
                            onClick={(event) => handleClick(event, chip)}
                            {...restProps}
                        />
                    )
                })
            }
            {
                chipsToShow.length < chips.length &&
                <Chip label={`+${chips.length - chipsToShow.length}`} size={restProps?.size} />
            }
        </Stack>
    );
};

JumboChipsGroup.defaultProps = {
    chips: [],
    max: -1,
    defaultColor: "#DDDDDD"
};

JumboChipsGroup.propTypes = {
    chips: PropTypes.arrayOf(PropTypes.shape({
        label: PropTypes.string,
        color: PropTypes.string,
        size: PropTypes.string,
    })),
    mapKeys: PropTypes.shape({
        label: PropTypes.string,
        color: PropTypes.string,
        size: PropTypes.string,
    }),
    max: PropTypes.number,
    onClick: PropTypes.func,
    defaultColor: PropTypes.string,
};

export default JumboChipsGroup;
