import React from 'react';
import Div from "@jumbo/shared/Div";

const JumboListWrapper = ({component, children, sx}) => {

    const WrapperComponent = component ? component : Div;
    return (
        <WrapperComponent sx={{position: "relative", ...sx}}>
            {children}
        </WrapperComponent>
    );
};

export default JumboListWrapper;