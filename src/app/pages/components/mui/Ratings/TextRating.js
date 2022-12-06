import React from 'react';
import JumboDemoCard from "@jumbo/components/JumboDemoCard";
import Div from "@jumbo/shared/Div";
import {Rating} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import code from "../Ratings/demo-code/text-rating.txt";

const labels = {
    0.5: 'Useless',
    1: 'Useless+',
    1.5: 'Poor',
    2: 'Poor+',
    2.5: 'Ok',
    3: 'Ok+',
    3.5: 'Good',
    4: 'Good+',
    4.5: 'Excellent',
    5: 'Excellent+',
};
const TextRating = () => {
    const value = 3.5;
    return (
        <JumboDemoCard title={"Text Rating"} demoCode={code} wrapperSx={{bgcolor: 'background.paper', pt: 0}}>
            <Div
                sx={{
                    width: 200,
                    display: 'flex',
                    alignItems: 'center',
                }}
            >
                <Rating
                    name="text-feedback"
                    value={value}
                    readOnly
                    precision={0.5}
                    emptyIcon={<StarIcon style={{opacity: 0.55}} fontSize="inherit"/>}
                />
                <Div sx={{ml: 2}}>{labels[value]}</Div>
            </Div>
        </JumboDemoCard>
    );
};

export default TextRating;
