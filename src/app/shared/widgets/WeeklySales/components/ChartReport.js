import React from 'react';
import {Bar, BarChart, Cell, LabelList, ResponsiveContainer, XAxis, YAxis} from 'recharts';

const customizedLabel = props => {
    const {x, y, value} = props;
    return (
        <text x={x + 5} y={y} dy={-20} textAnchor="middle">
            {value}
        </text>
    );
};

const ChartReport = ({data}) => {

    const chartData = data.map(product => {
        return {name: product.name, color: product.colorCode, ...product.sales_data};
    });

    return (
        <ResponsiveContainer width="100%" height={234}>
            <BarChart barSize={10} data={chartData} margin={{top: 35, right: 0, left: 0, bottom: -8}}>
                <XAxis dataKey="name" axisLine={false} tickLine={false}/>
                <YAxis hide/>
                <Bar dataKey="sold_qty">
                    <LabelList
                        dataKey="sold_qty"
                        content={(x, y, value) => customizedLabel(x, y, value)}
                    />
                    {chartData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color}/>
                    ))}
                </Bar>
            </BarChart>
        </ResponsiveContainer>
    );
};

export default ChartReport;
