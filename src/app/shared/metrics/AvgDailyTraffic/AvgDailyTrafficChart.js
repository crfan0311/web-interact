import React from 'react';
import {Area, AreaChart, ResponsiveContainer, Tooltip, XAxis} from 'recharts';
import {dailyTraffic} from "./data";

const AvgDailyTrafficChart = () => {
    return (
        <ResponsiveContainer width={"100%"} height={80}>
            <AreaChart data={dailyTraffic} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
                <Tooltip
                    cursor={false}
                    content={({active, label, payload}) => {
                        return active ? (
                            <div className={"text-white"}>
                                {payload.map((row, index) => (
                                    <div key={index}>{`${label}: ${row.value} Signups`}</div>
                                ))}
                            </div>
                        ) : null;
                    }}
                    wrapperStyle={{
                        backgroundColor: 'rgba(0,0,0,.8)',
                        padding: '5px 8px',
                        borderRadius: 4,
                        overflow: 'hidden',
                        boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px'
                    }}
                />
                <XAxis dataKey="day" hide/>
                <Area dataKey="count" strokeWidth={2} stackId="2" stroke="#916BBF" fill="#916BBF" fillOpacity={1}/>
            </AreaChart>
        </ResponsiveContainer>
    );
};

export default AvgDailyTrafficChart;
