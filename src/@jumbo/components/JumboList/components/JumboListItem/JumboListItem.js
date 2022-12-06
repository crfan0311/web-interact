import React from 'react';
import ListItem from "@mui/material/ListItem";
import PropTypes from 'prop-types';
import {ListItemIcon} from "@mui/material";
import useJumboList from "@jumbo/components/JumboList/hooks/useJumboList";
import JumboItemCheckbox from "../JumboItemCheckbox";

const JumboListItem = ({component, componentElement, children, itemData, ...restProps}) => {
    const {bulkActions} = useJumboList();
    const ListItemComponent = component ? component : ListItem;
    const componentProps = componentElement ? {component: componentElement} : {};
    return (
        <ListItemComponent  {...componentProps} {...restProps}>
            {
                bulkActions &&
                <ListItemIcon>
                    {
                        itemData &&
                        <JumboItemCheckbox itemData={itemData}/>
                    }
                </ListItemIcon>
            }
            {children}
        </ListItemComponent>
    );
};

JumboListItem.propTypes = {
    component: PropTypes.elementType,
    itemData: PropTypes.object.isRequired,
    secondaryAction: PropTypes.node,
};

export default JumboListItem;