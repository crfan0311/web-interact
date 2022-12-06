import * as React from 'react';
import Paper from '@mui/material/Paper';
import Div from "@jumbo/shared/Div";
import JumboDemoCard from "@jumbo/components/JumboDemoCard";
import code from "../Papers/demo-code/simple-paper.txt";

const SimplePaper = () => {
    return (
        <JumboDemoCard title={"Simple Paper"} demoCode={code}>
            <Div
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    '& > :not(style)': {
                        m: 1,
                        width: 128,
                        height: 128,
                    },
                }}
            >
                <Paper elevation={0} />
                <Paper />
                <Paper elevation={3} />
            </Div>
        </JumboDemoCard>
    );
};
export default SimplePaper;
