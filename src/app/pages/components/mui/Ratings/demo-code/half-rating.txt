import React from 'react';
import JumboDemoCard from "@jumbo/components/JumboDemoCard";
import {Rating, Stack} from "@mui/material";
import code from "../Ratings/demo-code/half-rating.txt";

const HalfRating = () => {
    return (
        <JumboDemoCard title={"Half Rating"} demoCode={code} wrapperSx={{bgcolor: 'background.paper', pt: 0}}>
            <Stack spacing={1}>
                <Rating name="half-rating" defaultValue={2.5} precision={0.5}/>
                <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly/>
            </Stack>
        </JumboDemoCard>
    );
};

export default HalfRating;
