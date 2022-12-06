import React from 'react';
import {ListItem, ListItemAvatar, ListItemText, Typography} from "@mui/material";

const PostItem = ({post}) => {
    return (
        <ListItem sx={{p: theme => theme.spacing(1, 3)}}>
            <ListItemAvatar sx={{mr: 2, width: 120, overflow: "hidden", borderRadius: 2}}>
                <img
                    width={"120"}
                    height={"84"}
                    alt={""}
                    style={{verticalAlign: 'middle'}}
                    src={post.image}
                />
            </ListItemAvatar>
            <ListItemText
                primary={<Typography variant="h5" mb={.25}>{post.title}</Typography>}
                secondary={
                    <Typography component={"div"}>
                        <Typography color={"text.secondary"} variant='body1' fontSize={12}
                                    mb={1}>{post.date}</Typography>
                        <Typography noWrap variant='body1'>{post.description}</Typography>
                    </Typography>
                }
            />
        </ListItem>
    );
};
/* Todo post prop define */
export default PostItem;
