import * as React from 'react';
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';
import JumboDemoCard from "@jumbo/components/JumboDemoCard";
import code from "../Progress/demo-code/circular-color.txt";

const CircularColor = () => {
    return (
        <JumboDemoCard
            title={"Circular Color"}
            demoCode={code}
            wrapperSx={{backgroundColor: 'background.paper', pt: 0}}
        >
            <Stack sx={{color: 'grey.500'}} spacing={2} direction="row">
                <CircularProgress color="secondary"/>
                <CircularProgress color="success"/>
                <CircularProgress color="inherit"/>
            </Stack>
        </JumboDemoCard>
    );
};
export default CircularColor;
