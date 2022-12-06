import React from "react";
import JumboContentLayoutContext from "@jumbo/components/JumboContentLayout/JumboContentLayoutContext";

const useJumboContentLayout = () => {
    return React.useContext(JumboContentLayoutContext);
};

export default useJumboContentLayout;