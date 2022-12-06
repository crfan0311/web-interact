import React from 'react';
import {PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart, ResponsiveContainer} from 'recharts';
import data from './data';
import JumboDemoCard from "@jumbo/components/JumboDemoCard";
import code from '../demo-code/simple-radar-chart.txt';

const SimpleRadarChart = () => (
    <JumboDemoCard title={"Simple Radar Chart"} demoCode={code} wrapperSx={{pt: 0, backgroundColor: 'background.paper'}}>
        <ResponsiveContainer width="100%" height={400}>
            <RadarChart outerRadius={150} data={data}>
                <Radar name="Mike" dataKey="A" stroke={"#1e88e5"} fill={"#1e88e5"} fillOpacity={0.6}/>
                <PolarGrid/>
                <PolarAngleAxis dataKey="subject"/>
                <PolarRadiusAxis/>
            </RadarChart>
        </ResponsiveContainer>
    </JumboDemoCard>
);

export default SimpleRadarChart;
