import React from 'react';
import AuthorItem from "./AuthorItem";
import {List} from "@mui/material";
import {popularAuthors} from "./data";

const AuthorsList = () => {
    return (
        <List disablePadding>
            {
                popularAuthors.map((item, index) => (
                    <AuthorItem author={item} key={index}/>
                ))
            }
        </List>
    );
};

export default AuthorsList;
