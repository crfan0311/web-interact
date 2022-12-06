import React from 'react';
import Grid from "@mui/material/Grid";
import UserProfileCard from "./UserProfileCard";
import {users} from "./data";
import {Typography} from "@mui/material";

const UsersList = () => {
    return (
        users.length > 0 &&
        <React.Fragment>
            <Typography variant={'h2'} mb={3}>Users</Typography>
            <Grid container spacing={3.75}>
                {
                    users.map((user, index) => (
                        <Grid item key={index} xs={12} sm={6} lg={4}>
                            <UserProfileCard user={user}/>
                        </Grid>
                    ))
                }
            </Grid>
        </React.Fragment>
    );
};

export default UsersList;
