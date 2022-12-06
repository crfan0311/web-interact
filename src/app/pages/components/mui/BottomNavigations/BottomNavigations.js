import React from 'react';
import {Grid} from "@mui/material";
import SimpleBottomNavigation from "./SimpleBottomNavigation";
import BottomNavigationWithActiveLabel from "./BottomNavigationWithActiveLabel";
import BottomNavigationWithNoLabel from "./BottomNavigationWithNoLabel";

const BottomNavigations = () => {
    return (
        <Grid container spacing={3.75}>
            <Grid item xs={12} lg={6}>
                <SimpleBottomNavigation/>
            </Grid>
            <Grid item xs={12} lg={6}>
                <BottomNavigationWithNoLabel/>
            </Grid>
            <Grid item xs={12} lg={6}>
                <BottomNavigationWithActiveLabel/>
            </Grid>
        </Grid>
    );
};

export default BottomNavigations;
