import {LAYOUTS} from "@jumbo/constants";

const layoutConfig = {
    name: LAYOUTS.VERTICAL_DEFAULT
};

export const layoutActionsConfig = {
    switchLayout: () => {
        //console.log("this is default switchLayout function coming from config/layoutConfig.js");
    },
    setLayoutOptions: () => {
        //console.log("this is default setLayoutOptions function coming from config/layoutConfig.js");
    }
};

export default layoutConfig;