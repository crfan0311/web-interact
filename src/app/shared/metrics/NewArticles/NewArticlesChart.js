import React from 'react';
import {Area, AreaChart, ResponsiveContainer, XAxis} from 'recharts';
import {newsArticles} from "./data";

const NewArticlesChart = () => {
    return (
        <ResponsiveContainer height={80}>
            <AreaChart data={newsArticles} margin={{top: 0, right: 0, left: 0, bottom: 0}}>
                <XAxis dataKey="month" hide/>
                <Area
                    dataKey="count"
                    type="monotone"
                    strokeWidth={3}
                    stackId="2"
                    stroke="#FFf"
                    fill="#0DC7B8"
                    fillOpacity={1}
                />
            </AreaChart>
        </ResponsiveContainer>
    );
};

export default NewArticlesChart;
