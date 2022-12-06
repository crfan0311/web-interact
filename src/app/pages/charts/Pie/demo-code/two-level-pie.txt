import React from 'react';
import PropTypes from 'prop-types';
import {Pie, PieChart, ResponsiveContainer} from 'recharts';
import {data01, data02} from './data';
import JumboDemoCard from "@jumbo/components/JumboDemoCard";
import code from '../demo-code/two-level-pie.txt';

const TwoLevelPieChart = () => (
    <JumboDemoCard title={"Two Level Pie Chart"} demoCode={code} wrapperSx={{pt: 0, backgroundColor: 'background.paper'}}>
        <ResponsiveContainer width="100%" height={300}>
            <PieChart>
                <Pie dataKey="value" data={data01} outerRadius={60} fill={"#1e88e5"}/>
                <Pie dataKey="value" data={data02} innerRadius={70} outerRadius={90} fill={"#e91e63"} label/>
            </PieChart>
        </ResponsiveContainer>
    </JumboDemoCard>
);

TwoLevelPieChart.propTypes = {
    dataKey: PropTypes.node,
};
export default TwoLevelPieChart;
