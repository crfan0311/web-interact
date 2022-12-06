import React from 'react';
import JumboDemoCard from "@jumbo/components/JumboDemoCard";
import Div from "@jumbo/shared/Div";
import {Skeleton} from "@mui/material";
import code from "../Skeletons/demo-code/skeleton-color.txt";

const SkeletonColor = () => {
    return (
        <JumboDemoCard title={"Color"} demoCode={code} wrapperSx={{backgroundColor: 'background.paper', pt: 0}}>
            <Div
                sx={{
                    bgcolor: '#121212',
                    p: 8,
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                }}
            >
                <Skeleton
                    sx={{bgcolor: 'grey.900'}}
                    variant="rectangular"
                    width={210}
                    height={78}
                />
            </Div>
        </JumboDemoCard>
    );
};

export default SkeletonColor;
