import React from 'react';
import {List} from "@mui/material";
import CheckboxItem from "./CheckboxItem";

const CheckboxList = ({items,selectedItems,onCheckboxChange}) => {

    return (
        <List sx={{minWidth: 160}}>
            {
                items.map((item, index) => {
                    const itemSelected = selectedItems.filter(product => product.id === item.id);

                    return (
                        <CheckboxItem
                            key={index}
                            checked={!!itemSelected.length}
                            item={item}
                            onCheckboxChange={onCheckboxChange}
                        />
                    )
                })
            }
        </List>
    );
};

export default CheckboxList;
