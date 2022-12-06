import React from "react";
import JumboLayoutFooterContext from "@jumbo/components/JumboLayout/JumboLayoutFooter/JumboLayoutFooterContext";

const useJumboLayoutFooter = () => {
    return React.useContext(JumboLayoutFooterContext);
};

export default useJumboLayoutFooter;