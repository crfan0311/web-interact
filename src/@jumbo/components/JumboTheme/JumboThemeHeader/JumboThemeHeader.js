import React from 'react';
import JumboThemeHeaderContext from "./JumboThemeHeaderContext";
import {createTheme} from "@mui/material/styles";

const JumboThemeHeader = ({children, init}) => {
    const [headerTheme, setHeaderTheme] = React.useState(init);

    const themeHeaderContextValue = React.useMemo(() => ({
        headerTheme: createTheme(headerTheme),
        setHeaderTheme: setHeaderTheme,
    }), [headerTheme, setHeaderTheme]);

    return (
        <JumboThemeHeaderContext.Provider value={themeHeaderContextValue}>
            {children}
        </JumboThemeHeaderContext.Provider>
    );
};

export default JumboThemeHeader;