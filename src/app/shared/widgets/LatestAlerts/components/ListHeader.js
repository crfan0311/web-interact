import React from 'react';
import {Typography} from "@mui/material";
import Div from "@jumbo/shared/Div";

const ListHeader = ({title, count, action}) => {
    return (
        <Div className={"d-flex align-items-center justify-content-between px-4 pt-4"}>
            <Typography variant={"h4"} color={"text.secondary"}>{count} {title}</Typography>
            {action}
        </Div>
    );
};

export default ListHeader;
