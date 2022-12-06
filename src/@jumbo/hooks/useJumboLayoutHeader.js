import React from "react";
import JumboLayoutHeaderContext from "@jumbo/components/JumboLayout/JumboLayoutHeader/JumboLayoutHeaderContext";

const useJumboLayoutHeader = () => {
    return React.useContext(JumboLayoutHeaderContext);
};

export default useJumboLayoutHeader;
