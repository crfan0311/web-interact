import React from "react";
import {AuthContext} from "@jumbo/components/JumboAuthProvider/JumboAuthContext";

const useJumboAuth = () => {
    return React.useContext(AuthContext);
};

export default useJumboAuth;