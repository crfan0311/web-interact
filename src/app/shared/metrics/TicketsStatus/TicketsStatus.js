import React from 'react';
import JumboCardQuick from "@jumbo/components/JumboCardQuick";
import {ListItem, ListItemIcon, ListItemText, Typography} from "@mui/material";
import {Cell, Legend, Pie, PieChart, ResponsiveContainer} from "recharts";
import {ticketsStatus} from "./data";
import List from "@mui/material/List";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import styled from "@emotion/styled";
import {useTranslation} from "react-i18next";

const ListItemInline = styled(ListItem)(({theme}) => ({
    width: 'auto',
    display: 'inline-flex',
    padding: theme.spacing(0, .5),
}));

const renderLegend = (props) => {
    const {payload} = props;
    return (
        <List disablePadding>
            {
                payload.map((entry, index) => {
                    return (
                        <ListItemInline key={`item-${index}`}>
                            <ListItemIcon sx={{minWidth: 20}}>
                                <FiberManualRecordIcon fontSize={"10px"} sx={{color: entry.color}}/>
                            </ListItemIcon>
                            <ListItemText
                                primary={
                                    <Typography variant={"body1"} fontSize={"12px"}>{entry.value}</Typography>
                                }
                            />
                        </ListItemInline>
                    )
                })
            }
        </List>
    );
};

const TicketsStatus = () => {
    const {t} = useTranslation();
    return (
        <JumboCardQuick
            title={t("widgets.title.ticketStatus")}
            sx={{textAlign: 'center'}}
            wrapperSx={{
                pt: 2,
                '&:last-child': {
                    pb: 6.5
                }
            }}
        >
            <ResponsiveContainer width="100%" height={240}>
                <PieChart>
                    <text x="50%" className="h1" y="50%" textAnchor="middle" dominantBaseline="middle"/>
                    <Pie data={ticketsStatus} dataKey="value" cx="50%" cy="50%" innerRadius={45} outerRadius={80}
                         fill="#8884d8">
                        {ticketsStatus.map((item, index) => (
                            <Cell key={index} fill={item.color}/>
                        ))}
                    </Pie>
                    <Legend content={renderLegend} wrapperStyle={{position: "absolute", bottom: -24}}/>
                </PieChart>
            </ResponsiveContainer>

        </JumboCardQuick>
    );
};

export default TicketsStatus;
