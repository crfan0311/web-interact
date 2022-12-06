import {getArrayElementFromKey} from "@jumbo/utils";

export const getUpdatedSelectedItems = (currentItems, newItem, primaryKey) => {
    if(Array.isArray(newItem)) {
        return newItem;
    }
    const newList = currentItems.filter(item => item[primaryKey] !== newItem[primaryKey]);
    if(newList.length === currentItems.length) {
        newList.push(newItem);
    }
    return newList;
};

export const selectAllItems = (data, primaryKey) => {
    const selectedKeys = [];
    data.forEach(item => {
        const itemID = getArrayElementFromKey(item, primaryKey);
        selectedKeys.push(itemID);
    });
    return selectedKeys;
};
