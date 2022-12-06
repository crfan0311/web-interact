import React from 'react';
import Div from "@jumbo/shared/Div";
import useJumboContentLayout from "@jumbo/hooks/useJumboContentLayout";

const JumboContentLayoutSidebar = ({children}) => {
    const contentLayout = useJumboContentLayout();
    return (
        <Div
            sx={{
                display: 'flex',
                minWidth: 0,
                flexDirection: 'column',
                width: 200,
                mr: 3,
                flexShrink: 0,
                minHeight: '100%',
                ...contentLayout?.sidebar?.sx
            }}
            className="CmtLayout-sidebar"
        >
            {children}
        </Div>
    );
};

export default JumboContentLayoutSidebar;