import React from 'react';
import {Navigate, Outlet} from "react-router-dom";

const Admin = ({fallbackPath}) => {
    const isAdmin = false;
    return isAdmin ? <Outlet /> : <Navigate to={fallbackPath} />;
};

export default Admin;