import React from 'react';
import {Cell, Pie, PieChart, ResponsiveContainer} from 'recharts';

const data = [
    {name: 'Earning', value: 18756, color: '#fff'},
    {name: 'Pending', value: 5599, color: '#8B061E'},
];

const NewAuthorsChart = () => {
    return (
        <ResponsiveContainer height={90}>
            <PieChart>
                <text x="50%" fontSize={16} y="50%" textAnchor="middle" dominantBaseline="middle" fill="#fff">
                    1800
                </text>
                <Pie data={data} dataKey="value" cx="50%" cy="50%" innerRadius={36} outerRadius={44} fill="#8884d8">
                    {
                        data.map((entry, index) => (
                            <Cell key={index} fill={entry.color}/>
                        ))
                    }
                </Pie>
            </PieChart>
        </ResponsiveContainer>
    );
};

export default NewAuthorsChart;
