import React from 'react';
import {RadialBar, RadialBarChart, ResponsiveContainer, Tooltip} from "recharts";
import List from "@mui/material/List";
import {ListItem, ListItemIcon, ListItemText} from "@mui/material";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import Div from "@jumbo/shared/Div";
import {capitalizeFLetter} from "@jumbo/utils";

const CustomTooltip = ({active, payload}) => {

    if (active && payload && payload.length) {
        return (
            <Div sx={{
                color: 'common.white',
                background: 'rgba(0,0,0,0.9)',
                borderRadius: 1,
                padding: '5px 8px',
                fontWeight: 500,
                boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px'
            }}>
                <Div sx={{
                    fontSize: 8,
                    letterSpacing: 2,
                    textTransform: 'uppercase'
                }}>{capitalizeFLetter(payload[0].payload.name)}</Div>
                <div>{payload[0].value} USD</div>
            </Div>
        );
    }

    return null;
};

const ChartOrderRevenue = ({data}) => {
    return (
        <Div sx={{
            maxWidth: 600,
            margin: '0 auto',
            position: 'relative',
            p: theme => theme.spacing(0, 2),
        }}>
            <ResponsiveContainer height={250}>
                <RadialBarChart
                    width={480}
                    height={250}
                    innerRadius="50%"
                    outerRadius="100%"
                    data={data}
                    barCategoryGap={4}
                >
                    <RadialBar dataKey='amount' cornerRadius={12}/>
                    <Tooltip content={<CustomTooltip/>}/>
                </RadialBarChart>
            </ResponsiveContainer>
            <List
                disablePadding
                sx={{
                    position: 'absolute',
                    top: 5,
                    left: 5,
                }}
            >
                <ListItem disablePadding>
                    <ListItemIcon sx={{minWidth: 24}}>
                        <FiberManualRecordIcon sx={{color: data[0].fill, fontSize: '18px'}}/>
                    </ListItemIcon>
                    <ListItemText secondary="Average Revenue"/>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemIcon sx={{minWidth: 24}}>
                        <FiberManualRecordIcon sx={{color: data[1].fill, fontSize: '18px'}}/>
                    </ListItemIcon>
                    <ListItemText secondary="Total Revenue"/>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemIcon sx={{minWidth: 24}}>
                        <FiberManualRecordIcon sx={{color: data[2].fill, fontSize: '18px'}}/>
                    </ListItemIcon>
                    <ListItemText secondary="Average Orders"/>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemIcon sx={{minWidth: 24}}>
                        <FiberManualRecordIcon sx={{color: data[3].fill, fontSize: '18px'}}/>
                    </ListItemIcon>
                    <ListItemText secondary="Total Orders"/>
                </ListItem>
            </List>
        </Div>
    );
};
/* Todo data prop define */
export default ChartOrderRevenue;
