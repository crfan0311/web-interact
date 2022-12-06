import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Div from "@jumbo/shared/Div";
import JumboDemoCard from "@jumbo/components/JumboDemoCard";
import code from "../Progress/demo-code/circular-indeterminate.txt";

const CircularIndeterminate = () => {
    return (
        <JumboDemoCard
            title={"Circular Indeterminate"}
            demoCode={code}
            wrapperSx={{backgroundColor: 'background.paper', pt: 0}}
        >
            <Div sx={{display: 'flex'}}>
                <CircularProgress/>
            </Div>
        </JumboDemoCard>
    );
}
export default CircularIndeterminate;
