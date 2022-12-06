import React from "react";
import JumboAppContext from "@jumbo/components/JumboApp/JumboAppContext";

const useJumboApp = () => {
    return React.useContext(JumboAppContext);
};

export default useJumboApp;
