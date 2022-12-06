import React from 'react';
import JumboThemeSidebarContext from "@jumbo/components/JumboTheme/JumboThemeSidebar/JumboThemeSidebarContext";

const useJumboSidebarTheme = () => {
    return React.useContext(JumboThemeSidebarContext);
};

export default useJumboSidebarTheme;