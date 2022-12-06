import React from 'react';
import PropTypes from "prop-types";

import JumboLayoutSidebarContext from "./JumboLayoutSidebar/JumboLayoutSidebarContext";
import JumboLayoutHeaderContext from "./JumboLayoutHeader/JumboLayoutHeaderContext";
import JumboLayoutFooterContext from "./JumboLayoutFooter/JumboLayoutFooterContext";
import {
    LAYOUT_ACTIONS,
    SIDEBAR_SCROLL_TYPES,
    SIDEBAR_STYLES,
    SIDEBAR_VARIANTS,
    SIDEBAR_VIEWS
} from "@jumbo/utils/constants/layout";
import JumboLayoutRootContext from "@jumbo/components/JumboLayout/JumboLayoutRoot/JumboLayoutRootContext";
import JumboLayoutContentContext from "@jumbo/components/JumboLayout/JumboLayoutContent/JumboLayoutContentContext";
import {useMediaQuery} from "@mui/material";

const init = (activeLayoutConfig) => {
    const layoutInitOptions = {
        header: {
            hide: false,
            ...(activeLayoutConfig?.layoutOptions?.header ? activeLayoutConfig?.layoutOptions?.header : {}),
        },
        sidebar: {
            hide: false,
            width: 240,
            minWidth: 80,
            variant: SIDEBAR_VARIANTS.PERSISTENT,
            style: SIDEBAR_STYLES.FULL_HEIGHT,
            scrollType: SIDEBAR_SCROLL_TYPES.FIXED,
            ...(activeLayoutConfig?.layoutOptions?.sidebar ? activeLayoutConfig?.layoutOptions?.sidebar : {}),
        },
        footer: {
            hide: false,
            ...(activeLayoutConfig?.layoutOptions?.footer ? activeLayoutConfig?.layoutOptions?.footer : {}),
        },
        content: {
            ...(activeLayoutConfig?.layoutOptions?.content ? activeLayoutConfig?.layoutOptions?.content : {}),
        },
    };

    return (
        {
            ...layoutInitOptions,
            previousOptions: {...layoutInitOptions},
        }
    );
};

const jumboLayoutReducer = (state, action) => {
    const {
        previousOptions,
        ...currentOptions
    } = state;

    switch (action.type) {
        case LAYOUT_ACTIONS.SET_HEADER_OPTIONS:
            return {
                ...state,
                header: {
                    ...state?.header,
                    ...action?.payload,
                }
            };


        case LAYOUT_ACTIONS.SET_SIDEBAR_OPTIONS:
            let newSidebarOptions = {};
            let sidebarPreviousOptions = {};


            if(action.isMobile && !action.payload.hasOwnProperty("variant")) {
                newSidebarOptions = {
                    variant: SIDEBAR_VARIANTS.TEMPORARY,
                    style: SIDEBAR_STYLES.FULL_HEIGHT,
                    view: SIDEBAR_VIEWS.FULL,
                    open: false,
                    ...action.payload
                };
                sidebarPreviousOptions = {...previousOptions.sidebar};
            }
            else if (action.isMobile && action.payload.hasOwnProperty("variant")) {
                newSidebarOptions = {
                    variant: SIDEBAR_VARIANTS.TEMPORARY,
                    style: SIDEBAR_STYLES.FULL_HEIGHT,
                    view: SIDEBAR_VIEWS.FULL,
                    open: false,
                };
                if(action.payload?.variant !== SIDEBAR_VARIANTS.TEMPORARY) {
                    sidebarPreviousOptions = {
                        ...previousOptions.sidebar,
                        ...action.payload,
                    };
                }
                else {
                    sidebarPreviousOptions = {
                        ...previousOptions.sidebar
                    }
                }

            }
            else if (!action.isMobile) {
                newSidebarOptions = {
                    ...currentOptions.sidebar,
                    ...action.payload,
                };
                sidebarPreviousOptions = {
                    ...currentOptions.sidebar,
                    ...action.payload
                }
            }

            return {
                ...state,
                previousOptions: {
                    ...previousOptions,
                    sidebar: sidebarPreviousOptions,
                },
                sidebar: {
                    ...state?.sidebar,
                    ...newSidebarOptions,
                }
            };

        case LAYOUT_ACTIONS.SET_CONTENT_OPTIONS:
            return {
                ...state,
                content: {
                    ...state?.content,
                    ...action?.payload
                }
            };

        case LAYOUT_ACTIONS.SET_FOOTER_OPTIONS:
            return {
                ...state,
                footer: {
                    ...state?.footer,
                    ...action?.payload,
                }
            };


        case LAYOUT_ACTIONS.SET_ROOT_OPTIONS:
            return {
                ...state,
                root: {
                    ...state?.root,
                    ...action?.payload
                }
            };

        case LAYOUT_ACTIONS.SET_OPTIONS:
            return {
                ...state,
                ...action.payload,
            };

        default:
            return state;
    }
};

const JumboLayoutProvider = ({children}) => {
    const [layoutOptions, setLayoutOptions] = React.useReducer(
        jumboLayoutReducer,
        {},
        init
    );

    const isNotMobile = useMediaQuery('(min-width:1200px)');

    React.useEffect(() => {
        if (!isNotMobile) {
            setSidebarOptions({
                variant: SIDEBAR_VARIANTS.TEMPORARY,
                style: SIDEBAR_STYLES.FULL_HEIGHT,
                view: SIDEBAR_VIEWS.FULL,
                open: false,
            });
            return;
        }
        setSidebarOptions(layoutOptions.previousOptions.sidebar);
    }, [isNotMobile]);

    const setHeaderOptions = React.useCallback((options) => {
        setLayoutOptions({type: LAYOUT_ACTIONS.SET_HEADER_OPTIONS, payload: options, isMobile: !isNotMobile});
    }, [setLayoutOptions, isNotMobile]);

    const setSidebarOptions = React.useCallback((options) => {
        setLayoutOptions({type: LAYOUT_ACTIONS.SET_SIDEBAR_OPTIONS, payload: options, isMobile: !isNotMobile});
    }, [setLayoutOptions, isNotMobile]);

    const setFooterOptions = React.useCallback((options) => {
        setLayoutOptions({type: LAYOUT_ACTIONS.SET_FOOTER_OPTIONS, payload: options, isMobile: !isNotMobile});
    }, [setLayoutOptions, isNotMobile]);

    const setRootOptions = React.useCallback((options) => {
        setLayoutOptions({type: LAYOUT_ACTIONS.SET_ROOT_OPTIONS, payload: options, isMobile: !isNotMobile});
    }, [setLayoutOptions, isNotMobile]);

    const setContentOptions = React.useCallback((options) => {
        setLayoutOptions({type: LAYOUT_ACTIONS.SET_CONTENT_OPTIONS, payload: options, isMobile: !isNotMobile});
    }, [setLayoutOptions, isNotMobile]);


    const contentContextValue = React.useMemo(() => ({
        contentOptions: layoutOptions?.content,
        setContentOptions: setContentOptions,
    }), [layoutOptions?.content]);

    const sidebarContextValue = React.useMemo(() => {
        return {
            sidebarOptions: layoutOptions?.sidebar,
            setSidebarOptions: setSidebarOptions,
        }
    }, [layoutOptions?.sidebar]);

    const headerContextValue = React.useMemo(() => ({
        headerOptions: layoutOptions?.header,
        setHeaderOptions: setHeaderOptions,
    }), [layoutOptions?.header]);

    const footerContextValue = React.useMemo(() => ({
        footerOptions: layoutOptions?.footer,
        setFooterOptions: setFooterOptions,
    }), [layoutOptions?.footer]);

    const rootContextValue = React.useMemo(() => {
        return ({
            rootOptions: layoutOptions?.root,
            setRootOptions: setRootOptions,
        });
    }, [layoutOptions?.root]);


    return (
        <JumboLayoutRootContext.Provider value={rootContextValue}>
            <JumboLayoutSidebarContext.Provider value={sidebarContextValue}>
                <JumboLayoutHeaderContext.Provider value={headerContextValue}>
                    <JumboLayoutFooterContext.Provider value={footerContextValue}>
                        <JumboLayoutContentContext.Provider value={contentContextValue}>
                            {children}
                        </JumboLayoutContentContext.Provider>
                    </JumboLayoutFooterContext.Provider>
                </JumboLayoutHeaderContext.Provider>
            </JumboLayoutSidebarContext.Provider>
        </JumboLayoutRootContext.Provider>
    );
};

JumboLayoutProvider.propTypes = {
    children: PropTypes.node
};

export default JumboLayoutProvider;