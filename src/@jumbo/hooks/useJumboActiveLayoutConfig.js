import React from "react";
import useJumboApp from "@jumbo/hooks/useJumboApp";
import {LAYOUTS} from "../../app/layouts/layouts";

const useJumboActiveLayoutConfig = () => {
    const {activeLayout} = useJumboApp();

    let layoutConfig = {};
    LAYOUTS.forEach(layout => {
        if(layout.name === activeLayout) {
            layoutConfig = {...layout};
        }
    });

    return layoutConfig;
};

export default useJumboActiveLayoutConfig;