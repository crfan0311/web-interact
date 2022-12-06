import React from 'react';
import JumboDemoCard from "@jumbo/components/JumboDemoCard";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import code from "./demo-code/text-button.txt";

const TextButton = () => {
    return (
        <JumboDemoCard
            title={"Text button"}
            demoCode={code}
            wrapperSx={{backgroundColor: 'background.paper', pt: 0}}
        >
            <Stack direction="row" spacing={2}>
                <Button>Primary</Button>
                <Button disabled>Disabled</Button>
                <Button href="#text-buttons">Link</Button>
            </Stack>
        </JumboDemoCard>
    );
};

export default TextButton;
