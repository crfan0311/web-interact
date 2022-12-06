import React from 'react';
import {Cell, Pie, PieChart, ResponsiveContainer} from 'recharts';
import data from "./data";
import JumboDemoCard from "@jumbo/components/JumboDemoCard";
import code from '../demo-code/pie-chart-with-padding.txt';

const COLORS = ['#1e88e5', '#e91e63', '#FF8C00', '#F44336'];

const PieChartWithPaddingAngle = () => {
    return (
        <JumboDemoCard title={"Pie Chart with Padding Angle"} demoCode={code} wrapperSx={{pt: 0, backgroundColor: 'background.paper'}}>
            <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                    <Pie dataKey="value" data={data} cx="35%" cy="50%" innerRadius={60} outerRadius={80} fill="#6200EE"
                         paddingAngle={5}>
                        {data.map((entry, index) => (
                            <Cell key={index} fill={COLORS[index % COLORS.length]}/>
                        ))}
                    </Pie>
                    <Pie
                        dataKey="value"
                        data={data}
                        cx="70%"
                        cy="50%"
                        startAngle={180}
                        endAngle={0}
                        innerRadius={60}
                        outerRadius={80}
                        fill={"#1e88e5"}
                        paddingAngle={5}>
                        {data.map((entry, index) => (
                            <Cell key={index} fill={COLORS[index % COLORS.length]}/>
                        ))}
                    </Pie>
                </PieChart>
            </ResponsiveContainer>
        </JumboDemoCard>
    );
};

export default PieChartWithPaddingAngle;
