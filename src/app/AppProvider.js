import React from 'react';
import {config} from "./config/main";
import {APP_ACTIONS} from "./utils/constants/appActions";

const AppContext = React.createContext({});

function init(initialValue) {
    return {
        customizerVisibility: initialValue.customizerVisibility,
        containerStyle: initialValue.containerStyle,
    }
}

function appReducer(state, action) {
    switch(action.type) {
        case APP_ACTIONS.SET_CUSTOMIZER_VISIBILITY:
            return {
                ...state,
                customizerVisibility: action.payload,
            };

        case APP_ACTIONS.SET_CONTAINER_STYLE:
            return {
                ...state,
                containerStyle: action.payload,
            };

        case APP_ACTIONS.SET_APP:
            return {
                ...state,
                ...action.payload,
            };

        default:
            return state;
    }
}

const AppProvider = ({children}) => {
    const [app, setApp] = React.useReducer(appReducer, {
        customizerVisibility: false,
        containerStyle: config.containerStyle,
    }, init);

    const setCustomizerVisibility = React.useCallback((value) => {
        setApp({type: APP_ACTIONS.SET_CUSTOMIZER_VISIBILITY, payload: value});
    }, [setApp]);

    const setContainerStyle = React.useCallback((containerStyle) => {
        setApp({type: APP_ACTIONS.SET_CONTAINER_STYLE, payload: containerStyle});
    }, [setApp]);

    const setAppState = React.useCallback((stateObject) => {
        setApp({type: APP_ACTIONS.SET_APP, payload: stateObject});
    }, [setApp]);

    const contextValue = React.useMemo(() => ({
        ...app,
        setCustomizerVisibility,
        setContainerStyle,
        setAppState,
    }), [app]);

    return (
        <AppContext.Provider value={contextValue}>
            {children}
        </AppContext.Provider>
    );
};

export {AppContext};
export default AppProvider;