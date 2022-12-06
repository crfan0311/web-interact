import React from 'react';
import JumboDemoCard from "@jumbo/components/JumboDemoCard";
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';
import SentimentSatisfiedIcon from '@mui/icons-material/SentimentSatisfied';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAltOutlined';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';
import {Rating} from "@mui/material";
import Span from "@jumbo/shared/Span";
import code from "../Ratings/demo-code/radio-group-rating.txt";

const customIcons = {
    1: {
        icon: <SentimentVeryDissatisfiedIcon/>,
        label: 'Very Dissatisfied',
    },
    2: {
        icon: <SentimentDissatisfiedIcon/>,
        label: 'Dissatisfied',
    },
    3: {
        icon: <SentimentSatisfiedIcon/>,
        label: 'Neutral',
    },
    4: {
        icon: <SentimentSatisfiedAltIcon/>,
        label: 'Satisfied',
    },
    5: {
        icon: <SentimentVerySatisfiedIcon/>,
        label: 'Very Satisfied',
    },
};

const IconContainer = (props) => {
    const {value, ...other} = props;
    return <Span {...other}>{customIcons[value].icon}</Span>;
}

const RadioGroupRating = () => {
    return (
        <JumboDemoCard title={"Radio Group Rating"} demoCode={code} wrapperSx={{bgcolor: 'background.paper', pt: 0}}>
            <Rating
                name="highlight-selected-only"
                defaultValue={2}
                IconContainerComponent={IconContainer}
                highlightSelectedOnly
            />
        </JumboDemoCard>
    );
};

export default RadioGroupRating;
