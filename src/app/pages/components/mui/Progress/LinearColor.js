import * as React from 'react';
import Stack from '@mui/material/Stack';
import LinearProgress from '@mui/material/LinearProgress';
import JumboDemoCard from "@jumbo/components/JumboDemoCard";
import code from "../Progress/demo-code/linear-color.txt";

const LinearColor = () => {
    return (
        <JumboDemoCard
            title={"Linear Color"}
            demoCode={code}
            wrapperSx={{backgroundColor: 'background.paper', pt: 0}}
        >
            <Stack sx={{width: '100%', color: 'grey.500'}} spacing={2}>
                <LinearProgress color="secondary"/>
                <LinearProgress color="success"/>
                <LinearProgress color="inherit"/>
            </Stack>
        </JumboDemoCard>
    );
};
export default LinearColor;
