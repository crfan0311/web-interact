import React from 'react';
import JumboThemeSidebarContext from "./JumboThemeSidebarContext";
import {createTheme} from "@mui/material/styles";

const JumboThemeSidebar = ({children, init}) => {
    const [sidebarTheme, setSidebarTheme] = React.useState(init);

    const themeSidebarContextValue = React.useMemo(() => ({
        sidebarTheme: createTheme(sidebarTheme),
        setSidebarTheme: setSidebarTheme,
    }), [sidebarTheme, setSidebarTheme]);

    return (
        <JumboThemeSidebarContext.Provider value={themeSidebarContextValue}>
            {children}
        </JumboThemeSidebarContext.Provider>
    );
};

export default JumboThemeSidebar;