import React from 'react';
import JumboThemeHeaderContext from "@jumbo/components/JumboTheme/JumboThemeHeader/JumboThemeHeaderContext";

const useJumboHeaderTheme = () => {
    return React.useContext(JumboThemeHeaderContext);
};

export default useJumboHeaderTheme;
