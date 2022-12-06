import React from 'react';
import {Toolbar} from "@mui/material";
import AppBar from "@mui/material/AppBar";
import {SIDEBAR_STYLES, SIDEBAR_VARIANTS, SIDEBAR_VIEWS} from "@jumbo/utils/constants/layout";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import useJumboLayoutSidebar from "@jumbo/hooks/useJumboLayoutSidebar";
import useJumboLayoutHeader from "@jumbo/hooks/useJumboLayoutHeader";
import useJumboHeaderTheme from "@jumbo/hooks/useJumboHeaderTheme";

const JumboLayoutHeader = ({children, sx}) => {
    const {sidebarOptions} = useJumboLayoutSidebar();
    const {headerOptions} = useJumboLayoutHeader();
    const {headerTheme} = useJumboHeaderTheme();

    const extraSx = React.useMemo(() => {
        if (sx) {
            const {width, ml, transition, zIndex, ...restSx} = sx;
            return restSx;
        }
    }, [sx]);

    const headerMarginLeft = React.useMemo(() => {
        if (!headerOptions.fixed) {
            return 0;
        }

        if (sidebarOptions?.variant === SIDEBAR_VARIANTS.TEMPORARY) {
            return 0;
        } else {
            if (sidebarOptions?.view === SIDEBAR_VIEWS.MINI) {
                return sidebarOptions?.minWidth;
            } else {
                if (sidebarOptions?.style === SIDEBAR_STYLES.FULL_HEIGHT) {
                    return sidebarOptions?.open ? sidebarOptions?.width : 0;
                }
                return 0;
            }
        }
    }, [
        sidebarOptions?.open,
        sidebarOptions?.width,
        sidebarOptions?.minWidth,
        sidebarOptions?.view,
        sidebarOptions?.style,
        sidebarOptions?.variant,
        headerOptions?.fixed,
    ]);

    if (headerOptions?.hide)
        return null;

    return (
        <ThemeProvider theme={headerTheme}>
            <AppBar
                elevation={0}
                position={headerOptions?.fixed ? "fixed" : "relative"}
                sx={{
                    width: {sm: `calc(100% - ${headerMarginLeft}px)`},
                    ml: {sm: `${headerMarginLeft}px`},
                    transition: theme => theme.transitions.create(['width']),
                    zIndex: (theme) =>
                        (sidebarOptions?.variant === SIDEBAR_VARIANTS.TEMPORARY || sidebarOptions?.style === SIDEBAR_STYLES.FULL_HEIGHT)
                            ? theme.zIndex.drawer - 1 : theme.zIndex.drawer + 1,
                    ...extraSx,
                }}
            >
                <Toolbar sx={{height: '100%', px: {lg: 6, xs: 4}}}>
                    {children}
                </Toolbar>
            </AppBar>
        </ThemeProvider>
    );
};

export default JumboLayoutHeader;