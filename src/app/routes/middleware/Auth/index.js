import React from 'react';
import {Navigate, Outlet} from "react-router-dom";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import {useAuth} from "@jumbo/providers/AuthProvider";

const Auth = ({fallbackPath}) => {
    const {authUser} = useAuth();
    if (authUser?.isLoading) {
        return (
            <Backdrop
                sx={{color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1}}
                open={authUser.isLoading}
            >
                <CircularProgress color="inherit"/>
            </Backdrop>
        );
    }

    if (authUser?.data) {
        return <Outlet/>;
    }

    return <Navigate to={fallbackPath}/>;
};

export default Auth;