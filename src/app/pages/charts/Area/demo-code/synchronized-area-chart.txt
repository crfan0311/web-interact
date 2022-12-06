import React from 'react';
import {Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis} from 'recharts';
import data from "./data";
import Typography from "@mui/material/Typography";
import JumboDemoCard from "@jumbo/components/JumboDemoCard";
import code from '../demo-code/synchronized-area-chart.txt';
import Div from "@jumbo/shared/Div";

const SynchronizedAreaChart = () => (
    <JumboDemoCard title={"Synchronized Area Chart"} demoCode={code} wrapperSx={{flexDirection: 'column', pt: 0, backgroundColor: 'background.paper'}}>
        <Div sx={{mb: 5, alignSelf: 'stretch'}}>
            <Typography variant={"h5"} mb={2}>A demo of synchronized AreaCharts</Typography>
            <ResponsiveContainer width="100%" height={200}>
                <AreaChart data={data} syncId="anyId" margin={{top: 0, right: 0, left: 0, bottom: 0}}>
                    <XAxis dataKey="name"/>
                    <YAxis/>
                    <CartesianGrid strokeDasharray="3 3"/>
                    <Tooltip labelStyle={{color: 'black'}} itemStyle={{color: 'black'}} cursor={false}/>
                    <defs>
                        <linearGradient id="color2" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#1ABBDE" stopOpacity={1}/>
                            <stop offset="95%" stopColor="#09BCA7" stopOpacity={1}/>
                        </linearGradient>
                    </defs>
                    <Area type="monotone" dataKey="uv" stroke="" fill={"#e91e63"} fillOpacity={1}/>
                </AreaChart>
            </ResponsiveContainer>
        </Div>
        <Div sx={{alignSelf: 'stretch'}}>
            <Typography variant={"h5"} mb={2}>Maybe some other content</Typography>
            <ResponsiveContainer width="100%" height={200}>
                <AreaChart data={data} syncId="anyId" margin={{top: 0, right: 0, left: 0, bottom: 0}}>
                    <XAxis dataKey="name"/>
                    <YAxis/>
                    <CartesianGrid strokeDasharray="3 3"/>
                    <Tooltip labelStyle={{color: 'black'}} itemStyle={{color: 'black'}} cursor={false}/>
                    <defs>
                        <linearGradient id="color3" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#6200EE" stopOpacity={1}/>
                            <stop offset="95%" stopColor="#B819D2" stopOpacity={1}/>
                        </linearGradient>
                    </defs>
                    <Area type="monotone" dataKey="pv" stroke="" fill={"#1e88e5"} fillOpacity={1}/>
                </AreaChart>
            </ResponsiveContainer>
        </Div>
    </JumboDemoCard>
);

export default SynchronizedAreaChart;
