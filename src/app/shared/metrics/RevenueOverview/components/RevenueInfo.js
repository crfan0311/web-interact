import React from 'react';
import Div from "@jumbo/shared/Div";
import {Typography} from "@mui/material";
import Stack from "@mui/material/Stack";
import Span from "@jumbo/shared/Span";
import Divider from "@mui/material/Divider";
import {useJumboTheme} from "@jumbo/hooks";

const RevenueInfo = () => {
    const {theme} = useJumboTheme();
    return (
        <Div
            sx={{
                display: 'flex',
                flexDirection: 'column',
                textAlign: 'center',
                minHeight: '100%',
                borderLeft: {sm: 2},
                borderLeftColor: {sm: 'divider'},
                mr: {sm: -3},

                [theme.breakpoints.down('sm')]: {
                    border: 2,
                    borderColor: 'divider'
                },
            }}
        >
            <Div
                sx={{
                    flex: 1,
                    display: 'flex',
                    p: 2.5,
                    alignItems: 'center',
                    borderBottom: 2,
                    borderBottomColor: 'divider',
                    flexDirection: 'column',
                    justifyContent: 'center',
                }}
            >
                <Typography component={"h3"} variant={"h1"} mb={.5}>$28734</Typography>
                <Typography variant={"body1"} color={'text.secondary'} fontSize={'small'}>Total Revenue</Typography>
            </Div>

            <Div
                sx={{
                    flex: 1,
                    display: 'flex',
                    p: theme => theme.spacing(2.5, 2),
                    alignItems: 'center',
                }}
            >
                <Stack
                    flex={1}
                    direction={"row"}
                    divider={<Divider orientation="vertical" flexItem/>}
                >
                    <Span sx={{width: '50%'}}>
                        <Typography component={"h3"} variant={"h1"} mb={.5}>23</Typography>
                        <Typography variant={"body1"} color={'text.secondary'} fontSize={'small'}>Clients</Typography>
                    </Span>
                    <Span sx={{width: '50%'}}>
                        <Typography component={"h3"} variant={"h1"} mb={.5}>7</Typography>
                        <Typography variant={"body1"} color={'text.secondary'} fontSize={'small'}>Countries</Typography>
                    </Span>
                </Stack>
            </Div>
        </Div>
    );
};

export default RevenueInfo;
