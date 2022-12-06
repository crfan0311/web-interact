import React from 'react';
import {Legend, RadialBar, RadialBarChart, ResponsiveContainer} from 'recharts';
import data from './data';
import JumboDemoCard from "@jumbo/components/JumboDemoCard";
import code from '../demo-code/simple-radial-bar-chart.txt';

const style = {
    top: 20,
    left: '20%',
    lineHeight: '24px',
};

const SimpleRadialBarChart = () => (
    <JumboDemoCard title={"Simple Radial Bar Chart"} demoCode={code} wrapperSx={{pt: 0, backgroundColor: 'background.paper'}}>
        <ResponsiveContainer width="100%" height={300}>
            <RadialBarChart innerRadius={20} outerRadius={140} barSize={10} data={data}>
                <RadialBar minAngle={15} label background clockWise={true} dataKey="uv"/>
                <Legend iconSize={10} width={120} height={140} layout="vertical" verticalAlign="middle"
                        wrapperStyle={style}/>
            </RadialBarChart>
        </ResponsiveContainer>
    </JumboDemoCard>
);

export default SimpleRadialBarChart;
