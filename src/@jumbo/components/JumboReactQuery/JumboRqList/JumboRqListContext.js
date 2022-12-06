import React from "react";

const JumboRqListContext = React.createContext({
    queryOptions: {},
    pagination: {page: 0, limit: -1},
    data: [],
    selectedItems: [],
    selectedOnPage: [],
    multiSelection: false,
    hasBulkActions: false,
});

export default JumboRqListContext;