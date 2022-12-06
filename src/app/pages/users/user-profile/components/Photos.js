import React from 'react';
import {CardActions, CardContent} from "@mui/material";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Link from "@mui/material/Link";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import JumboCardQuick from "@jumbo/components/JumboCardQuick";
import {getAssetPath} from "../../../../utils/appHelpers";

const itemData = [
    {
        img: getAssetPath('https://images.unsplash.com/photo-1551963831-b3b1ca40c98e', "180x180"),
    },
    {
        img: getAssetPath('https://images.unsplash.com/photo-1551782450-a2132b4ba21d', "180x180"),
    },
    {
        img: getAssetPath('https://images.unsplash.com/photo-1522770179533-24471fcdba45', "180x180"),
    },
    {
        img: getAssetPath('https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c', "180x180"),
    },
    {
        img: getAssetPath('https://images.unsplash.com/photo-1533827432537-70133748f5c8', "180x180"),
    },
    {
        img: getAssetPath('https://images.unsplash.com/photo-1558642452-9d2a7deb7f62', "180x180"),
    },
];

const Photos = () => {
    return (
        <JumboCardQuick title={"Photos"} noWrapper>
            <CardContent sx={{py: 0}}>
                <ImageList sx={{width: '100%', m: 0, borderRadius: 2.5}} cols={3} rowHeight={"auto"}>
                    {itemData.map((item) => (
                        <ImageListItem key={item.img}>
                            <img
                                src={`${item.img}?w=120&h=120&fit=crop&auto=format`}
                                srcSet={`${item.img}?w=120&h=120&fit=crop&auto=format&dpr=2 2x`}
                                alt={item.title}
                                loading="lazy"
                            />
                        </ImageListItem>
                    ))}
                </ImageList>
            </CardContent>
            <CardActions sx={{py: 2.5}}>
                <Link href="#" underline="none">Go to gallery <ArrowForwardIcon
                    sx={{verticalAlign: 'middle'}}/></Link>
            </CardActions>
        </JumboCardQuick>
    );
};

export default Photos;
