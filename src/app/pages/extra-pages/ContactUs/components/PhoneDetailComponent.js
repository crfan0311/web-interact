import React from 'react';
import {Card, CardContent, Typography} from "@mui/material";
import Avatar from "@mui/material/Avatar";
import {alpha} from "@mui/material/styles";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";

const PhoneDetailComponent = () => {
    return (
        <Card sx={{minHeight: '100%'}}>
            <CardContent
                sx={{textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <Avatar
                    sx={{
                        bgcolor: theme => alpha(theme.palette.warning.main, .35),
                        width: 52,
                        height: 52,
                        border: 1,
                        color: 'warning.main',
                        borderColor: 'warning.main',
                        boxShadow: 2,
                        mb: 3
                    }}
                >
                    <LocalPhoneIcon fontSize={"medium"}/>
                </Avatar>
                <Typography variant={"h5"}>Phone No.</Typography>
                <Typography variant={"body1"} color={"text.secondary"}>
                    01 (800) 433 544 <br/>01 (800) 433 544
                </Typography>
            </CardContent>
        </Card>
    );
};

export default PhoneDetailComponent;
