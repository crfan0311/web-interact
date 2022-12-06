import React from 'react';
import JumboDemoCard from "@jumbo/components/JumboDemoCard";
import Div from "@jumbo/shared/Div";
import Typography from "@mui/material/Typography";
import {Rating} from "@mui/material";
import code from "../Ratings/demo-code/basic-rating.txt";

const BasicRating = () => {
    const [value, setValue] = React.useState(2);
    return (
        <JumboDemoCard title={"Basic Rating"} demoCode={code} wrapperSx={{bgcolor: 'background.paper', pt: 0}}>
            <Div sx={{'& > legend': {mt: 2}}}
            >
                <Typography component="legend">Controlled</Typography>
                <Rating
                    name="simple-controlled"
                    value={value}
                    onChange={(event, newValue) => {
                        setValue(newValue);
                    }}
                />
                <Typography component="legend">Read only</Typography>
                <Rating name="read-only" value={value} readOnly/>
                <Typography component="legend">Disabled</Typography>
                <Rating name="disabled" value={value} disabled/>
                <Typography component="legend">No rating given</Typography>
                <Rating name="no-value" value={null}/>
            </Div>
        </JumboDemoCard>
    );
};

export default BasicRating;
