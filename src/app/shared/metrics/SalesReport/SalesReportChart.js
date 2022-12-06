import React from 'react';
import {Bar, BarChart, ResponsiveContainer, Tooltip, XAxis} from 'recharts';
import {salesHistoryWithPast} from "./data";
import Div from "@jumbo/shared/Div";
import {capitalizeFLetter} from "@jumbo/utils";

const SalesReportChart = () => {
    return (
        <ResponsiveContainer height={100}>
            <BarChart data={salesHistoryWithPast}>
                <Tooltip
                    animationEasing={"ease-in-out"}
                    content={({active, label, payload}) => {
                        return active ? (
                            <Div sx={{color: "common.white"}}>
                                {payload.map((row, index) => {
                                    return (
                                        <div key={index} className={index !== payload.length - 1 ? "mb-1" : ""}>
                                            <div style={{
                                                color: row.color,
                                                fontSize: 8,
                                                letterSpacing: 2,
                                                textTransform: 'uppercase'
                                            }}>
                                                {capitalizeFLetter(row.name)}
                                            </div>
                                            <div style={{
                                                color: row.color
                                            }}
                                            >{row.value} USD
                                            </div>
                                        </div>
                                    )
                                })}
                            </Div>
                        ) : null;
                    }}
                    wrapperStyle={{
                        background: 'rgba(255,255,255,0.9)',
                        borderRadius: 4,
                        padding: '5px 8px',
                        fontWeight: 500,
                        boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px'
                    }}
                />
                <XAxis dataKey="name" tickLine={false} axisLine={false}/>
                <Bar dataKey="current" fill="#9046EB" stackId={"a"} maxBarSize={10} barSize={4}/>
                <Bar dataKey="past" fill="#7B92D8" stackId={"a"} maxBarSize={10} barSize={4}/>
            </BarChart>
        </ResponsiveContainer>
    );
};

export default SalesReportChart;
