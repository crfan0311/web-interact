import React from 'react';
import {CardMedia, ListItem, ListItemText, Typography} from "@mui/material";
import Span from "@jumbo/shared/Span";

const Product = ({product}) => {
    return (
        <ListItem alignItems="flex-start" sx={{width: {xs: '100%', md: '50%'}, p: theme => theme.spacing(2, 3)}}>
            <CardMedia
                component="img"
                image={product.thumb}
                alt={product.name}
                sx={{
                    width: 132,
                    height: 132,
                    borderRadius: 2,
                    mr: 2
                }}
            />
            <ListItemText
                primary={<Typography variant={"h4"}>{product.name}</Typography>}
                secondary={
                    <Typography component={"div"}>
                        <Typography variant={"body1"} mb={2}>{product.description}</Typography>
                        <Typography variant={"body1"}>
                            <Span sx={{mr: 1, color: "text.secondary"}}>
                                <del>${product.price}</del>
                            </Span>
                            ${product.salePrice}
                        </Typography>
                    </Typography>
                }
            >
            </ListItemText>
        </ListItem>
    );
};

export default Product;
