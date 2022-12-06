import React from "react";

import JumboTheme from "@jumbo/providers/JumboThemeProvider";
import JumboLocale from "@jumbo/components/JumboLocale/JumboLocaleProvider";


const withJumboProviders = (Component) => (props) => {
    //todo - performance check - could this be memoized or does this require to be memoized

    return () => (
        <JumboLocale>
            <JumboTheme>
                <Component {...props} />
            </JumboTheme>
        </JumboLocale>
    );
};

export default withJumboProviders;