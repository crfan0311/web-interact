import React from 'react';
import {Pie, PieChart, ResponsiveContainer} from 'recharts';
import data from "./data";
import JumboDemoCard from "@jumbo/components/JumboDemoCard";
import code from '../demo-code/staight-angle-pie.txt';

const StraightAnglePieChart = () => (
    <JumboDemoCard title={"Straight Angle Pie Chart"} demoCode={code} wrapperSx={{pt: 0, backgroundColor: 'background.paper'}}>
        <ResponsiveContainer width="100%" height={300}>
            <PieChart>
                <Pie dataKey="value" startAngle={270} endAngle={0} data={data} outerRadius={80} fill={"#1e88e5"} label/>
            </PieChart>
        </ResponsiveContainer>
    </JumboDemoCard>
);

export default StraightAnglePieChart;
