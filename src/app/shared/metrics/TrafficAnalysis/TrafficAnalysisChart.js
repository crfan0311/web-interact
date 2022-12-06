import React from 'react';
import {Cell, Pie, PieChart, ResponsiveContainer, Tooltip} from 'recharts';
import {applicationsData} from "./data";
import Div from "@jumbo/shared/Div";

const CustomTooltip = ({active, payload}) => {
    if (active) {
        return (
            <React.Fragment>
                {`${payload[0].name} : ${payload[0].value}%`}
            </React.Fragment>
        );
    }
    return null;
};

const TrafficAnalysisChart = () => {
    const {pieData, colors} = applicationsData;
    return (
        <Div sx={{mb: 3}}>
            <ResponsiveContainer height={224}>
                <PieChart>
                    <defs>
                        <filter id="f1" x="0" y="0" width="150%" height="150%">
                            <feGaussianBlur in="SourceAlpha" stdDeviation="4"/>
                            <feOffset dx="2" dy="4"/>
                            <feMerge>
                                <feMergeNode/>
                                <feMergeNode in="SourceGraphic"/>
                            </feMerge>
                        </filter>
                    </defs>
                    <Pie
                        data={pieData}
                        color="#000000"
                        dataKey="value"
                        nameKey="name"
                        cx="50%"
                        cy="50%"
                        isAnimationActive={true}
                        outerRadius={95}
                        fill="#8884d8"
                        strokeWidth={0}
                    >
                        {pieData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={colors[index % colors.length]}
                                  strokeWidth={8}
                            />
                        ))}

                    </Pie>
                    <Tooltip content={<CustomTooltip/>}/>
                </PieChart>
            </ResponsiveContainer>
        </Div>
    );
};

export default TrafficAnalysisChart;
