import React from 'react';
import {ResponsiveContainer, Treemap} from 'recharts';
import data from './data';
import JumboDemoCard from "@jumbo/components/JumboDemoCard";
import code from '../demo-code/simple-treemap.txt';

const SimpleTreemap = () => (
    <JumboDemoCard title={"Simple Treemap"} demoCode={code} wrapperSx={{pt: 0, backgroundColor: 'background.paper'}}>
        <ResponsiveContainer width="100%" height={200}>
            <Treemap data={data} dataKey="size" ratio={4 / 3} stroke={"#fff"} fill={"#1e88e5"}/>
        </ResponsiveContainer>
    </JumboDemoCard>
);

export default SimpleTreemap;
