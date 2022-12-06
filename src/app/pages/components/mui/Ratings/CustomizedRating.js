import React from 'react';
import JumboDemoCard from "@jumbo/components/JumboDemoCard";
import {styled} from "@mui/material/styles";
import {Rating} from "@mui/material";
import Div from "@jumbo/shared/Div";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import code from "../Ratings/demo-code/customized-rating.txt";

const StyledRating = styled(Rating)({
    '& .MuiRating-iconFilled': {
        color: '#ff6d75',
    },
    '& .MuiRating-iconHover': {
        color: '#ff3d47',
    },
});

const CustomizedRating = () => {
    return (
        <JumboDemoCard title={"Customized Rating"} demoCode={code} wrapperSx={{bgcolor: 'background.paper', pt: 0}}>
            <Div sx={{'& > legend': {mt: 2}}}
            >
                <Typography component="legend">Custom icon and color</Typography>
                <StyledRating
                    name="customized-color"
                    defaultValue={2}
                    getLabelText={(value) => `${value} Heart${value !== 1 ? 's' : ''}`}
                    precision={0.5}
                    icon={<FavoriteIcon fontSize="inherit"/>}
                    emptyIcon={<FavoriteBorderIcon fontSize="inherit"/>}
                />
                <Typography component="legend">10 stars</Typography>
                <Rating name="customized-10" defaultValue={2} max={10}/>
            </Div>
        </JumboDemoCard>
    );
};

export default CustomizedRating;
