import React from 'react';
import JumboCardQuick from "@jumbo/components/JumboCardQuick";
import {List} from "@mui/material";
import {events} from "./data";
import EventItem from "./EventItem";

const Events = ({sx}) => {
    return (
        <JumboCardQuick
            title={"Events"}
            subheader={"What Kiley is up to"}
            wrapperSx={{p: 0}}
            headerSx={{
                borderBottom: 1,
                borderBottomColor: 'divider'
            }}
            sx={sx}
        >
            <List disablePadding>
                {
                    events.map((event, index) => (
                        <EventItem event={event} key={index}/>
                    ))
                }
            </List>
        </JumboCardQuick>
    );
};

export default Events;
