import React from 'react';
import useJumboSidebarTheme from "@jumbo/hooks/useJumboSidebarTheme";
import useJumboLayoutSidebar from "@jumbo/hooks/useJumboLayoutSidebar";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import {Drawer, Toolbar} from "@mui/material";
import {SIDEBAR_STYLES, SIDEBAR_VARIANTS, SIDEBAR_VIEWS} from "@jumbo/utils/constants/layout";
import Div from "@jumbo/shared/Div";

const JumboLayoutSidebar = ({children, headerHeightProps}) => {
    const {sidebarTheme} = useJumboSidebarTheme();
    const {sidebarOptions, setSidebarOptions} = useJumboLayoutSidebar();

    const handleClose = React.useCallback(() => {
        setSidebarOptions({
            open: false,
        });
    }, []);

    const handleMouseEnter = React.useCallback(() => {
        if (sidebarOptions?.view === SIDEBAR_VIEWS.MINI) {
            setSidebarOptions({variant: SIDEBAR_VARIANTS.PERSISTENT, open: true});
        }
    }, [sidebarOptions?.view]);

    const handleMouseLeave = React.useCallback(() => {
        if (sidebarOptions?.view === SIDEBAR_VIEWS.MINI) {
            setSidebarOptions({variant: SIDEBAR_VARIANTS.PERMANENT, open: false});
        }
    }, [sidebarOptions?.view]);


    if (sidebarOptions?.hide) {
        return null;
    }

    return (
        <ThemeProvider theme={sidebarTheme}>
            <Drawer
                sx={{
                    '& .MuiDrawer-paper': {
                        border: 'none',
                        boxShadow: 25,
                        transition: theme => theme.transitions.create(['width']),
                        width: (sidebarOptions?.view === SIDEBAR_VIEWS.MINI && !sidebarOptions.open) ? sidebarOptions?.minWidth : sidebarOptions?.width,
                        ...(sidebarTheme.bgImage ? {
                            background: `url(${sidebarTheme.bgImage}) no-repeat center`,
                            backgroundSize: 'cover',
                        } : {})
                    },
                }}
                anchor={sidebarOptions?.anchor}
                open={sidebarOptions?.open}
                variant={(sidebarOptions?.view === SIDEBAR_VIEWS.MINI && sidebarOptions?.open) ? SIDEBAR_VARIANTS.TEMPORARY : sidebarOptions?.variant}
                transitionDuration={300}
                ModalProps={{
                    keepMounted: true,
                }}
                hideBackdrop={sidebarOptions?.view === SIDEBAR_VIEWS.MINI}
                onClose={handleClose}
            >
                <Div
                    sx={{
                        flex: 1,
                        display: 'flex',
                        minWidth: 0,
                        flexDirection: 'column',
                        minHeight: "100%",
                        overflow: "hidden",
                        position: 'relative',
                        zIndex: 1,
                    }}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    {
                        sidebarOptions?.style === SIDEBAR_STYLES.CLIPPED_UNDER_HEADER &&
                        <Toolbar sx={{flexShrink: 0, ...headerHeightProps}}/>
                    }
                    {children}
                </Div>
                {
                    sidebarTheme?.overlay?.bgColor &&
                    <Div
                        sx={{
                            position: 'absolute',
                            height: '100%',
                            left: 0,
                            right: 0,
                            top: 0,
                            ...((Array.isArray(sidebarTheme.overlay.bgColor) && sidebarTheme.overlay.bgColor.length > 0)
                                    ? {
                                        backgroundImage: `linear-gradient(${sidebarTheme.overlay.bgColor[0]}, ${sidebarTheme.overlay.bgColor[1]})`,
                                        opacity: sidebarTheme.bgImage ? (sidebarTheme.overlay?.opacity ?? .85) : 1,
                                    }
                                    : {
                                        bgcolor: sidebarTheme.overlay.bgColor,
                                        opacity: sidebarTheme.overlay?.opacity ?? 1,
                                    }
                            ),

                        }}
                    />
                }

            </Drawer>
        </ThemeProvider>
    );
};

export default JumboLayoutSidebar;