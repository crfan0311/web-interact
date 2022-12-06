import React from "react";
import MailAppContext from "../MailAppContext";

const useMailsApp = () => {
    return React.useContext(MailAppContext);
};

export default useMailsApp;
