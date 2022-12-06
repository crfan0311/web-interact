import React from "react";
import JumboLayoutRootContext from "@jumbo/components/JumboLayout/JumboLayoutRoot/JumboLayoutRootContext";

const useJumboLayoutRoot = () => {
    return React.useContext(JumboLayoutRootContext);
};

export default useJumboLayoutRoot;