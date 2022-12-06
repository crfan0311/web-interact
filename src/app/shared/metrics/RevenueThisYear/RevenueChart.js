import React from 'react';
import {Line, LineChart, ResponsiveContainer, Tooltip, XAxis} from 'recharts';
import {totalRevenue} from "./data";
import Div from "@jumbo/shared/Div";

//todo: add ResponsiveContainer and fix the page reload ResponsiveContainer width issue
const RevenueChart = ({color, shadowColor}) => {
    return (
        <ResponsiveContainer height={80}>
            <LineChart data={totalRevenue} className={"mx-auto"}>
                <defs>
                    <filter id="shadowRevenue" height="200%">
                        <feDropShadow
                            dx="0" dy="5" stdDeviation="8"
                            floodColor={shadowColor ? shadowColor : "#28a745"}
                        />
                    </filter>
                </defs>
                <Tooltip
                    labelStyle={{color: 'black'}}
                    cursor={false}
                    content={data => (
                        data.payload[0]
                            ?
                            <Div sx={{color: "common.white"}}>
                                {`${data.label}: $${data.payload[0].value}`}
                            </Div>
                            : null
                    )}
                    wrapperStyle={{
                        background: color ? color : 'rgba(0,0,0,.8)',
                        padding: '5px 8px',
                        borderRadius: 4,
                        overflow: 'hidden',
                        boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px'
                    }}
                />
                <XAxis dataKey="month" hide/>
                <Line dataKey="amount" filter={"url(#shadowRevenue)"} type="monotone" dot={null} strokeWidth={3}
                      stackId="2" stroke={color ? color : "#fff"}/>
            </LineChart>
        </ResponsiveContainer>
    );
};
/* Todo color, shadowColor prop define */
export default RevenueChart;
