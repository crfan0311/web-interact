import React from "react";
import {AppContext} from "../AppProvider";

const useApp = () => {
    return React.useContext(AppContext);
};

export default useApp;