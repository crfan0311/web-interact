import React from "react";
import JumboLayoutContentContext from "@jumbo/components/JumboLayout/JumboLayoutContent/JumboLayoutContentContext";

const useJumboLayoutContent = () => {
    return React.useContext(JumboLayoutContentContext);
};

export default useJumboLayoutContent;