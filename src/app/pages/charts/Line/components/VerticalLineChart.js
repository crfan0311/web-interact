import React from 'react';
import {CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis} from 'recharts';
import data from "./data";
import JumboDemoCard from "@jumbo/components/JumboDemoCard";
import code from '../demo-code/vertical-line-chart.txt';

const VerticalLineChart = () => {
    return (
        <JumboDemoCard title={"Vertical Line Chart"} demoCode={code} wrapperSx={{pt: 0, backgroundColor: 'background.paper'}}>
            <ResponsiveContainer width="100%" height={200}>
                <LineChart layout="vertical" data={data} margin={{top: 0, right: 0, left: 0, bottom: 0}}>
                    <XAxis type="number"/>
                    <YAxis dataKey="name" type="category"/>
                    <CartesianGrid strokeDasharray="3 3"/>
                    <Tooltip labelStyle={{color: 'black'}} itemStyle={{color: 'black'}} cursor={false}/>
                    <Legend/>
                    <Line dataKey="pv" stroke={"#1e88e5"}/>
                    <Line dataKey="uv" stroke={"#e91e63"}/>
                </LineChart>
            </ResponsiveContainer>
        </JumboDemoCard>
    );
};

export default VerticalLineChart;
