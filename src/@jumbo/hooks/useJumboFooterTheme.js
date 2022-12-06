import React from "react";
import JumboThemeFooterContext from "@jumbo/components/JumboTheme/JumboThemeFooter/JumboThemeFooterContext";

const useJumboFooterTheme = () => {
    return React.useContext(JumboThemeFooterContext);
};

export default useJumboFooterTheme;