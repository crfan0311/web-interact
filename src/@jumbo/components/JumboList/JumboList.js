import React from 'react';
import PropTypes from 'prop-types';
import TransitionGroup from "react-transition-group/TransitionGroup";
import Collapse from "@mui/material/Collapse";
import List from "@mui/material/List";

import JumboListContext from "./JumboListContext";
import JumboListWrapper from "./components/JumboListWrapper";
import JumboListNoDataPlaceholder from "./components/JumboListNoDataPlaceHolder";
import {
    CHANGE_ACTIVE_PAGE,
    SET_BULK_ACTIONS,
    SET_DATA,
    SET_ITEMS_PER_PAGE,
    SET_SELECTED_ITEMS
} from "./utils/constants";
import {getUpdatedSelectedItems} from "./utils/listHelpers";
import Grid from "@mui/material/Grid";
import {CircularProgress, Typography} from "@mui/material";
import Div from "@jumbo/shared/Div";


const init = (initArgs) => {
    return ({
        selectedItems: [],
        ...initArgs,
    })
};

const jumboListReducer = (state, action) => {
    switch (action.type) {
        case SET_SELECTED_ITEMS:
            return {
                ...state,
                selectedItems: getUpdatedSelectedItems(
                    state.selectedItems,
                    action.payload,
                    state.primaryKey
                )
            };

        case SET_DATA:
            return {
                ...state,
                data: action.payload.data,
                totalCount: action.payload.totalCount,
            };

        case CHANGE_ACTIVE_PAGE:
            return {
                ...state,
                activePage: parseInt(action.payload),
            };

        case SET_ITEMS_PER_PAGE:
            return {
                ...state,
                itemsPerPage: parseInt(action.payload),
                activePage: 0,
            };

        case SET_BULK_ACTIONS:
            return {
                ...state,
                bulkActions: action.payload,
            };

        default:
            return state;
    }
};

const JumboList = React.forwardRef((props, ref) => {
    const {
        header, toolbar, footer, data, primaryKey, renderItem,
        totalCount, itemsPerPage, onPageChange, itemsPerPageOptions,
        onSelectionChange, multiSelectOptions, noDataPlaceholder,
        wrapperComponent, wrapperSx, component, componentElement, sx,
        onItemsPerPageChange, isLoading, page, disableTransition,
        view
    } = props;

    const [jumboList, setJumboList] = React.useReducer(jumboListReducer, {
        primaryKey: primaryKey,
        data: data,
        totalCount: totalCount,
        itemsPerPage: itemsPerPage,
        itemsPerPageOptions: itemsPerPageOptions,
        activePage: page,
        isLoading: isLoading,
        multiSelectOptions: multiSelectOptions,
        bulkActions: null
    }, init);

    const setActivePage = React.useCallback((pageNumber) => {
        setJumboList({type: CHANGE_ACTIVE_PAGE, payload: pageNumber});
    }, [setJumboList]);

    if (data.length === 0 && totalCount > 0 && jumboList.activePage > 0) {
        setActivePage(jumboList.activePage - 1);
    }

    const setItemsPerPage = React.useCallback((value) => {
        setJumboList({type: SET_ITEMS_PER_PAGE, payload: value});
    }, [setJumboList]);

    const setSelectedItems = React.useCallback((itemsData) => {
        setJumboList({type: SET_SELECTED_ITEMS, payload: itemsData});
    }, [setJumboList]);

    const setBulkActions = React.useCallback((bulkActions) => {
        setJumboList({type: SET_BULK_ACTIONS, payload: bulkActions ?? []})
    }, []);

    React.useEffect(() => {
        setJumboList({type: SET_DATA, payload: {data: data, totalCount: totalCount}});
    }, [data]);

    const jumboListContextValue = React.useMemo(() => ({
        ...jumboList,
        setActivePage,
        setSelectedItems,
        setBulkActions,
        setItemsPerPage
    }), [jumboList]);

    React.useEffect(() => {
        onSelectionChange(jumboList.selectedItems);
    }, [jumboList.selectedItems]);

    React.useEffect(() => {
        onPageChange(jumboList.activePage);
    }, [jumboList.activePage]);

    React.useEffect(() => {
        onItemsPerPageChange(jumboList.itemsPerPage)
    }, [jumboList.itemsPerPage]);

    React.useImperativeHandle(ref, () => ({
        resetSelection() {
            setSelectedItems([]);
        },
    }), []);

    if (isLoading) {
        return (
            <JumboListContext.Provider value={jumboListContextValue}>
                <JumboListWrapper component={wrapperComponent} sx={wrapperSx}>
                    <Div
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            p: theme => theme.spacing(3),
                            m: 'auto',
                        }}
                    >
                        <CircularProgress/>
                        <Typography variant={'h6'} color={'text.secondary'} mt={2}>Loading messages</Typography>
                    </Div>
                </JumboListWrapper>
            </JumboListContext.Provider>
        )
    }

    const componentProps = componentElement ? {component: componentElement} : {};
    const ListComponent = component ? component : List;
    return (
        <JumboListContext.Provider value={jumboListContextValue}>
            <JumboListWrapper component={wrapperComponent} sx={wrapperSx}>
                {header}
                {toolbar}
                {
                    data?.length <= 0 && !isLoading &&
                    <JumboListNoDataPlaceholder>
                        {noDataPlaceholder}
                    </JumboListNoDataPlaceholder>
                }
                {
                    data.length > 0 && view === "list" &&
                    <ListComponent {...componentProps} disablePadding sx={{...sx}}>
                        {
                            disableTransition ?
                                data.map(row => (
                                    <React.Fragment key={row[primaryKey]}>
                                        {renderItem(row, view)}
                                    </React.Fragment>
                                ))
                                :
                                <TransitionGroup>
                                    {
                                        data.map((row) => (
                                            <Collapse key={`${row[primaryKey]}`}>
                                                {renderItem(row)}
                                            </Collapse>
                                        ))
                                    }
                                </TransitionGroup>
                        }
                    </ListComponent>
                }
                {
                    data.length > 0 && view === "grid" &&
                    <Grid container spacing={3} sx={sx}>
                        {
                            data.map(row => (
                                <React.Fragment key={row[primaryKey]}>
                                    {renderItem(row)}
                                </React.Fragment>
                            ))
                        }
                    </Grid>

                }
                {footer}
            </JumboListWrapper>
        </JumboListContext.Provider>
    );
});

JumboList.defaultProps = {
    onPageChange: () => {
    },
    onSelectionChange: () => {
    },
    onItemsPerPageChange: () => {
    },
    onSelectedItemsReset: () => {
    },
    page: 0,
    view: "list"
};

JumboList.propTypes = {
    header: PropTypes.node,
    toolbar: PropTypes.node,
    footer: PropTypes.node,
    data: PropTypes.array.isRequired,
    primaryKey: PropTypes.string.isRequired,
    renderItem: PropTypes.func.isRequired,
    totalCount: PropTypes.number,
    itemsPerPage: PropTypes.number,
    itemsPerPageOptions: PropTypes.arrayOf(PropTypes.number),
    onPageChange: PropTypes.func,
    onSelectionChange: PropTypes.func,
    onItemsPerPageChange: PropTypes.func,
    multiSelectOptions: PropTypes.arrayOf(PropTypes.shape({
        label: PropTypes.node,
        selectionLogic: PropTypes.func,
    })),
    noDataPlaceholder: PropTypes.node,
    wrapperComponent: PropTypes.object,
    wrapperSx: PropTypes.object,
    component: PropTypes.object,
    componentElement: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    sx: PropTypes.object,
    itemSx: PropTypes.object,
    isLoading: PropTypes.bool,
    disableTransition: PropTypes.bool,
    view: PropTypes.oneOf(["list", "grid"]),
};

export default JumboList;
