import React from 'react';
import Div from "@jumbo/shared/Div";
import {Typography} from "@mui/material";
import {ASSET_IMAGES} from "../../utils/constants/paths";

const NoDataPlaceholder = ({children}) => {
    if(children)
        return children;

    return (
        <Div sx={{textAlign: 'center', p: 3, m: 'auto'}}>
            <img alt={'Not Found'} src={`${ASSET_IMAGES}/pages/not_found.svg`} width="300" style={{verticalAlign: 'middle'}} />
            <Typography variant={"h3"} color={"text.secondary"} mt={2}>No data available</Typography>
        </Div>
    );
};

export default NoDataPlaceholder;
