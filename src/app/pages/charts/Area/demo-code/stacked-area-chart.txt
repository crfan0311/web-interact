import React from 'react';
import {Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis} from 'recharts';
import data from "./data";
import JumboDemoCard from "@jumbo/components/JumboDemoCard";
import code from '../demo-code/stacked-area-chart.txt';

const StackedAreaChart = () => (
    <JumboDemoCard title={"Stacked Area Chart"} demoCode={code} wrapperSx={{pt: 0, backgroundColor: 'background.paper'}}>
        <ResponsiveContainer width="100%" height={200}>
            <AreaChart data={data} margin={{top: 0, right: 0, left: 0, bottom: 0}}>
                <XAxis dataKey="name"/>
                <YAxis/>
                <CartesianGrid strokeDasharray="3 3"/>
                <Tooltip labelStyle={{color: 'black'}} itemStyle={{color: 'black'}} cursor={false}/>
                <defs>
                    <linearGradient id="color1" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#E59D1E" stopOpacity={1}/>
                        <stop offset="95%" stopColor="#E59D1E" stopOpacity={0.2}/>
                    </linearGradient>
                </defs>
                <defs>
                    <linearGradient id="color2" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#1ABBDE" stopOpacity={1}/>
                        <stop offset="95%" stopColor="#09BCA7" stopOpacity={1}/>
                    </linearGradient>
                </defs>
                <defs>
                    <linearGradient id="color3" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#6200EE" stopOpacity={1}/>
                        <stop offset="95%" stopColor="#B819D2" stopOpacity={1}/>
                    </linearGradient>
                </defs>
                <Area type="monotone" dataKey="uv" stackId="1" stroke="" fill={"#7e57c2"} fillOpacity={1}/>
                <Area type="monotone" dataKey="pv" stackId="1" stroke="" fill={"#e91e63"} fillOpacity={1}/>
                <Area type="monotone" dataKey="amt" stackId="1" stroke="" fill={"#1e88e5"} fillOpacity={1}/>
            </AreaChart>
        </ResponsiveContainer>
    </JumboDemoCard>
);

export default StackedAreaChart;
