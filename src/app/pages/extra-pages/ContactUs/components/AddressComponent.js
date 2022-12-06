import React from 'react';
import {Card, CardContent, Typography} from "@mui/material";
import Avatar from "@mui/material/Avatar";
import {alpha} from "@mui/material/styles";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const AddressComponent = () => {
    return (
        <Card>
            <CardContent
                sx={{textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <Avatar
                    sx={{
                        bgcolor: theme => alpha(theme.palette.info.main, .35),
                        width: 52,
                        height: 52,
                        border: 1,
                        color: 'info.main',
                        borderColor: 'info.main',
                        boxShadow: 2,
                        mb: 3
                    }}
                >
                    <LocationOnIcon fontSize={"medium"}/>
                </Avatar>
                <Typography variant={"h5"}>Address</Typography>
                <Typography variant={"body1"} color={"text.secondary"}>
                    44 New Design Street <br/>Melbourne 005<br/>Australia 300
                </Typography>
            </CardContent>
        </Card>
    );
};

export default AddressComponent;
