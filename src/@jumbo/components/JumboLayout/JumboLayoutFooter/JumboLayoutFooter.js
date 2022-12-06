import React from 'react';
import Div from "@jumbo/shared/Div";
import useJumboFooterTheme from "@jumbo/hooks/useJumboFooterTheme";
import useJumboLayoutFooter from "@jumbo/hooks/useJumboLayoutFooter";
import ThemeProvider from "@mui/material/styles/ThemeProvider";

const JumboLayoutFooter = ({children}) => {
    const {footerTheme} = useJumboFooterTheme();
    const {footerOptions} = useJumboLayoutFooter();

    if(footerOptions?.hide) {
        return null;
    }
    return (
        <ThemeProvider theme={footerTheme}>
            <Div className="CmtLayout-footer">
                {children}
            </Div>
        </ThemeProvider>
    );
};

export default JumboLayoutFooter;
