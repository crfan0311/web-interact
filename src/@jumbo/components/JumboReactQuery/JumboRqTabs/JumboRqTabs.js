import React from 'react';
import PropTypes from 'prop-types';
import {Button, Stack} from "@mui/material";
import {useQuery} from "react-query";
import {getArrayElementFromKey} from "@jumbo/utils";

const JumboRqTabs = ({service, primaryKey, queryOptions, map, onChange,sx}) => {
    const [activeTab, setActiveTab] = React.useState({id: 1, slug: 'all'});
    const listQuery = useQuery([
        queryOptions.queryKey,
        {queryParams: queryOptions.queryParams}
    ], service);
    const queryData = React.useMemo(() => {
        const dataArray = getArrayElementFromKey(listQuery?.data, queryOptions?.dataKey);
        if (!Array.isArray(dataArray)) {
            return [];
        }
        return dataArray;
    }, [listQuery?.data, queryOptions.dataKey]);

    const handleTabClick = (item) => {
        setActiveTab(item);
    };

    React.useEffect(() => {
        onChange(activeTab);
    }, [activeTab]);
    return (
        <Stack direction={"row"} spacing={1} sx={sx}>
            {
                queryData.map((item, index) => {
                    return (
                        <Button
                            key={index}
                            size={"small"}
                            variant={(activeTab && item[primaryKey] === activeTab[primaryKey]) ? "contained" : "outlined"}
                            onClick={() => handleTabClick(item)}
                        >
                            {item[map.label]}
                        </Button>
                    )
                })
            }
        </Stack>
    );
};
JumboRqTabs.defaultProps = {
    map: {label: "label"},
    onChange: () => {
    }
}
JumboRqTabs.propTypes = {
    service: PropTypes.func.isRequired,
    queryOptions: PropTypes.shape({
        queryKey: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.array
        ]).isRequired,
        queryParams: PropTypes.object,
        dataKey: PropTypes.string.isRequired,
    }).isRequired,
    primaryKey: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
};
export default JumboRqTabs;
