import React from 'react';
import PropTypes from 'prop-types';
import {ListItem, ListItemText} from "@mui/material";
import useJumboList from "../../hooks/useJumboList";
import MultiSelectControl from './MultiSelectControl';
import Stack from "@mui/material/Stack";
import Zoom from "@mui/material/Zoom";
import Div from "@jumbo/shared/Div";
import ToolbarAction from "@jumbo/components/JumboList/components/JumboListToolbar/ToolbarAction";

const JumboListToolbar = ({children, bulkActions, hidePagination, hideItemsPerPage, action, actionTail}) => {
    const {
        selectedItems, data, setBulkActions,
    } = useJumboList();

    React.useEffect(() => {
        setBulkActions(bulkActions ?? []);
    }, [bulkActions]);

    if (!children && hidePagination && !action && !actionTail && bulkActions.length <= 0) {
        return null;
    }

    return (
        <ListItem component="div">
            <ListItemText
                primary={
                    <Stack direction={"row"} spacing={2}>
                        {
                            bulkActions && data?.length > 0 &&
                            <Div>
                                <MultiSelectControl/>
                            </Div>
                        }
                        {
                            bulkActions && selectedItems.length > 0 &&
                            <Zoom in={selectedItems.length > 0}>
                                <Div>
                                    {bulkActions}
                                </Div>
                            </Zoom>
                        }
                        <Div>
                            {children}
                        </Div>
                    </Stack>
                }
            />
            <ToolbarAction actionTail={actionTail} action={action} hidePagination={hidePagination}
                           hideItemsPerPage={hideItemsPerPage}/>
        </ListItem>
    );
};

JumboListToolbar.propTypes = {
    children: PropTypes.node,
    bulkActions: PropTypes.node,
    disablePagination: PropTypes.bool,
    action: PropTypes.node,
    actionTail: PropTypes.node,
};
export default JumboListToolbar;
