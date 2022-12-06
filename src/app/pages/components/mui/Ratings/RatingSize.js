import React from 'react';
import JumboDemoCard from "@jumbo/components/JumboDemoCard";
import {Rating, Stack} from "@mui/material";
import code from "../Ratings/demo-code/rating-size.txt";

const RatingSize = () => {
    return (
        <JumboDemoCard title={"Size"} demoCode={code} wrapperSx={{bgcolor: 'background.paper', pt: 0}}>
            <Stack spacing={1}>
                <Rating name="size-small" defaultValue={2} size="small"/>
                <Rating name="size-medium" defaultValue={2}/>
                <Rating name="size-large" defaultValue={2} size="large"/>
            </Stack>
        </JumboDemoCard>
    );
};

export default RatingSize;
