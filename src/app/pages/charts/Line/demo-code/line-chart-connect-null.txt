import React from 'react';
import {CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis} from 'recharts';
import JumboDemoCard from "@jumbo/components/JumboDemoCard";
import Div from "@jumbo/shared/Div";
import code from '../demo-code/line-chart-connect-null.txt';
import {connectNullData} from "./data";

const LineChartConnectNulls = () => (
    <JumboDemoCard title={"Line Chart Connect Nulls"} demoCode={code} wrapperSx={{pt: 0, backgroundColor: 'background.paper'}}>
        <Div sx={{mb: 4, flex: 1}}>
            <ResponsiveContainer width="100%" height={200}>
                <LineChart data={connectNullData} margin={{top: 0, right: 0, left: 0, bottom: 0}}>
                    <XAxis dataKey="name"/>
                    <YAxis/>
                    <CartesianGrid strokeDasharray="3 3"/>
                    <Tooltip labelStyle={{color: 'black'}} itemStyle={{color: 'black'}} cursor={false}/>
                    <Line type="monotone" dataKey="uv" stroke={"#1e88e5"} fill={"#1e88e5"}/>
                </LineChart>
            </ResponsiveContainer>
        </Div>
        <Div>
            <ResponsiveContainer width="100%" height={200}>
                <LineChart data={connectNullData} margin={{top: 0, right: 0, left: 0, bottom: 0}}>
                    <XAxis dataKey="name"/>
                    <YAxis/>
                    <CartesianGrid strokeDasharray="3 3"/>
                    <Tooltip labelStyle={{color: 'black'}} itemStyle={{color: 'black'}} cursor={false}/>
                    <Line connectNulls={true} type="monotone" dataKey="uv" stroke={"#1e88e5"} fill={"#1e88e5"}/>
                </LineChart>
            </ResponsiveContainer>
        </Div>
    </JumboDemoCard>
);

export default LineChartConnectNulls;
