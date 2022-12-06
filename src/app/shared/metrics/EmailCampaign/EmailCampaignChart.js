import React from 'react';
import {Line, LineChart, ResponsiveContainer, Tooltip, XAxis} from 'recharts';
import {totalEmails} from "./data";
import Div from "@jumbo/shared/Div";

const itemLabels = {
    sent: 'Sent',
    bounced: 'Bounced',
};

const EmailCampaignChart = ({color, shadowColor}) => {
    return (
        <ResponsiveContainer height={80}>
            <LineChart data={totalEmails} className={"mx-auto"}>
                <defs>
                    <filter id="shadowMailSent" height="300%">
                        <feDropShadow
                            dx="0"
                            dy="3"
                            stdDeviation="8"
                            floodColor={shadowColor ? shadowColor : "#666666"}
                        />
                    </filter>
                </defs>
                <Tooltip
                    labelStyle={{color: 'black'}}
                    cursor={false}
                    content={({active, label, payload}) => {
                        return active ? (
                            <Div sx={{color: "common.white"}}>
                                <div>Month: {label}</div>
                                {payload.map((row, index) => (
                                    <div key={index} mt={1}>
                                        {itemLabels[row.name]} - {row.value}
                                    </div>
                                ))}
                            </Div>
                        ) : null;
                    }}
                    wrapperStyle={{
                        background: color ? color : 'rgba(0,0,0,.8)',
                        padding: '5px 8px',
                        borderRadius: 4,
                        overflow: 'hidden',
                        boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px'
                    }}
                />
                <XAxis dataKey="month" hide/>
                <Line dataKey="sent" filter={"url(#shadowMailSent)"} type="monotone" dot={null} strokeWidth={3}
                      stackId="2" stroke={color ? color : "#FFFFFF"}/>
            </LineChart>
        </ResponsiveContainer>
    );
};
/* Todo color, shadowColor prop define */
export default EmailCampaignChart;
