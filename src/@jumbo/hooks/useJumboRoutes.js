import {useRoutes} from "react-router-dom";
import {buildRoutes} from "@jumbo/utils";
import useJumboApp from "@jumbo/hooks/useJumboApp";

let generatedRoutes = [];

const useJumboRoutes = (routes) => {
    const {rebuildRoutes} = useJumboApp();

    if(rebuildRoutes) {
        generatedRoutes = buildRoutes([...routes]);
    }
    return useRoutes(generatedRoutes);
};

export default useJumboRoutes;