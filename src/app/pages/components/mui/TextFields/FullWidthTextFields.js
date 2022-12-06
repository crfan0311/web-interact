import React from 'react';
import JumboDemoCard from "@jumbo/components/JumboDemoCard";
import Div from "@jumbo/shared/Div";
import {TextField} from "@mui/material";
import code from "../TextFields/demo-code/full-width-text-fields.txt";

const FullWidthTextFields = () => {
    return (
        <JumboDemoCard title={"Full Width Text Field"} demoCode={code}
                       wrapperSx={{backgroundColor: 'background.paper', pt: 0}}>
            <Div
                sx={{
                    width: 500,
                    maxWidth: '100%',
                }}
            >
                <TextField fullWidth label="fullWidth" id="fullWidth"/>
            </Div>
        </JumboDemoCard>
    );
};

export default FullWidthTextFields;
