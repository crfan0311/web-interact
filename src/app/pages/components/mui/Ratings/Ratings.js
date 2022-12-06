import React from 'react';
import BasicRating from "./BasicRating";
import HalfRating from "./HalfRating";
import HoverRating from "./HoverRating";
import RatingSize from "./RatingSize";
import CustomizedRating from "./CustomizedRating";
import RadioGroupRating from "./RadioGroupRating";
import TextRating from "./TextRating";
import Masonry from "@mui/lab/Masonry";

const Ratings = () => {
    return (
        <Masonry
            spacing={3.75}
            columns={{xs: 1, lg: 2}}
            sx={{minWidth: '100%', width: 'auto'}}
        >
            <BasicRating/>
            <HalfRating/>
            <HoverRating/>
            <RatingSize/>
            <CustomizedRating/>
            <RadioGroupRating/>
            <TextRating/>
        </Masonry>
    );
};

export default Ratings;
