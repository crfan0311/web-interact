import React from 'react';
import config from "@jumbo/config";
import JumboThemeContext from "@jumbo/components/JumboTheme/JumboThemeContext";
import {createTheme, ThemeProvider} from "@mui/material/styles";
import JumboThemeHeader from "./JumboThemeHeader";
import JumboThemeSidebar from "./JumboThemeSidebar";
import JumboThemeFooter from "./JumboThemeFooter";

const JumboTheme = ({children, init}) => {
    const [theme, setTheme] = React.useState(init.main);
    const [muiLocale, setMuiLocale] = React.useState(config.locale);

    const updateTheme = React.useCallback((options) => {
        const newTheme = createTheme({...theme, ...options}, muiLocale);
        setTheme(newTheme);
    }, [theme, setTheme]);

    const themeContextValue = React.useMemo(() => ({
        theme: createTheme(theme, muiLocale),
        setTheme: updateTheme,
        setMuiLocale: setMuiLocale,
    }), [theme, muiLocale]);

    return (
        <JumboThemeContext.Provider value={themeContextValue}>
            <ThemeProvider theme={themeContextValue.theme}>
                <JumboThemeHeader init={init.header}>
                    <JumboThemeSidebar init={init.sidebar}>
                        <JumboThemeFooter init={init.footer}>
                            {children}
                        </JumboThemeFooter>
                    </JumboThemeSidebar>
                </JumboThemeHeader>
            </ThemeProvider>
        </JumboThemeContext.Provider>
    );
};

export default JumboTheme;