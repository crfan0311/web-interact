import React from 'react';
import JumboDemoCard from "@jumbo/components/JumboDemoCard";
import Div from "@jumbo/shared/Div";
import {Rating} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import code from "../Ratings/demo-code/hover-rating.txt";

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

const getLabelText = (value) => {
    return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
}

const HoverRating = () => {
    const [value, setValue] = React.useState(2);
    const [hover, setHover] = React.useState(-1);
    return (
        <JumboDemoCard title={"Hover Rating"} demoCode={code} wrapperSx={{bgcolor: 'background.paper', pt: 0}}>
            <Div
                sx={{
                    width: 200,
                    display: 'flex',
                    alignItems: 'center',
                }}
            >
                <Rating
                    name="hover-feedback"
                    value={value}
                    precision={0.5}
                    getLabelText={getLabelText}
                    onChange={(event, newValue) => {
                        setValue(newValue);
                    }}
                    onChangeActive={(event, newHover) => {
                        setHover(newHover);
                    }}
                    emptyIcon={<StarIcon style={{opacity: 0.55}} fontSize="inherit"/>}
                />
                {value !== null && (
                    <Div sx={{ml: 2}}>{labels[hover !== -1 ? hover : value]}</Div>
                )}
            </Div>
        </JumboDemoCard>
    );
};

export default HoverRating;
