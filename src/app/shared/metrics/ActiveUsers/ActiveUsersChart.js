import React from 'react';
import {CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis} from 'recharts';
import {onlineSignups} from "./data";
import Div from "@jumbo/shared/Div";

//todo: add ResponsiveContainer and fix the page reload ResponsiveContainer width issue
const ActiveUsersChart = ({height}) => {
    return (
        <ResponsiveContainer height={height ? height : 55}>
            <LineChart data={onlineSignups} className={"mx-auto"}>
                <CartesianGrid strokeDasharray="6 1 2" horizontal={false} strokeOpacity={0.5}/>
                <Tooltip
                    cursor={false}
                    content={({active, label, payload}) => {
                        return active ? (
                            <Div sx={{color:"common.white"}}>
                                {payload.map((row, index) => (
                                    <div key={index}>{`${label}: ${row.value}`}</div>
                                ))}
                            </Div>
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
                <XAxis dataKey="month" hide/>
                <Line dataKey="count" type="monotone" dot={null} strokeWidth={3} stackId="2"
                      stroke="rgb(52, 143, 108)"/>

            </LineChart>
        </ResponsiveContainer>
    );
};
/* Todo height prop define */
export default ActiveUsersChart;
