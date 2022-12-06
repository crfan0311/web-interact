import React from 'react';
import {Area, AreaChart, ResponsiveContainer, Tooltip, XAxis} from 'recharts';
import {growth} from "./data";
import Div from "@jumbo/shared/Div";

const GrowthGraph = ({color}) => {
    return (
        <ResponsiveContainer width="100%" height={117}>
            <AreaChart data={growth} margin={{top: 0, right: 0, left: 0, bottom: 0}}>
                <Tooltip
                    cursor={false}
                    content={({active, label, payload}) => {
                        return active ? (
                            <Div sx={{color: "common.white"}}>
                                {payload.map((row, index) => (
                                    <div key={index}>{`${label}: ${row.value}`}</div>
                                ))}
                            </Div>
                        ) : null;
                    }}
                    wrapperStyle={{
                        backgroundColor: color ? color : 'rgba(0,0,0,.8)',
                        padding: '5px 8px',
                        borderRadius: 4,
                        overflow: 'hidden',
                        boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px'
                    }}
                />
                <defs>
                    <linearGradient id="color3" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#6200EE" stopOpacity={1}/>
                        <stop offset="95%" stopColor="#B819D2" stopOpacity={1}/>
                    </linearGradient>
                </defs>
                <XAxis dataKey="month" hide/>
                <Area
                    dataKey="price"
                    type="monotone"
                    strokeWidth={0}
                    stackId="2"
                    stroke="#6200EE"
                    fill="url(#color3)"
                    fillOpacity={1}
                />
            </AreaChart>
        </ResponsiveContainer>
    );
};

export default GrowthGraph;
