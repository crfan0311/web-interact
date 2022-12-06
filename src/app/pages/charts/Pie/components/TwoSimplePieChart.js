import React from 'react';
import PropTypes from 'prop-types';
import {Pie, PieChart, ResponsiveContainer, Tooltip} from 'recharts';
import {data01, data02} from './data';
import JumboDemoCard from "@jumbo/components/JumboDemoCard";
import code from '../demo-code/two-simple-pie.txt';

const TwoSimplePieChart = () => (
    <JumboDemoCard title={"Two Simple Pie charts"} demoCode={code} wrapperSx={{pt: 0, backgroundColor: 'background.paper'}}>
        <ResponsiveContainer width="100%" height={300}>
            <PieChart>
                <Pie dataKey="value" isAnimationActive={false} data={data01} cx="35%" cy="50%" outerRadius={80}
                     fill={"#1e88e5"} label/>
                <Pie dataKey="value" data={data02} cx="70%" cy="50%" innerRadius={40} outerRadius={80}
                     fill={"#e91e63"}/>
                <Tooltip labelStyle={{color: 'black'}} itemStyle={{color: 'black'}} cursor={false}/>
            </PieChart>
        </ResponsiveContainer>
    </JumboDemoCard>
);

TwoSimplePieChart.propTypes = {
    dataKey: PropTypes.node,
};
export default TwoSimplePieChart;
