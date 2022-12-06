import React from 'react';
import {Navigate, Outlet} from "react-router-dom";

const Attach = ({fallbackPath}) => {
    const isAttached = false;

    return isAttached ? <Outlet /> : <Navigate to={fallbackPath} />;
};

export default Attach;