import React from 'react';
import PropTypes from 'prop-types';
import Popover from "@mui/material/Popover";
import {SketchPicker} from 'react-color';
import {useField} from "formik";
import Div from "@jumbo/shared/Div";

const JumboColorPickerField = ({onSelect, ...restProps}) => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [field, helpers] = useField(restProps);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);

    const onColorSelect = (color) => {
        helpers.setValue(color.hex);
    };

    const id = open ? 'simple-popover' : undefined;

    return (
        <Div
            sx={{
                border: 1,
                borderColor: 'primary.main',
                p: .5,
                display: 'flex',
                flex: 1,
                minWidth: 40,
                minHeight: 38,
            }}
        >
            <Div onClick={handleClick} sx={{flex: 1, p: 1, bgcolor: field.value}} />
            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
            >
                <SketchPicker
                    color={field.value}
                    onChange={onColorSelect}
                />
            </Popover>
        </Div>
    );
};

JumboColorPickerField.propTypes = {
    onSelect: PropTypes.func,
};

export default JumboColorPickerField;
