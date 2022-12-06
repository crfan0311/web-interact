import React from 'react';
import JumboListContext from "@jumbo/components/JumboList/JumboListContext";

const useJumboList = () => {
    return React.useContext(JumboListContext);
};

export default useJumboList;