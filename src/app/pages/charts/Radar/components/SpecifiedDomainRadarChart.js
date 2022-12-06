import React from 'react';
import {Legend, PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart, ResponsiveContainer} from 'recharts';
import data from './data';
import JumboDemoCard from "@jumbo/components/JumboDemoCard";
import code from '../demo-code/specified-domain-radar.txt';

const SpecifiedDomainRadarChart = () => (
    <JumboDemoCard title={"Specific Domain Radar Chart"} demoCode={code} wrapperSx={{pt: 0, backgroundColor: 'background.paper'}}>
        <ResponsiveContainer width="100%" height={400}>
            <RadarChart outerRadius={150} data={data}>
                <Radar name="Lily" dataKey="B" stroke={"#e91e63"} fill={"#e91e63"} fillOpacity={0.6}/>
                <Radar name="Mike" dataKey="A" stroke={"#1e88e5"} fill={"#1e88e5"} fillOpacity={0.6}/>
                <PolarGrid/>
                <Legend/>
                <PolarAngleAxis dataKey="subject"/>
                <PolarRadiusAxis angle={30} domain={[0, 150]}/>
            </RadarChart>
        </ResponsiveContainer>
    </JumboDemoCard>
);

export default SpecifiedDomainRadarChart;
