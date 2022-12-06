import React from 'react';
import {Button} from "@mui/material";

const defaultColors = ["inherit", "primary", "secondary", "warning", "success", "info", "error"];
const JumboButton = ({color, variant, shape, size, sx, ...restProps}) => {
    const [btnSx, setBtnSx] = React.useState(sx);

    React.useEffect(() => {
        if (color && !defaultColors.includes(color)) {
            setBtnSx((sx) => ({
                ...sx,
                color: 'common.white',
                bgcolor: color[500],
                '&:hover': {
                    bgcolor: color[700]
                }
            }));
        }
    }, [color])
    return (
        <Button
            variant={variant}
            sx={btnSx}
            size={size}
            {...restProps}
        />
    );
};
/* Todo define */
export default JumboButton;
