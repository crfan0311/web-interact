import React from 'react';
import PropTypes from 'prop-types';
import JumboList from "@jumbo/components/JumboList";
import {useQuery, useQueryClient} from "react-query";
import {getArrayElementFromKey} from "@jumbo/utils";

const JumboRqList = React.forwardRef((props, ref) => {
    const {
        queryOptions, itemsPerPage, service, primaryKey,
        itemsPerPageOptions, toolbar, multiSelectOptions,
        onSelectionChange, renderItem, noDataPlaceholder,
        wrapperComponent, wrapperSx, component, sx, componentElement, itemSx,
        transition, view, onRefresh,
    } = props;
    const listRef = React.useRef();
    const [key, setKey] = React.useState([
        queryOptions.queryKey,
        {queryParams: queryOptions.queryParams, page: 0, limit: itemsPerPage}
    ]);
    const listQuery = useQuery(key, service);
    const queryClient = useQueryClient();
    React.useImperativeHandle(ref, () => ({
        async refresh() {
            listRef.current.resetSelection();
            await queryClient.invalidateQueries(queryOptions.queryKey);
            await listQuery.refetch();
            onRefresh();
        },
    }));

    React.useEffect(() => {
        setKey([queryOptions.queryKey, {
                ...key[1],
                queryParams: queryOptions.queryParams,
            }]
        )
    }, [queryOptions]);

    const handlePageChange = React.useCallback((pageNumber) => {
        const newKey = [key[0], {
            queryParams: queryOptions.queryParams,
            ...key[1],
            page: pageNumber
        }];
        setKey(newKey);
    }, [queryOptions]);

    const handleItemsPerPageChange = React.useCallback(async (newValue) => {
        const newKey = [key[0], {
            ...key[1],
            limit: newValue,
        }];

        setKey(newKey);
        await queryClient.invalidateQueries(queryOptions.queryKey);
        await listQuery.refetch();
        onRefresh();
    }, [listQuery, queryClient]);

    const queryData = React.useMemo(() => {
        const dataArray = getArrayElementFromKey(listQuery?.data, queryOptions?.dataKey);
        if (!Array.isArray(dataArray)) {
            return {
                data: [],
                totalCount: 0,
            }
        }
        return {
            data: dataArray,
            totalCount: getArrayElementFromKey(listQuery?.data, queryOptions.countKey),
        };
    }, [listQuery, queryOptions]);

    return (
        <JumboList
            ref={listRef}
            data={queryData.data}
            primaryKey={primaryKey}
            renderItem={renderItem}
            itemsPerPage={itemsPerPage}
            totalCount={queryData.totalCount}
            onPageChange={handlePageChange}
            onItemsPerPageChange={handleItemsPerPageChange}
            itemsPerPageOptions={itemsPerPageOptions}
            toolbar={toolbar}
            onSelectionChange={onSelectionChange}
            multiSelectOptions={multiSelectOptions}
            noDataPlaceholder={noDataPlaceholder}
            isLoading={listQuery?.isLoading}
            wrapperComponent={wrapperComponent}
            wrapperSx={wrapperSx}
            componentElement={componentElement}
            itemSx={itemSx}
            component={component}
            sx={sx}
            transition={transition}
            view={view}
        />
    );
});

JumboRqList.defaultProps = {
    onRefresh: () => {
    }
};

JumboRqList.propTypes = {
    service: PropTypes.func.isRequired,
    multiSelectOptions: PropTypes.array,
    itemsPerPage: PropTypes.number,
    noDataPlaceholder: PropTypes.node,
    renderItem: PropTypes.func,
    header: PropTypes.node,
    footer: PropTypes.node,
    toolbar: PropTypes.node,
    onSelectionChange: PropTypes.func,
    onRefresh: PropTypes.func,
    primaryKey: PropTypes.string.isRequired,
    queryOptions: PropTypes.shape({
        queryKey: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.array
        ]).isRequired,
        queryParams: PropTypes.object,
        countKey: PropTypes.string,
        dataKey: PropTypes.string.isRequired,
    }).isRequired,
    wrapperComponent: PropTypes.object,
    wrapperSx: PropTypes.object,
    component: PropTypes.object,
    componentElement: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    sx: PropTypes.object,
    itemSx: PropTypes.object,
    disableTransition: PropTypes.bool,
};

export default JumboRqList;
