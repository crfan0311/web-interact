import React from 'react';
import {useLocation, useNavigate} from "react-router-dom";
import {routesForAuthenticatedOnly, routesForNotAuthenticatedOnly} from "../../../app/routes";
import {matchRoutePaths} from "@jumbo/utils";
import {removeToken, storeToken} from "./authHelpers";
import {config} from "../../../app/config/main";
import {AuthContext} from "@jumbo/components/JumboAuthProvider/JumboAuthContext";


const storedToken = localStorage.getItem("token");
let firstTimePageLoad = true;

const init = () => {
    let authUser = null;

    if (!config?.authSetting) {
        throw Error(`You are using JumboAuthProvider but you haven't setup authSetting inside /src/app/config/main.js's config object`);
    }

    if (storedToken) {
        storeToken(storedToken); // also sets axios header
    }

    return {
        authToken: storedToken ?? null,
        authUser: authUser,
        isLoading: false,
        fallbackPath: config.authSetting.fallbackPath,
    }
};

const authReducer = (state, action) => {
    switch (action.type) {
        case "set-auth-data":
            return {
                ...state,
                ...action.payload,
            };

        case "start-loading":
            return {
                ...state,
                isLoading: true,
            };

        case "stop-loading":
            return {
                ...state,
                isLoading: false,
            };
    }
};

const JumboAuthProvider = ({children, ...restProps}) => {
    const location = useLocation();
    const [authOptions, setAuthOptions] = React.useReducer(authReducer, restProps, init);
    const [logout, setLogout] = React.useState(false);
    const navigate = useNavigate();

    React.useEffect(() => {
        if (logout) {
            removeToken();
            setAuthOptions({
                type: "set-auth-data",
                payload: {authToken: null, authUser: null, isLoading: false}
            });
            setLogout(false);
        }
    }, [logout]);

    const setAuthToken = React.useCallback(async (token) => {
        setAuthOptions({type: "start-loading"});
        if (!token) {
            setLogout(true);
            return;
        }

        storeToken(token);
        try {

            const authUser = await config?.authSetting?.getAuthUserService();
            if (authUser) {
                setAuthOptions({
                    type: "set-auth-data",
                    payload: {authToken: token, authUser: authUser, isLoading: false}
                });
                return;
            }
            setLogout(true);

        } catch (error) {
            setLogout(true);
            console.error(error);
        }
    }, []);

    //todo: maybe in next version
    const setRedirectPath = React.useCallback((redirectPath) => {
        setAuthOptions({type: "set-redirect-path", payload: {redirectPath}});
    }, []);

    const setAuthData = React.useCallback((data) => {
        setAuthOptions({type: "set-auth-data", payload: data});
    }, []);

    React.useEffect(() => {
        const isAuthOnlyRoute = matchRoutePaths(routesForAuthenticatedOnly, location.pathname);
        const isNotAuthOnlyRoute = matchRoutePaths(routesForNotAuthenticatedOnly, location.pathname);
        if (!authOptions.authToken) {
            if (isAuthOnlyRoute) {
                navigate(authOptions?.fallbackPath);
            }
        } else if (!authOptions.authUser) {
            setAuthToken(authOptions.authToken);
        } else if (isNotAuthOnlyRoute) {
            if (!firstTimePageLoad)
                navigate(config.authSetting.redirectNotAuthenticatedPath ?? "/");
            else
                firstTimePageLoad = false;
        }
    }, [authOptions.authUser]);

    const contextValue = React.useMemo(() => {

        return {
            ...authOptions,
            setAuthData,
            setRedirectPath,
            setAuthToken,
            setAuthOptions,
        }
    }, [authOptions]);

    return (
        <AuthContext.Provider value={contextValue}>
            {children}
        </AuthContext.Provider>
    );
};

export default JumboAuthProvider;