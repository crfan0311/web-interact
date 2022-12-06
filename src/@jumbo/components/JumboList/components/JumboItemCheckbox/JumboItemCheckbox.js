import React from 'react';
import useJumboList from "../../hooks/useJumboList";
import {getArrayElementFromKey} from "@jumbo/utils";
import Checkbox from "@mui/material/Checkbox";

const JumboItemCheckbox = ({itemData}) => {
    const {primaryKey, selectedItems, setSelectedItems} = useJumboList();
    const itemID = getArrayElementFromKey(itemData, primaryKey);

    const onSelectionChange = () => {
        setSelectedItems(itemData);
    };

    return (
        <Checkbox
            color="primary"
            checked={selectedItems.findIndex(item => (getArrayElementFromKey(item, primaryKey) === itemID)) >= 0}
            onChange={onSelectionChange}
        />
    );
};

export default JumboItemCheckbox;