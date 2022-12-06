import * as React from 'react';
import Paper from '@mui/material/Paper';
import Div from "@jumbo/shared/Div";
import JumboDemoCard from "@jumbo/components/JumboDemoCard";
import code from "../Papers/demo-code/variants.txt";

const Variants = () => {
    return (
        <JumboDemoCard
            title={"Variants"}
            demoCode={code}
            wrapperSx={{backgroundColor: 'background.paper', pt: 0}}
        >
            <Div
                sx={{
                    display: 'flex',
                    '& > :not(style)': {
                        m: 1,
                        width: 128,
                        height: 128,
                    },
                }}
            >
                <Paper variant="outlined"/>
                <Paper variant="outlined" square/>
            </Div>
        </JumboDemoCard>
    );
};
export default Variants;
