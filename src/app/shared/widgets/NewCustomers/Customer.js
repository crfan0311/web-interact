import React from 'react';
import {customers} from "./data";
import {Avatar, AvatarGroup} from "@mui/material";

const Customer = () => {
    return (
        <AvatarGroup
            max={4}
            sx={{
                '& .MuiAvatar-root': {
                    width: 48,
                    height: 48,
                    fontSize: 16,
                    background: theme => theme.palette.grey[600]
                }
            }}
        >
            {
                customers.map((customer, index) => (
                    <Avatar alt={customer.title} src={customer.profilePic} key={index}/>
                ))
            }
        </AvatarGroup>
    );
};

export default Customer;
