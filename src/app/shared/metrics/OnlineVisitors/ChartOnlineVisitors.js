import React from 'react';
import {Area, AreaChart, ResponsiveContainer, Tooltip} from 'recharts';
import Div from "@jumbo/shared/Div";
import {capitalizeFLetter} from "@jumbo/utils";
import {onlineVisitorsData} from "./data";

const ChartOnlineVisitors = () => {
    return (
        <ResponsiveContainer width="100%" height={150}>
            <AreaChart
                data={onlineVisitorsData}
                margin={{
                    top: 0,
                    right: 0,
                    left: 0,
                    bottom: 0,
                }}
            >
                <defs>
                    <linearGradient id="colorUv">
                        <stop offset="0%" stopColor="rgb(0, 153, 153)"/>
                        <stop offset="100%" stopColor="rgb(54, 9, 109)"/>
                    </linearGradient>
                </defs>
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
                                            >{row.value}</div>
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
                <Area type="monotone" dataKey="online users" strokeWidth={0} fill="url(#colorUv)"/>
            </AreaChart>
        </ResponsiveContainer>
    );
};

export default ChartOnlineVisitors;
