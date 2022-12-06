import React from "react";

export const AuthContext = React.createContext({
    authUser: null,
    authToken: null,
    isLoading: false,
    fallbackPath: ""
});
