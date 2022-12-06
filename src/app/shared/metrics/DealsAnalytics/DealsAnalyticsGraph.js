import React from 'react';
import {Bar, BarChart, ResponsiveContainer, Tooltip, XAxis} from 'recharts';
import {dealsAnalyticsData} from "./data";
import Div from "@jumbo/shared/Div";
import {capitalizeFLetter} from "@jumbo/utils";

const DealAnalyticsGraph = () => {
    return (
        <ResponsiveContainer width="100%" height={134}>
            <BarChart data={dealsAnalyticsData} margin={{top: 0, right: 0, left: 0, bottom: 0}}>
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
                                            >{row.value}
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

                <XAxis dataKey="month" hide/>
                <Bar dataKey="deals" stackId="a" fill="#1E88E5" barSize={8}/>
                <Bar dataKey="queries" stackId="a" fill="#E91E63" barSize={8}/>
            </BarChart>
        </ResponsiveContainer>
    );
};

export default DealAnalyticsGraph;
