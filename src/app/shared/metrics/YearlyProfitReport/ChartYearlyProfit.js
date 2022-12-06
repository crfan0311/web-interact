import React from 'react';
import {Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip} from 'recharts';
import {data} from "./data";
import Div from "@jumbo/shared/Div";
import {capitalizeFLetter} from "@jumbo/utils";

const gradientOffset = () => {
    const dataMax = Math.max(...data.map((i) => i.profit));
    const dataMin = Math.min(...data.map((i) => i.profit));

    if (dataMax <= 0) {
        return 0;
    }
    if (dataMin >= 0) {
        return 1;
    }

    return dataMax / (dataMax - dataMin);
};

const off = gradientOffset();

const ChartYearlyProfit = () => {
    return (
        <ResponsiveContainer height={100}>

            <AreaChart
                width={500}
                height={400}
                data={data}
                margin={{
                    top: 10,
                    right: 30,
                    left: 0,
                    bottom: 0,
                }}
            >
                <CartesianGrid strokeDasharray="6 1 2" horizontal={false} strokeOpacity={0.7}/>
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
                        background: 'rgba(255,255,255,.9)',
                        borderRadius: 4,
                        padding: '5px 8px',
                        fontWeight: 500,
                        boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px'
                    }}
                />
                <defs>
                    <linearGradient id="splitColor" x1="0" y1="0" x2="0" y2="1">
                        <stop offset={off} stopColor="#7352C7" stopOpacity={1}/>
                        <stop offset={off} stopColor="#F39711" stopOpacity={1}/>
                    </linearGradient>
                </defs>
                <Area type="monotone" dataKey="profit" stroke="#402C66" strokeWidth={2} fill="url(#splitColor)"/>
            </AreaChart>
        </ResponsiveContainer>
    );
};

export default ChartYearlyProfit;
