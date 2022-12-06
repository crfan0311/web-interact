import React from 'react';
import {Avatar, AvatarGroup} from "@mui/material";

const ProductAvatars = ({items}) => {
    return (
        <AvatarGroup max={4}>
            {
                items.map((item,index) => (
                    <Avatar key={index} alt={item.name} src={item.logo}/>
                ))
            }
        </AvatarGroup>
    );
};

export default ProductAvatars;
