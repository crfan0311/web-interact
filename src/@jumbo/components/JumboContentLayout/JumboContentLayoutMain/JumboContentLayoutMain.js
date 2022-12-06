import React from 'react';
import Div from "@jumbo/shared/Div";
import useJumboContentLayout from "@jumbo/hooks/useJumboContentLayout";

const JumboContentLayoutMain = ({children}) => {
    const contentLayout = useJumboContentLayout();
    return (
        <Div
            sx={{
                display: 'flex',
                flex: 1,
                minWidth: 0,
                flexDirection: 'column',
                minHeight: '100%',
                ...contentLayout?.main?.sx
            }}
            className="CmtLayout-main"
        >
            {children}
        </Div>
    );
};

export default JumboContentLayoutMain;