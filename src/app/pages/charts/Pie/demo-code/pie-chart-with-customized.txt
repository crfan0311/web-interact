import React from 'react';
import {Cell, Pie, PieChart, ResponsiveContainer} from 'recharts';
import data from "./data";
import JumboDemoCard from "@jumbo/components/JumboDemoCard";
import code from '../demo-code/pie-chart-with-customized.txt';
const COLORS = ['#1e88e5', '#e91e63', '#FF8C00', '#F44336'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({cx, cy, midAngle, innerRadius, outerRadius, percent, index}) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
        <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
            {`${(percent * 100).toFixed(0)}%`}
        </text>
    );
};

const PieChartWithCustomizedLabel = () => {
    return (
        <JumboDemoCard title={"Pie Chart with Customized Label"} demoCode={code} wrapperSx={{pt: 0, backgroundColor: 'background.paper'}}>
            <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                    <Pie dataKey="value" data={data} labelLine={false} label={renderCustomizedLabel} outerRadius={80}
                         fill={"#1e88e5"}>
                        {data.map((entry, index) => (
                            <Cell key={index} fill={COLORS[index % COLORS.length]}/>
                        ))}
                    </Pie>
                </PieChart>
            </ResponsiveContainer>
        </JumboDemoCard>
    );
};

export default PieChartWithCustomizedLabel;
