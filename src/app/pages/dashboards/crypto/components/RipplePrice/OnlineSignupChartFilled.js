import React from 'react';
import {CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip} from 'recharts';
import {onlineSignups} from "./data";
import Div from "@jumbo/shared/Div";
import {capitalizeFLetter} from "@jumbo/utils";

//todo: add ResponsiveContainer and fix the page reload ResponsiveContainer width issue
const OnlineSignupChartFilled = ({color, shadowColor}) => {
    return (
        <ResponsiveContainer height={80}>
            <LineChart data={onlineSignups} className={"mx-auto"}>
                <defs>
                    <filter id="shadow" height="200%">
                        <feDropShadow
                            dx="0" dy="5" stdDeviation="8"
                            floodColor={shadowColor ? shadowColor : "#6610f2"}
                        />
                    </filter>
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
                        background: 'rgba(0,0,0,0.8)',
                        borderRadius: 4,
                        padding: '5px 8px',
                        fontWeight: 500,
                        boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px'
                    }}
                    cursor={false}
                />
                <CartesianGrid strokeDasharray="6 1 2" horizontal={false} strokeOpacity={0.7}/>
                <Line dataKey="count"
                      filter="url(#shadow)"
                      type="monotone"
                      dot={null}
                      strokeWidth={2}
                      stackId="2"
                      stroke={color ? color : "#0062FF"}
                />
            </LineChart>
        </ResponsiveContainer>
    );
};

export default OnlineSignupChartFilled;
