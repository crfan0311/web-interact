import React from 'react';
import {Card, CardContent, Typography} from "@mui/material";
import Avatar from "@mui/material/Avatar";
import {alpha} from "@mui/material/styles";
import MailIcon from "@mui/icons-material/Mail";

const EmailComponent = () => {
    return (
        <Card sx={{minHeight: '100%'}}>
            <CardContent
                sx={{textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <Avatar
                    sx={{
                        bgcolor: theme => alpha(theme.palette.primary.main, .35),
                        width: 52,
                        height: 52,
                        border: 1,
                        color: 'primary.main',
                        borderColor: 'primary.main',
                        boxShadow: 2,
                        mb: 3
                    }}
                >
                    <MailIcon fontSize={"medium"}/>
                </Avatar>
                <Typography variant={"h5"}>Email</Typography>
                <Typography variant={"body1"} color={"text.secondary"}>
                    info@Example.com
                </Typography>
            </CardContent>
        </Card>
    );
};

export default EmailComponent;
