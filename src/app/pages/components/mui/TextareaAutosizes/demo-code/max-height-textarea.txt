import React from 'react';
import JumboDemoCard from "@jumbo/components/JumboDemoCard";
import {TextareaAutosize} from "@mui/material";
import code from "../TextareaAutosizes/demo-code/max-height-textarea.txt";

const MaxHeightTextarea = () => {
    return (
        <JumboDemoCard title={"Maximum height"} demoCode={code}
                       wrapperSx={{backgroundColor: 'background.paper', pt: 0}}>
            <TextareaAutosize
                maxRows={4}
                aria-label="maximum height"
                placeholder="Maximum 4 rows"
                defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed do eiusmod tempor incididunt
                                ut labore et dolore magna aliqua."
                style={{width: 200}}
            />
        </JumboDemoCard>
    );
};

export default MaxHeightTextarea;
