import React from 'react';
import {CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis} from 'recharts';
import data from "./data";
import JumboDemoCard from "@jumbo/components/JumboDemoCard";
import code from '../demo-code/dashed-line-chart.txt';

const DashedLineChart = () => (
    <JumboDemoCard title={"Dashed Line Chart"} demoCode={code} wrapperSx={{pt: 0, backgroundColor: 'background.paper'}}>
        <ResponsiveContainer width="100%" height={200}>
            <LineChart data={data} margin={{top: 0, right: 0, left: 0, bottom: 0}}>
                <XAxis dataKey="name"/>
                <YAxis/>
                <CartesianGrid strokeDasharray="3 3"/>
                <Tooltip labelStyle={{color: 'black'}} itemStyle={{color: 'black'}} cursor={false}/>
                <Legend/>
                <Line type="monotone" dataKey="pv" stroke={"#1e88e5"} strokeDasharray="5 5"/>
                <Line type="monotone" dataKey="uv" stroke={"#e91e63"} strokeDasharray="3 4 5 2"/>
            </LineChart>
        </ResponsiveContainer>
    </JumboDemoCard>
);

export default DashedLineChart;
