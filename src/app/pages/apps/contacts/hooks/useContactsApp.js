import React from "react";
import ContactsAppContext from "../ContactsAppContext";

const useContactsApp = () => {
    return React.useContext(ContactsAppContext);
};

export default useContactsApp;