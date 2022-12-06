import React from 'react';
import PropTypes from 'prop-types';
import Popover from "@mui/material/Popover";
import Div from "@jumbo/shared/Div";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import {getArrayElementFromKey} from "@jumbo/utils";
import {Button} from "@mui/material";
import Collapse from "@mui/material/Collapse";
import JumboScrollbar from "@jumbo/components/JumboScrollbar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";

const getSelectedItems = (items, primaryKey, selectedIDs) => {
    return items.filter(item => {
        const itemID = getArrayElementFromKey(item, primaryKey);
        return selectedIDs.includes(itemID.toString())
    });
};

const JumboSelectPopover = (props) => {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const [selectedValues, setSelectedValues] = React.useState([]);

    React.useEffect(() => {
        if (!anchorEl && props.resetOnClose) {
            setSelectedValues([]);
        }
    }, [anchorEl]);

    const handleClick = React.useCallback((event) => {
        setAnchorEl(event.currentTarget);
    }, []);

    const handleClose = React.useCallback(() => {
        setAnchorEl(null);
    }, []);

    const handleChange = React.useCallback((event, isChecked) => {
        const value = event.target.value;
        if (isChecked) {
            if (!selectedValues.includes(value)) {
                setSelectedValues([...selectedValues, value]);
            }
        } else {
            if (selectedValues.includes(value)) {
                const filteredValues = selectedValues.filter(selectedValue => selectedValue !== value);
                setSelectedValues(filteredValues);
            }
        }
    }, [selectedValues]);

    const handleDoneButton = React.useCallback(() => {
        props.onDone(getSelectedItems(props.data, props.primaryKey, selectedValues));
        handleClose();
    }, [selectedValues, props.onDone]);

    const TriggerButton = React.useMemo(() => props.button.component, [props.button.component]);
    const DoneButton = React.useMemo(() => props.doneButton.component, [props.doneButton.component]);

    return (
        <Div>
            <TriggerButton onClick={handleClick}>{props.button.label}</TriggerButton>
            <Popover
                id={"jumbo-checkbox-popover"}
                open={!!anchorEl}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
            >
                <Div>
                    {props.header}
                    <JumboScrollbar autoHeight>
                        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                        {
                            props.data.map(item => {
                                const id = getArrayElementFromKey(item, props.primaryKey);
                                const label = getArrayElementFromKey(item, props.labelKey);
                                return (
                                    <ListItem key={id} disablePadding>
                                        <ListItemButton dense>
                                            <ListItemIcon>
                                                <FormControlLabel
                                                    control={
                                                        <Checkbox
                                                            checked={selectedValues.includes(id.toString())}
                                                            onChange={handleChange}
                                                            name={`item-${id}`}
                                                            value={id}
                                                        />
                                                    }
                                                    label={label}
                                                />
                                            </ListItemIcon>
                                        </ListItemButton>
                                    </ListItem>
                                )
                            })
                        }
                    </List>
                    </JumboScrollbar>
                    <Collapse in={selectedValues.length > 0}>
                        <DoneButton fullWidth sx={{bgcolor: "#EEEEEE"}} onClick={handleDoneButton}>
                            {props.doneButton.label}
                        </DoneButton>
                    </Collapse>
                </Div>
            </Popover>
        </Div>
    );
};

JumboSelectPopover.defaultProps = {
    onDone: () => {},
    onChange: () => {},
    doneButton: {
        component: Button,
        label: "DONE"
    }
};

JumboSelectPopover.propTypes = {
    header: PropTypes.node,
    button: PropTypes.exact({
        component: PropTypes.object,
        label: PropTypes.node
    }).isRequired,
    data: PropTypes.array.isRequired,
    primaryKey: PropTypes.string.isRequired,
    labelKey: PropTypes.string.isRequired,
    doneButton: PropTypes.exact({
        component: PropTypes.object,
        label: PropTypes.node,
    }),
    resetOnClose: PropTypes.bool,
    onChange: PropTypes.func,
    onDone: PropTypes.func,
};

export default JumboSelectPopover;
