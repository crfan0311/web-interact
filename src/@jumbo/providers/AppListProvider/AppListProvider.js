import React, {useContext, useEffect} from 'react';
import {useQuery, useQueryClient} from "react-query";
import PropTypes from "prop-types";
import {getArrayElementFromKey} from "@jumbo/utils";

const ListPaginationContext = React.createContext({page: 0, limit: -1});
const ListDataContext = React.createContext([]);
const ListSelectedContext = React.createContext({});
const ListBulkActionsContext = React.createContext([]);
const ListMultiSelectOptionsContext = React.createContext([]);
const ListQueryContext = React.createContext({});

const AppListProvider = (props) => {
    const {
        service, queryKey, primaryKey, countKey, dataKey,
        refresh, onRefreshCompleted,
        multiSelectOptions,
        itemsPerPage, queryParams, onSelectionChange
    } = props;

    const [paginationParams, setPaginationParams] = React.useState({page: 0, limit: itemsPerPage});
    const [count, setCount] = React.useState(0);

    const [key, setKey] = React.useState([queryKey, {paginationParams, queryParams: queryParams}]);
    const [selectedItems, setSelectedItems] = React.useState([]);
    const [activePageSelectedItems, setActivePageSelectedItems] = React.useState([]);
    const [multiSelection, setMultiSelection] = React.useState(true);
    const [hasBulkActions, setHasBulkActions] = React.useState(false);

    const listQuery = useQuery(key, service);
    const queryClient = useQueryClient();


    useEffect(() => {
        if (typeof queryKey === "string") {
            setKey([queryKey, {
                pagination: paginationParams,
                queryParams: queryParams,
                ...(!!queryParams) ? queryParams : {}
            }]);
        } else {
            throw Error(`AppTable > ${queryKey} > queryKey must be a string`);
        }
    }, [paginationParams, queryParams, queryKey]);

    //watch if table need to be refreshed
    useEffect(async () => {
        if (refresh) {
            await refreshTable();
        }
    }, [refresh]);

    //update the count value if one of the things from data, countKey or count changes
    useEffect(() => {
        const newCountValue = getArrayElementFromKey(listQuery?.data, countKey);
        if (parseInt(newCountValue ?? 0) !== count) {
            setCount(newCountValue);
        }
    }, [listQuery?.data, countKey, count]);

    useEffect(() => {
        if(typeof onSelectionChange === "function")
            onSelectionChange(selectedItems)
    }, [selectedItems]);

    //refresh the table (todo: need to check if we need to apply dependencies)
    const refreshTable = React.useCallback(async () => {
        setSelectedItems([]);
        await queryClient.invalidateQueries(queryKey);
        await listQuery.refetch();
        onRefreshCompleted();
    }, []);

    const handleRowsPerPageChange = React.useCallback(async (event) => {
        setPaginationParams({page: 0, limit: event.target.value});
        await refreshTable();
    }, []);


    const handlePageChange = React.useCallback((pageNumber) => {
        setPaginationParams(state => ({...state, page: pageNumber}));
    }, []);


    const tableData = React.useMemo(() => {
        const newData = getArrayElementFromKey(listQuery?.data, dataKey);

        if (Array.isArray(newData)) {
            if (newData.length > 0) {
                return newData;
            } else if (paginationParams.page > 0) {
                handlePageChange(paginationParams.page - 1);
            }
        }

        return [];
    }, [listQuery?.data, dataKey]);


    const paginationContextValue = React.useMemo(() => ({
        count: count,
        page: paginationParams.page,
        rowsPerPage: paginationParams.limit,
        onRowsPerPageChange: handleRowsPerPageChange,
        onPageChange: handlePageChange,
        rowsPerPageOptions: [5, 10, 15, 20, 25],
        rowsPerPageLabel: "Display",
        enableRowsPerPage: true,
    }), [paginationParams, count]);


    const dataContextValue = React.useMemo(() => ({
        data: tableData,
        dataCount: tableData.length,
        primaryKey: primaryKey,
    }), [tableData]);


    const selectedContextValue = React.useMemo(() => ({
        selectedItems: selectedItems,
        setSelectedItems: setSelectedItems,
        activePageSelectedItems: activePageSelectedItems,
        setActivePageSelectedItems: setActivePageSelectedItems,
        selectedCount: selectedItems.length
    }), [selectedItems]);


    const multiSelectionContextValue = React.useMemo(() => ({
        multiSelectOptions: multiSelectOptions ? multiSelectOptions : [],
        multiSelection: multiSelection,
        setMultiSelection: setMultiSelection,
    }), [multiSelectOptions]);

    const listQueryContextValue = React.useMemo(() => ({
        isLoading: listQuery.isLoading,
        isFetching: listQuery.isFetching,
    }), [listQuery.isLoading, listQuery.isFetching]);

    const bulkActionsContextValue = React.useMemo(() => ({
        hasBulkActions: hasBulkActions,
        setHasBulkActions: setHasBulkActions,
    }), [hasBulkActions]);

    return (
        <ListQueryContext.Provider value={listQueryContextValue}>
            <ListDataContext.Provider value={dataContextValue}>
                <ListPaginationContext.Provider value={paginationContextValue}>
                    <ListSelectedContext.Provider value={selectedContextValue}>
                        <ListBulkActionsContext.Provider value={bulkActionsContextValue}>
                            <ListMultiSelectOptionsContext.Provider value={multiSelectionContextValue}>
                                {props.children}
                            </ListMultiSelectOptionsContext.Provider>
                        </ListBulkActionsContext.Provider>
                    </ListSelectedContext.Provider>
                </ListPaginationContext.Provider>
            </ListDataContext.Provider>
        </ListQueryContext.Provider>
    );
};

export const useAppListPagination = () => {
    return useContext(ListPaginationContext);
};

export const useAppListData = () => {
    return useContext(ListDataContext);
};

export const useAppListSelected = () => {
    return useContext(ListSelectedContext);
};

export const useAppListBulkActions = () => {
    return useContext(ListBulkActionsContext);
};

export const useAppListMultiSelectOptions = () => {
    return useContext(ListMultiSelectOptionsContext);
};

export const useAppListQuery = () => {
    return useContext(ListQueryContext);
};

AppListProvider.propTypes = {
    renderRow: PropTypes.func,
    renderHead: PropTypes.func,
    renderFooter: PropTypes.func,
    queryKey: PropTypes.string,
    itemsPerPage: PropTypes.number,
    multiSelectOptions: PropTypes.arrayOf(PropTypes.object),
    service: PropTypes.func,
    dataKey: PropTypes.string,
    primaryKey: PropTypes.string,
    countKey: PropTypes.string,
    refresh: PropTypes.bool,
    onRefreshCompleted: PropTypes.func,
    bulkActions: PropTypes.arrayOf(PropTypes.object),
};
export default AppListProvider;
