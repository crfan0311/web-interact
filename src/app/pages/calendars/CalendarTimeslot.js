import React from 'react';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import {Calendar, momentLocalizer} from 'react-big-calendar';
import moment from 'moment';
import {calendarData} from "./data";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import CalendarWrapper from "./CalendarWrapper";
import {useTranslation} from "react-i18next";

const {events} = calendarData;
const today = new Date();
const currentYear = today.getFullYear();

const localizer = momentLocalizer(moment);


const CalendarTimeslot = () => {
    const {t} = useTranslation();
    return (
        <React.Fragment>
            <Typography variant={"h1"} mb={3}>{t('pages.title.calendarTimeslots')}</Typography>
            <Card>
                <CardContent>
                    <CalendarWrapper>
                        <Calendar
                            localizer={localizer}
                            events={events}
                            step={60}
                            timeslots={8}
                            defaultView="week"
                            defaultDate={new Date(currentYear, 3, 1)}
                            style={{height: 600}}
                        />
                    </CalendarWrapper>
                </CardContent>
            </Card>
        </React.Fragment>
    );
};

export default CalendarTimeslot;
