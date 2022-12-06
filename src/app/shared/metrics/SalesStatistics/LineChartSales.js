import React from 'react';
import {CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts";
import Div from "@jumbo/shared/Div";
import {data} from "./data";
import {capitalizeFLetter} from "@jumbo/utils";

const LineChartSales = () => {
    return (
        <ResponsiveContainer height={250}>
            <LineChart width={480} height={250} data={data}
                       margin={{top: 5, right: 30, left: 20, bottom: 5}}>
                <defs>
                    <filter id="shadow" height="200%">
                        <feDropShadow
                            dx="0" dy="5" stdDeviation="8"
                            floodColor={"#82ca9d"}
                        />
                    </filter>
                </defs>
                <CartesianGrid strokeDasharray="6 1 2" horizontal={false} strokeOpacity={0.3}/>
                <XAxis dataKey="month" axisLine={false} tickLine={false}/>
                <YAxis dataKey={"sale"} axisLine={false} tickLine={false}/>
                <Tooltip
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
                                            >{row.value} Signups
                                            </div>
                                        </div>
                                    )
                                })}
                            </Div>
                        ) : null;
                    }}
                    wrapperStyle={{
                        background: 'rgba(0,0,0,0.9)',
                        borderRadius: 4,
                        padding: '5px 8px',
                        fontWeight: 500,
                        boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px'
                    }}
                />
                <Line type="linear" strokeWidth={2} dataKey="sale" stroke="#82ca9d" filter="url(#shadow)"/>
            </LineChart>
        </ResponsiveContainer>
    );
};

export default LineChartSales;
