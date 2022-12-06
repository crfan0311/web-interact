import React from "react";
import JumboThemeContext from "@jumbo/components/JumboTheme/JumboThemeContext";

const useJumboTheme = () => {
    return React.useContext(JumboThemeContext);
};

export default useJumboTheme;