import React from 'react';
import useJumboList from "@jumbo/components/JumboList/hooks/useJumboList";
import Checkbox from "@mui/material/Checkbox";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import {IconButton, Menu, MenuItem} from "@mui/material";
import {getArrayElementFromKey} from "@jumbo/utils";

const MultiSelectControl = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const {
        selectedItems, setSelectedItems, multiSelectOptions,
        data, primaryKey,
    } = useJumboList();

    const open = Boolean(anchorEl);

    const selectedCountOnActivePage = React.useMemo(() => {
        const selectedOnPage = data.filter(dataItem => {
            const itemInSelected = selectedItems.filter(
                item => getArrayElementFromKey(item, primaryKey) === getArrayElementFromKey(dataItem, primaryKey)
            );
            return itemInSelected.length > 0
        });

        return selectedOnPage.length;
    }, [data, selectedItems]);

    const dataCount = React.useMemo(() => data.length, [data]);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleSelectAllClick = () => {
        const selectedData = [];

        if (selectedItems.length < data.length && selectedItems.length === 0)
            selectedData.push(...data);

        setSelectedItems(selectedData);
    };

    const onMultiSelection = (logicFunc) => {
        setSelectedItems(logicFunc(data, primaryKey));
    };

    return (
        <>
            <Checkbox
                color="primary"
                indeterminate={selectedCountOnActivePage > 0 && selectedCountOnActivePage < dataCount}
                checked={dataCount > 0 && selectedCountOnActivePage === dataCount}
                onChange={handleSelectAllClick}
            />
            {
                multiSelectOptions && multiSelectOptions.length > 0 &&
                <>
                    <IconButton
                        aria-label="more"
                        id="long-button"
                        aria-controls={open ? 'long-menu' : undefined}
                        aria-expanded={open ? 'true' : undefined}
                        aria-haspopup="true"
                        onClick={handleClick}
                    >
                        <ArrowDropDownIcon/>
                    </IconButton>
                    <Menu
                        id="long-menu"
                        MenuListProps={{
                            'aria-labelledby': 'long-button',
                        }}
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                    >
                        {
                            multiSelectOptions.map((option, index) => (
                                <MenuItem
                                    key={index}
                                    onClick={() => {
                                        onMultiSelection(option.selectionLogic);
                                        handleClose();
                                    }}>
                                    {option.label}
                                </MenuItem>
                            ))
                        }
                    </Menu>
                </>
            }
        </>
    );
};

export default MultiSelectControl;
