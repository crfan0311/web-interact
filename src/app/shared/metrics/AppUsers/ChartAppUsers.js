import React from 'react';
import {Cell, Pie, PieChart, ResponsiveContainer} from 'recharts';
import List from "@mui/material/List";
import {ListItem, ListItemIcon, ListItemText} from "@mui/material";
import styled from "@emotion/styled";
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

const data = [
    {name: 'Android', value: 400},
    {name: 'iOS', value: 300},
    {name: 'Web', value: 300},
];
const COLORS = ['#7352C7', '#E73145', '#3BD2A2'];

const ListItemInline = styled(ListItem)(({theme}) => ({
    width: 'auto',
    display: 'inline-flex',
    padding: theme.spacing(0, .5),
}));

const ChartAppUsers = () => {
    return (
        <React.Fragment>
            <ResponsiveContainer width="100%" height={140}>
                <PieChart>
                    <Pie
                        data={data}
                        cx={"50%"}
                        cy={"50%"}
                        innerRadius={40}
                        outerRadius={60}
                        fill="#8884d8"
                        dataKey="value"
                    >
                        {
                            data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]}/>
                            ))
                        }
                    </Pie>
                </PieChart>
            </ResponsiveContainer>
            <List
                disablePadding
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    textAlign: 'center',
                    justifyContent: 'center',
                    minWidth: 0,
                    mt: 1
                }}
            >
                <ListItemInline>
                    <ListItemIcon sx={{minWidth: 16}}>
                        <FiberManualRecordIcon fontSize={"10px"} sx={{color: COLORS[0]}}/>
                    </ListItemIcon>
                    <ListItemText primary="Android"/>
                </ListItemInline>
                <ListItemInline>
                    <ListItemIcon sx={{minWidth: 16}}>
                        <FiberManualRecordIcon fontSize={"10px"} sx={{color: COLORS[1]}}/>
                    </ListItemIcon>
                    <ListItemText primary="iOS"/>
                </ListItemInline>
                <ListItemInline>
                    <ListItemIcon sx={{minWidth: 16}}>
                        <FiberManualRecordIcon fontSize={"10px"} sx={{color: COLORS[2]}}/>
                    </ListItemIcon>
                    <ListItemText primary="Web"/>
                </ListItemInline>
            </List>
        </React.Fragment>
    );
};

export default ChartAppUsers;
