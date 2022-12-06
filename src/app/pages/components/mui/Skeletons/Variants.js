import React from 'react';
import JumboDemoCard from "@jumbo/components/JumboDemoCard";
import Stack from "@mui/material/Stack";
import Skeleton from "@mui/material/Skeleton";
import code from "../Skeletons/demo-code/variants.txt";

const Variants = () => {
    return (
        <JumboDemoCard title={"Variants"} demoCode={code} wrapperSx={{backgroundColor: 'background.paper', pt: 0}}>
            <Stack spacing={1}>
                <Skeleton variant="text" width={210}/>
                <Skeleton variant="circular" width={40} height={40}/>
                <Skeleton variant="rectangular" width={210} height={118}/>
            </Stack>
        </JumboDemoCard>
    );
};

export default Variants;
