import React from 'react';
import JumboDemoCard from "@jumbo/components/JumboDemoCard";
import {TextareaAutosize} from "@mui/material";
import code from "../TextareaAutosizes/demo-code/min-height-textarea.txt";

const MinHeightTextarea = () => {
    return (
        <JumboDemoCard title={"Minimum height"} demoCode={code}
                       wrapperSx={{backgroundColor: 'background.paper', pt: 0}}>
            <TextareaAutosize
                aria-label="minimum height"
                minRows={3}
                placeholder="Minimum 3 rows"
                style={{width: 200}}
            />
        </JumboDemoCard>
    );
};

export default MinHeightTextarea;
