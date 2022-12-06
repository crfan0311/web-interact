import React from 'react';
import JumboDemoCard from "@jumbo/components/JumboDemoCard";
import {TextareaAutosize} from "@mui/material";
import code from "../TextareaAutosizes/demo-code/empty-textarea.txt";
import Div from "@jumbo/shared/Div";

const EmptyTextarea = () => {
    return (
        <JumboDemoCard
            title={"Empty Textarea"}
            demoCode={code}
            wrapperSx={{
                backgroundColor: 'background.paper',
                pt: 0
            }}
        >
            <Div sx={{py: {lg: 1.75}}}>
                <TextareaAutosize
                    aria-label="empty textarea"
                    placeholder="Empty"
                    style={{width: 200}}
                />
            </Div>
        </JumboDemoCard>
    );
};

export default EmptyTextarea;
