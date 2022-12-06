import React from 'react';
import ProductAvatars from "./components/ProductAvatars";
import CheckboxList from "./components/CheckboxList";
import {Button, Popover} from "@mui/material";
import Div from "@jumbo/shared/Div";

const ProductSelectionControl = ({items, selectedItems, onSelectedChanged}) => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    return (
        <Div sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            p: theme => theme.spacing(1, 3),
        }}>
            {
                selectedItems.length > 0 && <ProductAvatars items={selectedItems}/>
            }
            <Button variant={"contained"} color={"inherit"} disableElevation onClick={(e) => setAnchorEl(e.currentTarget)}>+ADD</Button>
            <Popover
                open={open}
                anchorEl={anchorEl}
                onClose={() => setAnchorEl(null)}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
            >
                <CheckboxList
                    items={items}
                    selectedItems={selectedItems}
                    onCheckboxChange={onSelectedChanged}
                />
            </Popover>
        </Div>
    );
};
/* Todo items, selectedItems, onSelectedChanged prop define */
export default ProductSelectionControl;
