import React from 'react';
import Div from "@jumbo/shared/Div";

const JumboContentLayoutFooter = ({children}) => {
    return (
        <Div
            sx={{
                padding: theme => theme.spacing(2, 3),
                backgroundColor: theme => theme.palette.error.main,
            }}
            className="CmtLayout-footer"
        >
            {children}
        </Div>
    );
};

export default JumboContentLayoutFooter;
