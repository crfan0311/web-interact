import React from 'react';
import {CartesianGrid, ResponsiveContainer, Scatter, ScatterChart, Tooltip, XAxis, YAxis} from 'recharts';
import data from './data';
import JumboDemoCard from "@jumbo/components/JumboDemoCard";
import code from '../demo-code/simple-scatter-chart.txt';

const SimpleScatterChart = () => (
    <JumboDemoCard title={"Simple Scatter Chart"} demoCode={code} wrapperSx={{pt: 0, backgroundColor: 'background.paper'}}>
        <ResponsiveContainer width="100%" height={400}>
            <ScatterChart margin={{top: 0, right: 0, left: 0, bottom: 0}}>
                <XAxis dataKey={'x'} name="stature" unit="cm"/>
                <YAxis dataKey={'y'} name="weight" unit="kg"/>
                <Scatter name="A school" data={data} fill={"#1e88e5"}/>
                <CartesianGrid/>
                <Tooltip cursor={{strokeDasharray: '3 3'}}/>
            </ScatterChart>
        </ResponsiveContainer>
    </JumboDemoCard>
);

export default SimpleScatterChart;
