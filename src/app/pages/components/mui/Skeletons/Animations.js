import React from 'react';
import JumboDemoCard from "@jumbo/components/JumboDemoCard";
import Div from "@jumbo/shared/Div";
import {Skeleton} from "@mui/material";
import code from "../Skeletons/demo-code/animation.txt";

const Animations = () => {
    return (
        <JumboDemoCard title={"Animations"} demoCode={code} wrapperSx={{backgroundColor: 'background.paper', pt: 0}}>
            <Div sx={{width: "300px", maxWidth: '100%'}}>
                <Skeleton/>
                <Skeleton animation={"wave"}/>
                <Skeleton animation={false}/>
            </Div>
        </JumboDemoCard>
    );
};

export default Animations;
