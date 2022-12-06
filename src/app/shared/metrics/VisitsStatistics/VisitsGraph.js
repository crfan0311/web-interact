import React from 'react';
import {Area, AreaChart, ResponsiveContainer, Tooltip} from 'recharts';
import {visitsGraphData} from "./data";
import Div from "@jumbo/shared/Div";

const VisitsGraph = ({color}) => {
    return (
        <ResponsiveContainer className="card-img-bottom overflow-hidden" width="100%" height={95}>
            <AreaChart data={visitsGraphData} margin={{top: 0, right: 0, left: 0, bottom: 0}}>
                <Tooltip
                    labelStyle={{color: 'black'}}
                    cursor={false}
                    content={data => (
                        data.payload[0]
                            ?
                            <Div sx={{color: "common.white"}}>
                                {`price: ${data.payload[0].value}`}
                            </Div>
                            : null
                    )}
                    wrapperStyle={{
                        background: color ? color : 'rgba(0,0,0,.8)',
                        padding: '5px 8px',
                        borderRadius: 4,
                        overflow: 'hidden',
                        boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px'
                    }}
                />
                <Area dataKey="price" strokeWidth={2} stroke="#73cfce" fill="#00ada9" fillOpacity={1}/>
            </AreaChart>
        </ResponsiveContainer>
    );
};

export default VisitsGraph;
