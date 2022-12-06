import React from 'react';
import {CONTENT_LAYOUT_ACTIONS} from "./utils/constants";
import config from "@jumbo/config";
import JumboContentLayoutContext from "./JumboContentLayoutContext";

let initialSetup = {};
const init = (layoutOptions) => {

    initialSetup = {
        base: {
            ...config?.defaultContentLayout?.base,
            ...layoutOptions?.base,
        },
        root: {
            ...config?.defaultContentLayout?.root,
            ...layoutOptions?.root,
        },
        container: config?.defaultContentLayout?.container,
        sx: config?.defaultContentLayout?.sx,
        wrapper: {
            ...config?.defaultContentLayout?.wrapper,
            ...layoutOptions?.wrapper
        },
        header: {
            ...config?.defaultContentLayout?.header,
            ...layoutOptions?.header
        },
        sidebar: {
            ...config?.defaultContentLayout?.sidebar,
            ...layoutOptions?.sidebar,
        },
        footer: {
            ...config?.defaultContentLayout?.footer,
            ...layoutOptions?.footer,
        },
        content: {
            ...config?.defaultContentLayout?.content,
            ...layoutOptions?.content,
        },
        main: {
            ...config?.defaultContentLayout?.main,
            ...layoutOptions?.main,
        }
    };
    return initialSetup;
};

const jumboContentLayoutReducer = (state, action) => {
    switch (action.type) {
        case CONTENT_LAYOUT_ACTIONS.SET_BASE_OPTIONS:
            return {
                ...state,
                base: {
                    ...state.base,
                    ...action.payload,
                }
            };
        case CONTENT_LAYOUT_ACTIONS.SET_HEADER_OPTIONS:
            return {
                ...state,
                header: {
                    ...state.header,
                    ...action.payload,
                    sx: {...state.header.sx, ...action?.payload?.sx ?? {}},
                }
            };
        case CONTENT_LAYOUT_ACTIONS.SET_SIDEBAR_OPTIONS:
            return {
                ...state,
                sidebar: {
                    ...state.sidebar,
                    ...action.payload,
                    sx: {...state.sidebar.sx, ...action?.payload?.sx ?? {}},
                }
            };
        case CONTENT_LAYOUT_ACTIONS.SET_WRAPPER_OPTIONS:
            return {
                ...state,
                wrapper: {
                    ...state?.wrapper,
                    ...action.payload,
                    sx: {...state.wrapper.sx, ...action?.payload?.sx ?? {}},
                }
            };
        case CONTENT_LAYOUT_ACTIONS.SET_CONTENT_OPTIONS:
            return {
                ...state,
                content: {
                    ...state.content,
                    ...action.payload,
                    sx: {...state.content.sx, ...action?.payload?.sx ?? {}},
                }
            };
        case CONTENT_LAYOUT_ACTIONS.SET_MAIN_OPTIONS:
            return {
                ...state,
                main: {
                    ...state.content,
                    ...action.payload,
                    sx: {...state.main.sx, ...action?.payload?.sx ?? {}},
                }
            };
        case CONTENT_LAYOUT_ACTIONS.SET_FOOTER_OPTIONS:
            return {
                ...state,
                footer: {
                    ...state.footer,
                    ...action.payload,
                    sx: {...state.footer.sx, ...action?.payload?.sx ?? {}},
                }
            };
        case CONTENT_LAYOUT_ACTIONS.SET_ROOT_OPTIONS:
            return {
                ...state,
                root: {
                    ...state.root,
                    ...action.payload,
                    sx: {...state.root.sx, ...action?.payload?.sx ?? {}}
                }
            };
        case CONTENT_LAYOUT_ACTIONS.SET_ALL_OPTIONS:
            return {
                base: {
                    ...initialSetup.base,
                    ...action.payload?.base,
                },
                root: {
                    ...initialSetup.root,
                    ...action.payload?.root,
                    sx: {...initialSetup.root.sx, ...action?.payload?.root?.sx ?? {}}
                },
                header: {
                    ...initialSetup.header,
                    ...action.payload?.header,
                    sx: {...initialSetup.header.sx, ...action?.payload?.header?.sx ?? {}},
                },
                sidebar: {
                    ...initialSetup.sidebar,
                    ...action.payload?.sidebar,
                    sx: {...initialSetup.sidebar.sx, ...action?.payload?.sidebar?.sx ?? {}},
                },
                wrapper: {
                    ...initialSetup.wrapper,
                    ...action.payload?.wrapper,
                    sx: {...initialSetup.wrapper.sx, ...action?.payload?.wrapper?.sx ?? {}},
                },
                main: {
                    ...initialSetup.main,
                    ...action.payload?.main,
                    sx: {...initialSetup.main.sx, ...action?.payload?.main?.sx ?? {}},
                },
                content: {
                    ...initialSetup.content,
                    ...action.payload?.content,
                    sx: {...initialSetup.content.sx, ...action?.payload?.content?.sx ?? {}},
                },
                footer: {
                    ...initialSetup.footer,
                    ...action.payload?.footer,
                    sx: {...initialSetup.footer.sx, ...action?.payload?.footer?.sx ?? {}},
                }
            };
        case CONTENT_LAYOUT_ACTIONS.RESET:
            return initialSetup;
        default:
            throw Error("Invalid action type to update Content Layout in ContentLayoutProvider");
    }
};

const JumboContentLayoutProvider = (props) => {

    const [contentLayoutOptions, setContentLayoutOptions] = React.useReducer(
        jumboContentLayoutReducer,
        props.layoutOptions,
        init
    );

    const setBaseOptions = React.useCallback((options) => {
        setContentLayoutOptions({type: CONTENT_LAYOUT_ACTIONS.SET_BASE_OPTIONS, payload: options});
    }, [setContentLayoutOptions]);

    const setRootOptions = React.useCallback((options) => {
        setContentLayoutOptions({type: CONTENT_LAYOUT_ACTIONS.SET_ROOT_OPTIONS, payload: options});
    }, [setContentLayoutOptions]);

    const setHeaderOptions = React.useCallback((options) => {
        setContentLayoutOptions({type: CONTENT_LAYOUT_ACTIONS.SET_HEADER_OPTIONS, payload: options});
    }, [setContentLayoutOptions]);

    const setSidebarOptions = React.useCallback((options) => {
        setContentLayoutOptions({type: CONTENT_LAYOUT_ACTIONS.SET_SIDEBAR_OPTIONS, payload: options});
    }, [setContentLayoutOptions]);

    const setWrapperOptions = React.useCallback((options) => {
        setContentLayoutOptions({type: CONTENT_LAYOUT_ACTIONS.SET_WRAPPER_OPTIONS, payload: options});
    }, [setContentLayoutOptions]);

    const setFooterOptions = React.useCallback((options) => {
        setContentLayoutOptions({type: CONTENT_LAYOUT_ACTIONS.SET_FOOTER_OPTIONS, payload: options});
    }, [setContentLayoutOptions]);

    const setContentOptions = React.useCallback((options) => {
        setContentLayoutOptions({type: CONTENT_LAYOUT_ACTIONS.SET_CONTENT_OPTIONS, payload: options});
    }, [setContentLayoutOptions]);

    const setMainOptions = React.useCallback((options) => {
        setContentLayoutOptions({type: CONTENT_LAYOUT_ACTIONS.SET_MAIN_OPTIONS, payload: options});
    }, [setContentLayoutOptions]);

    const setContentLayout = React.useCallback((options) => {
        setContentLayoutOptions({type: CONTENT_LAYOUT_ACTIONS.SET_ALL_OPTIONS, payload: options});
    }, [setContentLayoutOptions]);

    const resetContentLayout = React.useCallback((options) => {
        setContentLayoutOptions({type: CONTENT_LAYOUT_ACTIONS.RESET});
    }, [setContentLayoutOptions]);

    const contentLayoutContext = React.useMemo(() => ({
        ...contentLayoutOptions,
        setBaseOptions,
        setRootOptions,
        setContentOptions,
        setHeaderOptions,
        setFooterOptions,
        setSidebarOptions,
        setWrapperOptions,
        setContentLayout,
        setMainOptions,
        resetContentLayout,
    }), [
        contentLayoutOptions, setBaseOptions, setRootOptions, setContentOptions,
        setHeaderOptions, setFooterOptions, setSidebarOptions, setWrapperOptions,
        setContentLayout, setMainOptions, resetContentLayout
    ]);

    return (
        <JumboContentLayoutContext.Provider value={contentLayoutContext}>
            {props?.children}
        </JumboContentLayoutContext.Provider>
    );
};

export default JumboContentLayoutProvider;