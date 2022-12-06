import React from "react";
import JumboLayoutSidebarContext from "@jumbo/components/JumboLayout/JumboLayoutSidebar/JumboLayoutSidebarContext";

const useJumboLayoutSidebar = () => {
    return React.useContext(JumboLayoutSidebarContext);
};

export default useJumboLayoutSidebar;
