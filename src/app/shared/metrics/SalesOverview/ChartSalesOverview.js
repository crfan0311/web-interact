import React from 'react';
import {Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip} from "recharts";
import Div from "@jumbo/shared/Div";
import {capitalizeFLetter} from "@jumbo/utils";

const ChartSalesOverview = ({data}) => {
    return (
        <ResponsiveContainer height={192}>
            <AreaChart data={data} margin={{top: 0, right: 0, left: 0, bottom: 0}}>
                <defs>
                    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="1%" stopColor="#EAE7FF"/>
                        <stop offset="99%" stopColor="#ffffff"/>
                    </linearGradient>
                    <linearGradient id="colorUv1" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="3%" stopColor="#FFF2E0"/>
                        <stop offset="97%" stopColor="#ffffff"/>
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
                                            >{row.value} USD
                                            </div>
                                        </div>
                                    )
                                })}
                            </Div>
                        ) : null;
                    }}
                    wrapperStyle={{
                        background: 'rgba(255,255,255,0.8)',
                        borderRadius: 4,
                        padding: '5px 8px',
                        fontWeight: 500,
                        boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px'
                    }}
                    cursor={false}
                />
                <CartesianGrid strokeDasharray="6 1 2" horizontal={false} strokeOpacity={0.2} stroke={"#E73145"}/>
                <Area
                    type="monotone"
                    dataKey={"Max"}
                    stackId="2"
                    strokeWidth={2}
                    fillOpacity={.7}
                    stroke={"#51459E"}
                    fill="url(#colorUv)"
                />
                <Area
                    type="monotone"
                    dataKey={"Min"}
                    stackId="1" strokeWidth={2}
                    fillOpacity={.7}
                    stroke={"#F39711"}
                    fill="url(#colorUv1)"
                />
            </AreaChart>
        </ResponsiveContainer>
    );
};
/* Todo data prop define */
export default ChartSalesOverview;
