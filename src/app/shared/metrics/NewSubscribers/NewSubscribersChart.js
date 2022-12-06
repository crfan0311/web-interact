import React from 'react';
import {Bar, BarChart, ResponsiveContainer, Tooltip, XAxis} from 'recharts';
import {newSubscribers} from "./data";
import Div from "@jumbo/shared/Div";

const NewSubscribersChart = () => {
    return (
        <ResponsiveContainer height={75}>
            <BarChart data={newSubscribers} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
                <Tooltip
                    cursor={false}
                    content={({active, label, payload}) => {
                        return active ? (
                            <Div sx={{color:"common.white"}}>
                                {payload.map((row, index) => (
                                    <div key={index}>{`${label}: ${row.value} Subscribers`}</div>
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
                <XAxis dataKey="month" hide />
                <Bar dataKey="count" stackId="a" fill="#fff" barSize={6} />
            </BarChart>
        </ResponsiveContainer>
    );
};

export default NewSubscribersChart;
