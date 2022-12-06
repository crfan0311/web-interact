import React from 'react';
import rtlPlugin from 'stylis-plugin-rtl';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { prefixer } from 'stylis';
import useJumboTheme from "@jumbo/hooks/useJumboTheme";

// Create rtl cache
const cacheRtl = createCache({
    key: 'muirtl',
    stylisPlugins: [prefixer, rtlPlugin],
});

const JumboRTL = (props) => {
    const {theme} = useJumboTheme();

    if(theme.direction === "rtl")
        return (
            <CacheProvider value={cacheRtl}>{props.children}</CacheProvider>
        );

    return props.children;
};

export default JumboRTL;