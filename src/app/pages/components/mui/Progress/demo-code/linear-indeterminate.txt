import * as React from 'react';
import LinearProgress from '@mui/material/LinearProgress';
import Div from "@jumbo/shared/Div";
import JumboDemoCard from "@jumbo/components/JumboDemoCard";
import code from "../Progress/demo-code/linear-indeterminate.txt";

const LinearIndeterminate = () => {
    return (
        <JumboDemoCard
            title={"Linear Indeterminate"}
            demoCode={code}
            wrapperSx={{backgroundColor: 'background.paper', pt: 0}}
        >
            <Div sx={{width: '100%'}}>
                <LinearProgress/>
            </Div>
        </JumboDemoCard>
    );
};
export default LinearIndeterminate;
