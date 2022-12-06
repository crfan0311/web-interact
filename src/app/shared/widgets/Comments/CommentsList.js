import React from 'react';
import CommentItem from "./CommentItem";
import {commentsList} from "./data";
import List from "@mui/material/List";

const CommentsList = () => {
    return (
        <List disablePadding>
            {
                commentsList.map((item, index) => (
                    <CommentItem item={item} key={index}/>
                ))
            }
        </List>
    );
};

export default CommentsList;
