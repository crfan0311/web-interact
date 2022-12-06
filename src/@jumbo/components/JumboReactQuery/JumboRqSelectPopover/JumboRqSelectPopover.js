import React from 'react';
import PropTypes from "prop-types";
import {useQuery} from "react-query";
import JumboSelectPopover from "@jumbo/components/JumboSelectPopover";
import {getArrayElementFromKey} from "@jumbo/utils";

const JumboRqSelectPopover = (props) => {
    const {queryOptions} = props;

    const listQuery = useQuery([
        queryOptions.queryKey,
        {queryParams: queryOptions.queryParams}
    ], props.service);

    const queryData = React.useMemo(() => {
        const dataArray = getArrayElementFromKey(listQuery?.data, queryOptions?.dataKey);
        if(!Array.isArray(dataArray)) {
            return [];
        }
        return dataArray;
    }, [listQuery?.data, queryOptions.dataKey]);

    return (
        <JumboSelectPopover
            data={queryData}
            primaryKey={props.primaryKey}
            labelKey={props.labelKey}
            onChange={props.onChange}
            onDone={props.onDone}
            button={props.button}
            doneButton={props.doneButton}
            resetOnClose={props.resetOnClose}
            header={props.header}
        />
    );
};

JumboRqSelectPopover.propTypes = {
    service: PropTypes.func.isRequired,
    queryOptions: PropTypes.shape({
        queryKey: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.array,
        ]).isRequired,
        queryParams: PropTypes.object,
        dataKey: PropTypes.string.isRequired,
    }).isRequired,
    primaryKey: PropTypes.string.isRequired,
    labelKey: PropTypes.string.isRequired,
    button: PropTypes.exact({
        component: PropTypes.object,
        label: PropTypes.node
    }).isRequired,
    doneButton: PropTypes.exact({
        component: PropTypes.object,
        label: PropTypes.node,
    }),
    header: PropTypes.node,
    resetOnClose: PropTypes.bool,
    onChange: PropTypes.func,
    onDone: PropTypes.func,
};

export default JumboRqSelectPopover;
