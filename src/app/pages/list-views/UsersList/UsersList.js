import React from 'react';
import {users} from "./data";
import UserItem from "./UserItem";
import {Typography} from "@mui/material";

const UsersList = () => {
    return (
        <React.Fragment>
            <Typography variant={'h2'} mb={3}>Users</Typography>
            {
                users.map((user, index) => (
                    <UserItem user={user} key={index}/>
                ))
            }
        </React.Fragment>
    );
};

export default UsersList;
