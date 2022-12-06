import React from 'react';
import {Avatar, Card, CardContent, Rating, Typography} from "@mui/material";
import StarIcon from '@mui/icons-material/Star';
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";

const AgentDetail = ({agentDetail}) => {
    return (
        <Card sx={{overflow: 'visible', mt: 4}}>
            <CardContent>
                <Avatar
                    alt={agentDetail.title}
                    src={agentDetail.avatar}
                    sx={{boxShadow: 26, width: 60, height: 60, mb: 2, mt: '-54px'}}
                />
                <Typography variant={"h6"}>{agentDetail.title}</Typography>
                <Stack direction={"row"} spacing={1} alignItems={'center'}>
                    <Rating
                        name="feedback"
                        value={1}
                        max={1}
                        readOnly
                        precision={1}
                        size={"small"}
                        emptyIcon={<StarIcon/>}
                    />
                    <Typography
                        component={'div'}
                        variant={'body1'}
                        color={'text.secondary'}
                        sx={{
                            display: 'flex',
                            fontSize: 12
                        }}
                    >
                        {agentDetail.rating}
                        <Divider orientation="vertical" flexItem sx={{mx: 1, my: .5}}/>
                        {agentDetail.desc}
                    </Typography>
                </Stack>
            </CardContent>
        </Card>
    );
};
/* Todo agent detail prop */
export default AgentDetail;
